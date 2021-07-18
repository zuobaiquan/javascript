//  去重
const arr = [11, 22, 11, 22, 65, 11]
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(11)

// 求交集
const set2 = new Set([22, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));