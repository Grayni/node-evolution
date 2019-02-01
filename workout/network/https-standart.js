const https = require('https')

https.get('https://google.com', (res) => {
  console.log(res.statusCode)
}).on('error', (err) => {
  throw err
})

/* https.request({
  hostname: 'google.com',
  port: 443,
  path: '/',
  method: 'POST'
}, (res) => {
  console.log(res.statusCode)
}).on('error', (err) => {
  throw err
}) */

