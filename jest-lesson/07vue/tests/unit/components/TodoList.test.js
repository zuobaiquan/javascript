import { shallowMount } from '@vue/test-utils'
import TodoList from '@/pages/TodoList'
import UndoList from '@/components/UndoList'

describe('TodoList组件测试', () => {
  it('组件正常渲染', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper).toMatchSnapshot();
  })

  it('addUndoItem 执行后，内容增加', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 },
      { status: 'div', value: 4 }
    ])
  })

  it('调用 UndoList，应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('handeleDeleteItem 方法被调用时，UndoList列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.hadleItemDelete(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 3 }
    ])
  })

  it('changeStatus 方法被调用时，UndoList内容改变', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it('resetStatus 方法被调用时，UndoList内容改变', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.resetStatus()
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it('changeItemValue 方法被调用时，UndoList内容改变', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeItemValue({
      value: "444",
      index: 1
    })
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: "444" },
      { status: 'div', value: 3 }
    ])
  })

})

