<template>
    <div>
			<h1>过滤器和混合</h1>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">
        {{ fruit }}
        </li>
      </ul>
		</div>
</template>

<script>
import {fruitMixin} from './fruitMixin';

export default {
  mixins: [fruitMixin],
  created(){
    console.log('inside created hook')
  }
}
</script>

<style>

</style>
