<template>
	<div class="component">
		<h3>你可以在此查看用户详情</h3>
		<p>用户详情</p>
		<p>用户姓名: {{ switchName() }}</p>
	</div>
</template>

<script>
	export default {
		props:['myName'],
		methods:{
			// 添加switchName，在表达式中直接使用该方法
			switchName(){
				return this.myName.split("").reverse().join("");
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcoral;
	}
</style>