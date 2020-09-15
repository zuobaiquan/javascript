import { fetchData, fetchData2 } from "./fetchData";
// 对于异步处理 使用 done ，调用了done 函数，才代表测试用例执行结束
test("fetchData测试 ", (done) => {
  fetchData((data) => {
    expect(data).toEqual('ok');
    done()
  });
});


test("fetchData测试判断接口地址404 ", () => {
  expect.assertions(1);
  return fetchData2().catch(err=>{
      expect(err.toString().indexOf("404")>-1).toBe(false)
  })
});
