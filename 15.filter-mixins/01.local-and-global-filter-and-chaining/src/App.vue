<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-8 col-sm-offset-2 
      col-md-6 col-md-offset-3">
  			<h1>本地过滤器</h1>
  			<p>{{ text | toUppercase | to-lowercase }}</p>
  		</div>
  	</div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      text:'Hello Vue!'
    }
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>

</style>
