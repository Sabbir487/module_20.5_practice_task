const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const colorReversed = [];
for (let i = colors.length -1; i >= 0; i--){
    const color = colors[i];
    console.log(color);
    colorReversed.push(color);
}
console.log(colorReversed);