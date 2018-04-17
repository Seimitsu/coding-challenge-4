const fs = require('fs');

fs.readFile('./input.txt',(err,data) => {
    console.time('Challenge');

    console.log(data.toString('utf8').split("(").length - data.toString('utf8').split(")").length);
    // number of "(" minus the number of ")" is the floor
    console.timeEnd('Challenge');

    console.log('try to beat this ;)');
} )