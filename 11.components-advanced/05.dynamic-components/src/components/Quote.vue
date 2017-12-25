<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<!-- 如果父组件中没有定义slot的内容，那么在没有定义slot
			对象的时候，如果在写slot内容以后将显示自己的slot内容，
			这是slot的默认值 -->
			<span style="color:#ccc;">
			<slot name="subtitle">The Subtitle</slot>
			</span>
		</div>
		<div>
			<slot></slot>
		</div>
		
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

	.title{
		font-style: italic;
	}
</style>