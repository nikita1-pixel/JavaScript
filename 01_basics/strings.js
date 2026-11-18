const name = 'Nikita'
const repoCount = 23

console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my total repoCount is ${repoCount}`);


const gameName = new String("Nikita-ch-hs")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4);
console.log(newString);


const otherString = gameName.slice(-9, 4);
console.log(otherString);


const newStrimg1 = "    nikita    "
console.log(newStrimg1);
console.log(newStrimg1.trim());

const url = "hhtps://nikita.com/nikita%20choudhary"
console.log(url);

console.log(url.replace('%20', '-'))
console.log(url.includes('nikita'))
console.log(url.includes('nice'));
console.log(gameName.split('-'));
