const fs = require('fs');
const chalk = require('chalk');

const args = process.argv.slice(2);
const word = args[0];
const file = args[1];

function print(error, data) {

    if (error) {
        console.log('Arquivo não encontrado!', error);
        return;
    }
    
    const text = '' + data;
    const color = 'yellow';

    var text2 = '';

    for (let index = 0; index < text.length - 1; index++) {
        if (text.substring(index, index + word.length).localeCompare(word)){
            text2 += text.substring(index, index + 1);
        } else {
            text2 += chalk[color](text.substring(index, index + word.length)); 
            index += word.length - 1;         
        }
    }

    console.log(text2);
}

fs.readFile(file, 'utf8', print);