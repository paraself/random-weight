const random = require('../dist/index').default
let items = [
  {
    name: 'Alex',
    weight: 1,
    count: 0
  },
  {
    name: 'Jonny',
    weight: 2,
    count: 0
  },
  {
    name: 'Tom',
    weight: 3,
    count: 0
  },
  {
    name: 'Lily',
    weight: 2,
    count: 0
  },
  {
    name: 'John',
    weight: 1,
    count: 0
  },
  {
    name: 'Rebecca',
    weight: 1,
    count: 0
  }
]
const ITERATION = 10000000
for (let i = 0; i < ITERATION; i++) {
  let w = random(items, i => i.weight)
  w.count++
}
for (let i = 0; i < items.length; i++) {
  console.log(`${items[i].name}: ${(items[i].count / ITERATION * 100).toFixed(2)}%`)
}
