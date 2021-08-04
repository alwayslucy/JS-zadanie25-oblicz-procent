const percentFunction = (obj) => {
    let number = obj.num * obj.perc / 100;
    let result = Math.round(number * 10) / 10;

    return result;
}

console.log(percentFunction({ num: 256, perc: 23 }));