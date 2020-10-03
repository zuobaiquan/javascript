import { shallowMount } from '@vue/test-utils'
import TodoList from "@/pages/TodoList";
import Header from "@/components/Header";

describe("TodoList.vue", () => {
  it("TodoList初始化", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([]);
  });

  it("todoList监听到Header的add事件时会增加一个内容", () => {
    const content = 'zuobaiquan'
    const wrapper = shallowMount(TodoList);
    const header = wrapper.find(Header)
    header.vm.$emit("add", content);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([content]);
  });

});
