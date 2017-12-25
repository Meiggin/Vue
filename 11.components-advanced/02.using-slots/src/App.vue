<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12">
  			<app-quote>
        <!-- slots的内容也可以引入data的变量内容 -->
  			<h2>{{quoteTitle}}</h2>
  			<p>A wonderful quote!</p>
  			</app-quote>
  		</div>
  	</div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';

export default {
   data:function(){
    return {
      quoteTitle:'The Quote'
    }
   },
   components:{
   		appQuote:Quote
   }
}
</script>

<style>
</style>
