

var fs = require("fs")
var path = require("path")


// Setup the two input arguements
var pathName = process.argv[2]

var fileExt = "." + process.argv[3]


var output = fs.readdir(pathName,"utf8", function(err, files) {
    if (err) throw err;
    
    for (i=0;i<files.length;i++){

        if (path.extname(files[i])===fileExt){
            console.log(files[i])
        }
        else{}
    }
})

//Test change to see if propogates to master 
//Another line to test

console.log('Working....')

