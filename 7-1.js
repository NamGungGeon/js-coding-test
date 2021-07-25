const input = [13, 5, 11, 7, 23, 15];

const solution = () => {
    const arr = input;
    for (let l = 0; l < arr.length; l++) {
        let minIndex = l;
        for (let k = l + 1; k < arr.length; k++) {
            if (arr[minIndex] > arr[k]) {
                minIndex = k;
            }
        }

        if (minIndex !== l) {
            const temp = arr[minIndex];
            arr[minIndex] = arr[l];
            arr[l] = temp;
        }
    }
    return arr;
};
console.time();
console.log(solution());
console.timeEnd();
