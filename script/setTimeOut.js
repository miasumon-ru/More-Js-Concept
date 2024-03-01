
console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3)
}, 2000)

let num = 0;
const inter = setInterval(() => {
    num = num + 1;

    console.log(num)

if(num >5 ){
    clearInterval(inter)
}

}, 2000)



console.log(4);