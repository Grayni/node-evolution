 /* 
 This example for difference setImmediate and process.nextTick
 */

firstExample = () => {
  // first call
  console.log('1. Standart call')

  setImmediate(() => {
    console.log('2. setImmediate')
  })

  console.log('3. Standart call')

  process.nextTick(() => {
    console.log('4. nextTick')
  })

  console.log('5. Standart call')
}

// firstExample()

/* 
  1. primarily, executed all standart calls
  2. executed nextTick(), because nextTick runs before next iteration EventLoop
  3. executed setImmediate, bacause setImmediate runs into each iteration EventLoop
*/

// For example, run several setImmediate and several nextTick:

secondExample = () => {
  setImmediate(() => {
    console.log('1. setImmediate')
  })
  
  process.nextTick(() => {
    console.log('2. nextTick')
  })
  
  setImmediate(() => {
    console.log('3. setImmediate')
  })
  
  process.nextTick(() => {
    console.log('4. nextTick')
  })
  
  setImmediate(() => {
    console.log('5. setImmediate')
  })
}

// secondExample()

/*
  Note: according to the developers, better use setImmediate, because this more understandable
*/