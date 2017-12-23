<template>
	<div class="component">
		<h3>你可以在此编辑用户</h3>
		<p>修改资料</p>
		<p>用户年龄:{{ userAge }}</p>
		<button @click="editAge">修改年龄</button>
	</div>
</template>

<script>
	import { eventBus } from '../main';

	export default {
		props:['userAge'],
		methods:{
			editAge(){
				this.userAge = 38;
				//this.$emit('ageWasEdited',this.userAge);
				//eventBus.$emit('ageWasEdited',this.userAge);
				eventBus.changeAge(this.userAge);
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: green;
	}
</style>