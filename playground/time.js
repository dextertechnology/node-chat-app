var moment = require('moment');

// // var date = new Date();
// // console.log(date.getMonth());

// var date = moment();
// // date.add(56, 'years').add(8, 'months').add(17, 'days')
// console.log(date.format('MMM Do, YYYY'))
// console.log(date.format('h:mm a'));

var createdAt = new Date().getTime();
var date = moment(createdAt);
console.log(date.format('h:mm a'));
