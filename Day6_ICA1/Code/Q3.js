function getMaxValue(num) {
    if (num < 10) {
        throw new Error("Number should have a minimum of 2 digits.");
    }

    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
}


const numbers = [215, 1093];

numbers.forEach(num => {
    console.log(`Input number = ${num}, Max = ${getMaxValue(num)}`);
});

