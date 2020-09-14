import { fetchData } from './fetchData'
test('fetchData测试 ', () => {
    fetchData(data=>{
        expect(data).toEqual({
            success:true
        })
    })
})
