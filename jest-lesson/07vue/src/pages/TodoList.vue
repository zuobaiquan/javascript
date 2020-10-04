<template>
  <div>
    <Header @add="addUndoItem"></Header>
    <UndoList
      :list="undoList"
      @delete="hadleItemDelete"
      @status="changeStatus"
      @reset="resetStatus"
      @change="changeItemValue"
    ></UndoList>
  </div>
</template>

<script>
import Header from '@/components/Header'
import UndoList from '@/components/UndoList'
export default {
  name: 'TodoList',
  components:{
    Header,
    UndoList,
  },
  data(){
    return {
      undoList:[]
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push(
        {
          status: 'div',
          value: inputValue
        }
      )
    },
    hadleItemDelete (index) {
      this.undoList.splice(index, 1)
    },
    changeStatus (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newList.push({
            status: 'input',
            value: item.value
          })
        } else {
          newList.push({
            status: 'div',
            value: item.value
          })
        }
      })
      this.undoList = newList
    },
    resetStatus () {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        newList.push({
          status: 'div',
          value: item.value
        })
      })
      this.undoList = newList
    },
    changeItemValue (data) {
      this.undoList[data.index].value = data.value
    }
  },
}
</script>
<style scoped lang="scss">

</style>
