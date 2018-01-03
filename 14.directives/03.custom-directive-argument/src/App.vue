<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12 col-sm-8 col-sm-offset-2 
			col-md-6 col-md-offset-3">
  			<h1>内置指令</h1>
  			<p v-text="'一些文字内容'"></p>
  			<p v-html="'<strong>一些文字内容</strong>'"></p>
  		</div>
  	</div>
  	<hr>
  	<div class="row">
  		<div class="col-xs-12 col-sm-8 col-sm-offset-2 
			col-md-6 col-md-offset-3">
  			<h1>自定义指令</h1>
  			<p v-highlight="'red'">自定义指令，设置颜色</p>
				<p v-highlight:background="'red'">自定义指令，设置颜色</p>

  		</div>
  	</div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>

</style>
