<template>
	<div>
		<!--只需要利用slot就可以将父组件中
		组件标签中的内容进行显示-->
		<slot></slot>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	div {
		border:1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin:30px auto;
		text-align: center;
	}

	h2{
		color: red;
	}
</style>