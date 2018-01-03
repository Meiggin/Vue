<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
  			<h1>指令练习</h1>
  			<!-- 实现自定义指令，指令功能类似于v-on，实现对事件的监听 -->
        <!-- <button v-customOn="clicked">Click Me</button> -->
        <!-- 增加click的参数模式，可以输入事件类型，在bind里通过监听事件进行判别 -->
        <button v-customOn:click="clicked">Click Me</button>

        <hr>

        <div style=" width:100px; height:100px; background-color:green;" v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave"></div>
  		</div>
  	</div>  	
  </div>
</template>

<script>
export default {
  directives:{
    customOn:{
      bind(el,binding){
        // el.onclick = function(){
        //   binding.value();
        // }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type,fn);
      }
    }
  },
  methods:{
    clicked(){
      alert('I was clicked');
    },
    mouseEnter(){
      console.log('Mouse entered!');
    },
    mouseLeave(){
      console.log('Mouse leaved!');
    }
  }
}
</script>

<style>

</style>
