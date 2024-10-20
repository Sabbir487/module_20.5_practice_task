const numbers = [44, 55, 3, 88, 99, 56, 23, 12, 33];
const reverseWay = [];
 for (let i = numbers.length -1; i >= 0; i--){
    const num = numbers[i];
    console.log(num);
    reverseWay.push(num);
}
console.log(reverseWay);