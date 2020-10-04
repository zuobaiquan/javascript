import { shallowMount } from '@vue/test-utils'
import UndoList from '@/components/UndoList.vue'

describe('UndoList组件测试', () => {
  it('Undolist 参数为[], count为0， 且列表为空', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const countElem = wrapper.findAll(".count")
    const listItems = wrapper.findAll('.item')
    expect(countElem.at(0).text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it('Undolist 参数为[1,2,3], count为3， 且列表有内容, 且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const countElem = wrapper.findAll(".count")
    const listItems = wrapper.findAll(".item")
    const deleteBtn = wrapper.findAll('.delete')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toEqual(3)
    expect(deleteBtn.length).toEqual(3)
  })

  it('Undolist 删除按钮被点击时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const deleteBtn = wrapper.findAll(".delete").at(1)
    deleteBtn.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })

  it('列表被点击，向外触发 change status 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const listItem =  wrapper.findAll(".item").at(1)
    listItem.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
    expect(wrapper.emitted().status[0][0]).toBe(1)
  })

  it('列表项显示一个输入框，两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const input = wrapper.findAll(".input")
    expect(input.at(0).element.value).toBe("2")
    expect(input.length).toBe(1)
  })

  it('输入框失去焦点，向外触发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const listItem = wrapper.findAll(".input").at(0)
    listItem.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('输入框变化时，向外触发 change 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 123},
          { status: 'div', value: 3 }
        ]
      }
    })
    const listItem = wrapper.findAll(".input").at(0)
    listItem.trigger('change', {
      value: "123",
      index: 1
    })
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual(
      {
        value: "123",
        index: 1
      }
    )
  })

})

