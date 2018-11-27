var fs = require('fs')
var buf = new Buffer(1234)
var an

// console.log(process.argv)

//console.log('starting')
buf =fs.readFileSync(process.argv[2], function (err, data) {
    if (err) throw err;
   // console.log(data);
  });

//console.log(buf.toString())
an = buf.toString()
an1 = an.split('\n')
an2=0
an2=an1.length
an2=an2-1
console.log(an2)

  //console.log('stopping')
