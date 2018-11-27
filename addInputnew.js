// Take input from command line and output total
var total = 0

//Loop through inputs
for (var i = 2; i < (process.argv.length); i++) {
total += Number(process.argv[i])
}

console.log(total)
