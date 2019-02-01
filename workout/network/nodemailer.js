const nodemailer = request('nodemailer')

const smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'GMail',
  auth: {
    user: 'example@gmail.com',
    pass: 'examplepass'
  }
})

smtpTransport.sendMail({
  from: 'Steve Jobs <example@gmail.com', // who sends
  to: 'Bill Gates <microsoft@gmail.com', // recipient
  subject: 'Create new service', // theme of mail
  text: 'Hello, Bill! How are you?', // text of mail
  htpm: 'Hello, <i>Bill</i>! How are you?'
}, (err, response) => {
  if (err) throw err
  console.log('The message is send!')
})

smtpTransport.close(0)
