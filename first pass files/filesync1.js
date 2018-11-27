var fs = require('fs')
var buf = new Buffer(1234)
var an

// console.log(process.argv)

//console.log('starting')
// var contents =fs.readFileSync(process.argv[2], function (err, data) {
//     if (err) throw err;
//   });
// var lines = contents.toString().split('\n')-1
//Now do it in one line of code

var lines = fs.readFileSync(process.argv[2],'utf8').split('\n').length -1
console.log(lines)
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
  //console.log('stopping')
