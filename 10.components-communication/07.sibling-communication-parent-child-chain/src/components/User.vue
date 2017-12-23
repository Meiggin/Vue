<template>
	<div class="component">
		<h1>用户组件</h1>
		<p>我是一个用户</p>
		<button @click="changeName">修改我的姓名</button>
		<p>姓名是：{{ name }}</p>
		<hr>
		<div class="row">
			
				<!-- 
				<app-user-detail name="Vane">是直接传值的方式进行操作
				而
				<app-user-detail :name="name">是绑定data中return回来的name属性值进行操作
				不管怎么样，都可以通过属性传递，props接收将父组件的值传递到子组件中去
				-------------------------------------------------------------------------------
				如果将:name修改为:myName，也就是修改属性的名称，那么UserDetail中哪些地方需要进行修改?
				{{ myName}} 与 props:['myName']
				-------------------------------------------------------------------------------
				如果不传递:myName="name"的话，那么就会使用UserDetail中的myName的default值
				-->
				<!-- <app-user-detail :myName="name" :childrenRequest="letParentResponse">
				</app-user-detail> -->
			<div class="col-xs-12 col-sm-6">
				<app-user-detail 
				:myName="name" 
				@nameWasReset="name = $event"
				:resetFn="resetName"
				:userAge="age">
				</app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit :userAge="age" 
				@ageWasEdited="age = $event">
				</app-user-edit>
			</div>
		</div>		
	</div>
</template>

<script>
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';

	export default {
		data: function(){
			return {
				name: 'Vane',
				age:37
			}
		},
		methods:{
			changeName(){
				this.name = 'Fang';
			},
			letParentResponse(request){
				// console.log(request);
				this.name = request;
			},
			resetName(){
				this.name = 'Vane';
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>