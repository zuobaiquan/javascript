import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header组件测试', () => {
  it('样式发生改变，做提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
    // const input = wrapper.find('[data-test="input"]')
    // expect(input.exists()).toBe(true)
  })

  it('input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('')
  })

  it('input 框发生变化，数据应该跟着改变', () => {
    const content = "zuobaiquan";
    const wrapper = shallowMount(Header)
    const input = wrapper.findAll(".header-inputs")
    input.setValue(content)
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe(content)
  })

  it('input 框回车，无内容时无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.findAll(".header-inputs")
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input 框回车，有内容时向外触发事件,同时清空 inputValue', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.findAll(".header-inputs")
    input.setValue('zuobaiquan')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.inputValue).toBe('')
  })
})
