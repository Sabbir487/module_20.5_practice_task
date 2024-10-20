const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for (let n = 0; n < numbers.length; n++){
    const num = numbers[n];
    console.log(num);
    if (num % 2 === 0){
        evenNumber.push(num);
    }
}
console.log(evenNumber);