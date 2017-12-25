<template>
	<!-- 
	1）设置累加器是为了说明默认情况下，在组件动态改变以后将会发生destroyed销毁事件，
	而组件销毁以后再加载，那么将重新启动组件流程，累加器也就为0了。那么，如何让用户
	在切换组件的时候保持组件不销毁呢？
	2）之后我们可以利用对组件进行keep-alive的操作来实现这一目标！
	3）最后，我们可以开启deactivated、activated等组件生命周期的钩子函数来监控用
	户操作时组件发生了什么变化操作。
	-->
	<div>
		<h3>New Quote</h3>
		<button @click="counter++">Increase!</button>
		{{counter}}
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				counter:0
			}
		},
		destroyed(){
			console.log('Destroyed');
		},
		deactivated(){
			console.log('Deactivated');
		},
		activated(){
			console.log('Activated');
		}
	}
</script>

<style>
	
</style>