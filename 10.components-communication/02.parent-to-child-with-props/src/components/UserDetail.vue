<template>
	<div class="component">
		<h3>你可以在此查看用户详情</h3>
		<p>用户详情</p>
		<p>用户姓名: {{ myName }}</p>
	</div>
</template>

<script>
	export default {
		props:['myName']
	}
</script>

<style scoped>
	div {
		background-color: lightcoral;
	}
</style>