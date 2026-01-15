/*const name ="kumkum"
const repoCount =30
console.log(name + repoCount + "value");
console.log(`hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String ('kumkum rastogi')*/

console.log(gameName[0]); 
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
/////console.log(gameName.indexOf);//kis position pw kon sa charecter hai indexof define karta hai .....
console.log(gameName.charAt(5)); // 5 no pe kon sa charecter hai ye define kara haiii....

const newString = gameName.substring(0,4)
console.log(newString);
const anotherstring =gameName.slice(-4,4) //negTIVE VALUES are only use in slice
console.log(anotherstring);
// :::: TRIM AND REPLACE METHORD:::::::;;;;;
const newStringOne ="harshit"
console.log(newStringOne);
const url = "C:\Users\kumkum%20\Desktop"
console.log(url.replace("%20",'-'))
console.log(url.includes('Rastogi'))
console.log(gameName.split('-'));