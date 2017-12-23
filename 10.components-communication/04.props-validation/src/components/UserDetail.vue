<template>
	<div class="component">
		<h3>你可以在此查看用户详情</h3>
		<p>用户详情</p>
		<p>用户姓名: {{ switchName() }}</p>
	</div>
</template>

<script>
	export default {
		props:{
			// 可以设置属性的类型，比如String或者[String,Array]等类型
			// 还可以设置属性值是否为必须传递操作required
			// 并且可以设置属性值的默认值
			myName:{
				type: String,
				required:false,
				default: "Xiao"
			}
			// 可以考虑一下是否可以返回对象或者是函数等操作？下面方法在示例中不可调用，只做说明不作演示
			/*
			myName:{
				type: Object,
				default: function () {
					return {
						name : "Vane"
					}
				}
			}
			*/
		},
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