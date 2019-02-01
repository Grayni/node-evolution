const request = require('request')

// refers to the protocols http and https
request('https://google.com', (err, res, body) => {
  if (err) throw err
  console.log(body)
})