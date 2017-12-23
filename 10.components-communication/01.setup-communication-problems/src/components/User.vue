<template>
	<div class="component">
		<h1>用户组件</h1>
		<p>我是一个用户</p>
		<button @click="changeName">修改我的姓名</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit></app-user-edit>
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
				name: 'Vane'
			}
		},
		methods:{
			changeName(){
				this.name = 'Fang';
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>