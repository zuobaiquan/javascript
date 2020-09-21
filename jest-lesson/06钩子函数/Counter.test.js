import Counter from "./Counter";

// jest 在初始化数据之前，用钩子函数 ,
// beforeAll所有测试用例之前调用 
let counter = null
beforeAll(()=>{
  console.log("beforeAll");
})

beforeEach(()=>{
  // 每一个测试用例都是 一个全新的Counter，互不影响
  console.log("beforeEach");
  counter = new Counter();
})

// describe分组
describe('测试相关的代码',()=>{

})

test.only('should ', () => {
   //只测试该用例 
})


test('测试Counter 中的addOne方法', () => {
  console.log("测试Counter 中的addOne方法");
  counter.addOne()
  expect(counter.number).toBe(1)
})

test("测试Counter 中的minusOne方法", () => {
  console.log("测试Counter 中的minusOne方法");
  counter.minusOne();
  expect(counter.number).toBe(-1);
})

afterEach(() => {
  console.log("afterEach");
})

// afterAll所有测试用例执行完之后 调用 
afterAll(() => {
  console.log("afterAll");
});
