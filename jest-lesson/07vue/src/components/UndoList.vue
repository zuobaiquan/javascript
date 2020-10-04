<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span class="count">{{list.length}}</span>
    </div>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) of list"
        :key="index"
        @click="()=> changeStatus(index)"
      >
        <input
          class="input"
          v-if="item.status==='input'"
          data-test="input"
          :value="item.value"
          @blur="handleInputBlur"
          @change="(e)=>handleInputChange(e.target.value,index)"
        />
        <span v-else>{{item.value}}</span>
        <span class="delete" @click="()=> {handleDelete(index)}">-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  data () {
    return {
    }
  },
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    },
    handleInputChange (value, index) {
      this.$emit('change', {
        value,
        index
      })
    }
  }
}
</script>

<style scoped lang="scss">
.undolist {
  width: 600px;
  margin: 0 auto;
  .title {
    margin: 10px 0;
    line-height: 30px;
    font-size: 24px;
    font-weight: bold;
    .count {
      margin-top: 5px;
      float: right;
      display: block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background: #e6e6e6;
      border-radius: 10px;
      font-size: 12px;
      color: #000;
    }
  }
  .list {
    list-style-type: none;
    .item {
      margin-bottom: 10px;
      line-height: 32px;
      font-size: 14px;
      background: #fff;
      border-left: 5px solid #629a69;
      border-radius: 3px;
      .input {
        width: 460px;
        height: 22px;
        text-indent: 10px;
      }
      .delete {
        margin-top: 5px;
        margin-right: 5px;
        float: right;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #e6e6e6;
        border-radius: 10px;
        font-size: 12px;
        color: #000;
        text-indent: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
