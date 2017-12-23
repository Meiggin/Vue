<template>
	<div class="component">
		<h3>你可以在此查看用户详情</h3>
		<p>用户详情</p>
		<p>用户姓名: {{ switchName() }}</p>
		<p>用户年龄: {{ userAge  }}</p>
		<button @click="resetName">重置姓名</button>
		<button @click="resetFn">回调重置姓名</button>
	</div>
</template>

<script>
	/*
		1.子组件构建resetName方法，但是在子组件的resetName方法中，需要调用childrenRequest的方法内容
		2.childrenRequest的方法内容从哪里来呢？需要在父组件中定义好，并且传递到子组件中来
		3.父组件中通过绑定:childrenRequest="letParentResponse"，将letParentRequest方法作为参数传递到子组件中去
		4.需要在父组件中定义好letParentRequest方法
		5.子组件调用方法的时候，其实就是执行父组件的方式，而可以将当前参数传递到父亲组件中去
	 */
	export default {

		props:{
			// 可以设置属性的类型，比如String或者[String,Array]等类型
			// 还可以设置属性值是否为必须传递操作required
			// 并且可以设置属性值的默认值
			
			myName:{
				type: String,
				required:false,
				default: "Xiao"
			},
			childrenRequest:{
				type:Function
			},
			resetFn:Function,
			userAge:Number
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
			},
			resetName(){
				// this.childrenRequest('Chinavane');
				
				this.myName = "Chinavane";
				this.$emit('nameWasReset',this.myName);
			}
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcoral;
	}
</style>