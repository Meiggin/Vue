<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
  			<h1>过滤器和混合器</h1>
  			<!--
        1)建立一个本地过滤器，可以将文本内容反转显示
        2)建立一个全局过滤器，可以统计一个字符串长度，并追加到字符串后面，如Test (4)
        3)实现1、2功能，但需要用computed属性
        4)通过computed属性实现2的功能，但是通过Mixin
        -->
        <p>{{ firstText | reverse }}</p>
        <p>{{ secondText | calculateLength }}</p>
        <p> {{ reversed }}</p>
        <p> {{ lengthAware}} </p>
    	</div>
     
  	</div>
  </div>
</template>

<script>
import {lengthAwareMixin} from './lengthAwareMixin';

export default {
  mixins:[lengthAwareMixin],
  data(){
    return {
      firstText:'Some Text',
      secondText:'Chinavane'
    }

  },
  filters:{
    reverse(value){
      return value.split("").reverse().join("");
    }
  },
  computed:{
    reversed(){
      return this.firstText.split("").reverse().join("");
    }
    // ,
    // lengthAware(){
    //   return this.secondText + "(" + this.secondText.length + ")";
    // }
  }
}
</script>

<style>

</style>
