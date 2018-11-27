console.log('Program starting')

const input= process.argv
console.log(input)

//Understand the length of the array

lastElement = input.length
console.log(lastElement)

// For loop to calculate the sum of array elements starting from [2]


let i
let j = 2
var total = 0

for (i = -1; i < (lastElement-3); i++) { 
   total += Number(input[j])
   console.log(i +' '+j + ' '+input[j])
   j++
}
console.log(total)

//End of Program
console.log('Ending Programme')