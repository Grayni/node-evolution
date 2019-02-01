const fs = require('fs')

/* asynchronous method */
// param: 'utf-8'
fs.readFile('../../package.json', 'utf-8', (err,data) => {
  if (err) throw err
  console.log(data)
})


/* synchronous method */
syncReadFile = () => {
  const exist = fs.existsSync('../../package.json')
  if (exist) {
    const data = fs.readFileSync('../../package.json', 'utf-8')
    console.log(data)
  }
}

syncReadFile()