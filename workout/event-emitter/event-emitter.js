const {EventEmitter} = require('events')

/**
 * Create extend class from EventEmitter 
 *
 * @class Kettle properties and features kettle
 * @extends {EventEmitter} 
 */
class Kettle extends EventEmitter {
  start() {
    setTimeout(() => {
      this.emit('ready', {})
    }, 0);
  }
}
/**
 * Create new obj Kettle
 * @type {obj} standartKettle
 */
const standartKettle = new Kettle()

standartKettle.start()

standartKettle.on('ready', () => {
  console.log('water hot!')
})