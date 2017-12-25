<template>
<!-- 新建Author、New两个组件，并将它们导入到当前父组件中，通过selectedComponent变量赋值的方式
动态改变对象的值，然后通过component的:is属性来动态加载哪个组件进行显示，而在component中的slot
内容则是可以设置传递的默认slot内容 -->
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
  			<!-- <app-quote>
    			<h2 slot="title">{{quoteTitle}}</h2>
    			<p>A wonderful quote!</p>
  			</app-quote> -->
  		</div>
  	</div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
   data:function(){
    return {
      quoteTitle:'The Quote',
      selectedComponent:'appQuote'
    }
   },
   components:{
   		appQuote:Quote,
      appAuthor:Author,
      appNew:New
   }
}
</script>

<style>
</style>
