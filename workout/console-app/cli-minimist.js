const minimist = require('minimist')

const arrArgv = process.argv
// slice cut first 2 indexes in array
// minimist needed for create aliases (-s = --state)
// also minimist shows comfortable structure of parameters
console.log(minimist(arrArgv.slice(2), {alias: {s: 'state'}}))

// run node cli-minimist.js --state