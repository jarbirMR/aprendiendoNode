const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split ('');



//const reactWordCount = content.split ('React' && 'react').length; incompleto
const reactWordCount = content.match(/react/gi).length;

console.log('Palabras de:', words.length);
console.log('Palabras de REact:',reactWordCount);
