const solve = (arr, step) => {
    return arr.filter((element, i) => i % step === 0)

}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2

))