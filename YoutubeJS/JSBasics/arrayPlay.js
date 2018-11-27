
// // const numarray = ['one','two','three','four','five']

// // console.log('The first item is ' + numarray[0])

// // numarray[1]='not two'

// // console.log(`The last item is ${numarray[numarray.length-1]}`)

// // console.log(numarray)

// // numarray.shift

// var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// console.log('myFish before:', JSON.stringify(myFish));
// console.log('myFish before:', myFish);
// // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

// var shifted = myFish.shift(); 

// console.log('myFish after:', myFish); 
// // myFish after: ['clown', 'mandarin', 'surgeon']

// console.log('Removed this element:', shifted); 
// // Removed this element: angel

// var unshifted = myFish.unshift('Shark')

// console.log(myFish)
// console.log(unshifted)
// console.log(myFish)
// myFish.pop()
// console.log(unshifted)
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
