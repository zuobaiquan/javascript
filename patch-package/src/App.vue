<template>
  <div id="app">
    <el-input v-model="input" charLength maxlength="6" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      input:''
    }
  }
}
</script>

<style>

</style>
