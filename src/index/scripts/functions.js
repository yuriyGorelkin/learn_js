function findMax(array) {
    let maxValue = 0;
    array.forEach((item) => {
        if (typeof item === 'number' && item > maxValue) {
            maxValue = item;
        }
    });
    return maxValue;
}

let maxValue = findMax([1, 42, 32, 56, 89, 101, 56, 2]);
console.log(`MaxValue: ${maxValue}`);