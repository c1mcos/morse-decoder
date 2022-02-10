const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const decode ={
        '00': '',
        '10': '.',
        '11': '-'}
    var res = '';
    for (let a = 0; expr.length > 0;) {
        let str = expr.substring(0, 10);
        if (str[0] == '*') {
            res = res + ' ';
        } else {
            let code = '';
            for (let i = 0; i < 10; i=i+2) {
                if (str.substring(i, i + 2) == '10') {
                    code = code + '.';
                } else if (str.substring(i, i + 2) == '11') {
                    code = code + '-';
                }
            }
            res = res + MORSE_TABLE[code];
        }
        expr = expr.slice(10);
    }
    return res;
}


module.exports = {
decode
}