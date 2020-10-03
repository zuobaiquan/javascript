<template>
  <div class="TodoList">
    <Header @add="getInputValue" />
    <ul>
      <li v-for="item in undoList">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'TodoList',
  components:{
    Header,
  },
  data(){
    return {
      undoList:[]
    }
  },
  methods: {
    getInputValue(e){
      this.undoList.push(e)
    }
  },
}
</script>
<style scoped lang="scss">

</style>
