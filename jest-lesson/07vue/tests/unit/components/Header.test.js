import { shallowMount } from '@vue/test-utils'
import Header from "@/components/Header";

describe("Header.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "111";
    const wrapper = shallowMount(Header, {
      propsData: { msg }
    });
    // let inputValue = wrapper.vm.$data.inputValue;
    // expect(inputValue).toBe("");
    const inputEle = wrapper.find('input')
    inputEle.setValue("zuobaiquan");
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("zuobaiquan");
  });
  it('Header中的input输入回车，无内容无反应',()=>{
    const wrapper = shallowMount(Header);
    const inputEle = wrapper.find("input");
    inputEle.setValue('')
    inputEle.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeFalsy();
  })

  it("Header中的input输入回车，有内容无反应", () => {
    const wrapper = shallowMount(Header);
    const inputEle = wrapper.find("input");
    inputEle.setValue("zuobaiquan");
    inputEle.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeTruthy();
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("");

  });


});
