const {EventEmitter} = require('events')

/**
 * class Notebook created for present difference setTimeout and setImmediate
 *
 * @class Notebook create behavior notebook
 * @extends {EventEmitter} inherit for Notebook
 */
class Notebook extends EventEmitter {
  /**
   * Creates an instance of Notebook.
   * @memberof Notebook
   */
  constructor() {
    super()
    // use setImmediate from present immediate execution
    setImmediate(() => {
      this.emit('beginImmediate', {})
    })
  }
  // for create pause in execution code
  run(time) {
    process.nextTick(() => {
      this.emit('beginTick', {})
    })
    setTimeout(() => {
      this.emit('beginTimeout', {})
    }, time)
  }
}
/**
 * @type {obj} NotebookHP
 */
const NotebookHP = new Notebook()

// first step - run func with setTimeout
NotebookHP.run(2000)

NotebookHP.on('beginTimeout', () => {
  console.log('Notebook on through setTimeout.')
})

// second step - run setImmediate
NotebookHP.on('beginImmediate', () => {
  console.log('Notebook on through setImmediate.')
})

NotebookHP.on('beginTick', () => {
  console.log('Notebook on through nextTick')
})

/*
 * result of implementation:
 * First: show nextTick
 * Second: show setImmediate
 * Third: show setTimeout
 * Conclusion: if need asynchrony -> use setImmediate or nextTick (as one of the options)
 */