<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12">
  			<app-quote>
        <!-- 通过指定slot的名称，可以对应的操作slot显示的对象，
        这样就可以将slot对象给拆分开来进行显示了 -->
  			<h2 slot="title">{{quoteTitle}}</h2>
  			<p slot="content">A wonderful quote!</p>
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
