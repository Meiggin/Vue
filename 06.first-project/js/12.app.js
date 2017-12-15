new Vue({
	el:'#app',
	data:{
		playerHealth:100,
		monsterHealth:100,
		gameIsRunning:false,
		// 增加轮到的位置
		turns:[]
	},
	methods:{
		startGame:function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack:function(){
			// 重新设置damage变量，对turns做unshift处理
			var damage = this.calculateDamage(3,10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer:true,
				text:'Player hits Monster for ' + damage
			});
			
			if(this.checkWin()){
				return;
			}
			// 怪兽攻击
			this.monsterAttacks();
			
		},
		// 特别攻击操作
		specialAttack:function(){
			var damage = this.calculateDamage(10,20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer:true,
				text:'Player hits Monster hard for ' + damage
			});
			
			if(this.checkWin()){
				return;
			}
			// 怪兽攻击
			this.monsterAttacks();
		},
		heal: function(){
			if(this.playerHealth <= 90){
				this.playerHealth += 10;
			}else{
				this.playerHealth = 100;
			}
			
			this.turns.unshift({
				isPlayer:true,
				text:'Player heals for 10'
			});
			
			this.monsterAttacks();
		},
		giveUp:function(){
			this.gameIsRunning = false;
		},
		// 增加怪兽攻击
		monsterAttacks:function(){
			// 重新设置damage变量，对turns做unshift处理
			var damage = this.calculateDamage(5,12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer:false,
				text:'Monster hits Player for ' + damage
			});
			
		},
		calculateDamage:function(min,max){
			return Math.max(Math.floor(Math.random()*max)+1,min);
		},
		checkWin:function(){
			if(this.monsterHealth<=0){
				if(confirm('You won! New Game?')){
					this.startGame();
				}else{
					this.gameIsRunning = false;
				}
				return true;
			}else if(this.playerHealth <=0){
				if(confirm('You lost! New Game?')){
					this.startGame();
				}else{
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});