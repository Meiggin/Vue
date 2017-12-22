<template>
  <h1>Server Status: {{ status }}</h1>
</template>

<script>
// 如果将data直接编写成对象的话，系统会报错，告诉你data必须是一个function函数
/*
export default {
    data:{
        status: 'Critical'
    }
}
*/


export default {
    data:function(){
        return {
            status: 'Critical'
        }
    }
}
</script>

<style>

</style>
