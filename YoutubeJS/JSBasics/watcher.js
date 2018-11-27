//import fs from 'fs';

const fs = require('fs');

fs.watch('target.txt', function(){
    console.log('File target.txt has changed');
}
console.log('Watching target.txt for changes....');
