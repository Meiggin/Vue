<template>
    <div>
			<h1>过滤器和混合</h1>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
		</div>
</template>

<script>

export default {
  data(){
    return {
      fruits:['Apple','Banana','Mango','Melon'],
      filterText:''
    }
  },
  computed:{
    filteredFruits(){
      return this.fruits.filter((element)=>{
        return element.match(this.filterText);
      });
    }
  }
}
</script>

<style>

</style>
