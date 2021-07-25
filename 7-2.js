const input = [13, 5, 11, 7, 23, 15];

const solution = () => {
    const arr = input;
    for (let l = 0; l < arr.length; l++) {
        for (let k = l + 1; k < arr.length; k++) {
            if (arr[l] > arr[k]) {
                const temp = arr[l];
                arr[l] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
};
console.time();
console.log(solution());
console.timeEnd();
