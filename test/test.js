
const oldParser = require('./old')
const newParser = require('../src')


const mmnCode = '| 도레미파 |'
console.log(`mmnCode: \n${mmnCode}`)
console.log('\n')

// old
console.time('oldParser')
const oldP = oldParser(mmnCode)

console.timeEnd('oldParser')
console.log(JSON.stringify(oldP, null, 3))
console.log('\n')

// new
console.time('newParser')
const newP = newParser(mmnCode)

console.timeEnd('newParser')
console.log(JSON.stringify(newP, null, 3))
console.log('\n')
