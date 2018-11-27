
const input= process.argv
lastElement = input.length

var result = 0
    
    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result)


let i
let j = 2
var total = 0

for (i = -1; i < (lastElement-3); i++) { 
   total += Number(input[j])
 
   j++
}
console.log(total)

