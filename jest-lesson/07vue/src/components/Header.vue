<template>
  <div class="header">
    <input v-model="inputValue" @keyup.enter="addTodoItem" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      inputValue:''
    }
  },
  methods: {
    addTodoItem(){
      if(this.inputValue){
        this.$emit('add',this.inputValue)
        this.inputValue = ''
      }
    }
  },
}
</script>
<style scoped lang="scss">

</style>
