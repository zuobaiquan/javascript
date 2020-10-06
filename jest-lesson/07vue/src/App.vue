<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from '@/pages/TodoList.vue'
export default {
  name: 'app',
  components: {
    TodoList,
  }
}
</script>
<style lang="scss">
*{
  margin:0;padding:0;
  
}
#app{
  background:#EFFFFF;
  padding:10px 0;
}
</style>
