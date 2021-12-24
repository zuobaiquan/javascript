<template>
  <div id="app">
    <button @click="openTop()">点击</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{
    openTop(){
      this.$toast.top('top')
    }
  }
}
</script>

<style>

</style>
