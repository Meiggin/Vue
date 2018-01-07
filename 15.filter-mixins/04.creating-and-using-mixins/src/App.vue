<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-8 col-sm-offset-2 
      col-md-6 col-md-offset-3">
  			<h1>本地过滤器</h1>
  			<p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <!-- 按钮操作说明的是对象的作用域问题 -->
        <button @click="fruits.push('Berries')">
        Add New Item
        </button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
  	    <hr>
        <app-list></app-list>
    	</div>
  	</div>
  </div>
</template>

<script>
import List from './List.vue';
import {fruitMixin} from './fruitMixin';

export default {
  mixins: [fruitMixin],
  data(){
    return {
      text:'Hello Vue!'
    }
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components:{
    appList:List
  }
}
</script>

<style>

</style>
