<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12">
  			<!--
  			一种不是非常好的解决办法是将quote当成一个属性传递到子组件中去
  			子组件利用props进行接收并且显示，但是如果多行文本，格式文件等内容的存在，
				这样操作就会变得十分的麻烦，所以这种模式的解决方案并非十分的理想
  			-->
  			<!-- <app-quote quote="A wonderful quote!"></app-quote> -->
  			<app-quote>
  			<h2>The Quote</h2>
  			<p>A wonderful quote!</p>
  			</app-quote>
  		</div>
  	</div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';

export default {
   components:{
   		appQuote:Quote
   }
}
</script>

<style>

</style>
