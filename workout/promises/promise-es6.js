/**
 * Processing send
 *
 * @param {obj} documents default param
 * @returns return created variable = promise
 */
function applyForVisa(documents) {
  console.log('application processing...');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > .5 ? resolve({}) : reject('Rejection: not all document!');
    }, 2000);
  });
  return promise;
}

/**
 * Func = 1 step promise
 *
 * @param {*} visa return value from promise
 * @returns for example return resolve
 */
getVisa = visa => {
  console.info('Visa received!')
  return new Promise((resolve, reject) => {
    resolve(visa)
  })
}


/**
 * Func = 2 step promise
 *
 * @param {*} visa return value from promise
 * @returns for example return reject (if change on resolve => continue promise)
 */
bookHotel = (visa) => {
  console.log(visa)
  console.info('booking hotel!')
  return new Promise((resolve, reject) => {
    reject('No place')
  })
}

/**
 * Func = 3 step promise (if step 2 return resolve)
 *
 * @param {*} booking describes value booking room
 */
buyTickets = (booking) => {
  console.info('Tickets bought!')
  console.info('booking', booking)
}

/**exec func applyForVisa*/
applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error))