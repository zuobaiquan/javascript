import { fetchData, fetchData2, fetchData3 } from "./fetchData";
// 对于异步处理 使用 done ，调用了done 函数，才代表测试用例执行结束
test("fetchData测试 ", (done) => {
  fetchData((data) => {
    expect(data).toEqual('ok');
    done()
  });
});


test("fetchData测试判断接口地址404 ", () => {
  expect.assertions(1);
  return fetchData3().catch((err) => {
    expect(err.toString().indexOf("404") > -1).toBe(true);
  });
});

test("fetchData测试判断接口地址404 ", () => {
  return expect(fetchData3()).rejects.toThrow();
});

test("fetchData测试判断接口地址404 ", async() => {
  await expect(fetchData3()).rejects.toThrow();
});

test("fetchData测试返回结果", () => {
  return expect(fetchData2()).resolves.toMatchObject({
    data: {
      Success: "ok",
    },
  });
});

test("fetchData测试返回结果", async() => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
      Success: "ok",
    },
  });
});