var Push = require('../lib/pushover.js')
var fs = require('fs')

var p = new Push({
  user: process.env['PUSHOVER_USER'],
  token: process.env['PUSHOVER_TOKEN'],
  update_sounds: false,
  debug: true
})

fs.readFile('test_img.png', function(err, data) {
  var o = {
    name: 'pushover.png',
    data: data
  }

  var msg = {
    message: 'test from ' + process.argv[1],
    sound: 'magic',
    title: 'Image loaded async',
    file: o
  }

  p.send(msg, function (err, result, res) {
    console.log('error', err)
    console.log('result', result)
    console.log('res.headers', res.headers)
    // process.exit(0);
  })
})

// console.log( p );
var msg = {
  message: 'test from ' + process.argv[1],
  sound: 'magic',
  title: 'Image loaded sync',
  file: 'test_img.png'
}

p.send(msg, function (err, result, res) {
  console.log('error', err)
  console.log('result', result)
  console.log('res.headers', res.headers)
  // process.exit(0);
})
