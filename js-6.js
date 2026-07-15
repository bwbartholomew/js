function countNegative(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < 0) {
            count++;
        }
    }
    return count;
}

console.log(countNegative([1, -2, 5, -7, 3]));