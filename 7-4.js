const input = [1, 2, 3, -3, -2, 5, 6, -6];

const solution = () => {
    const arr = input;

    for (let l = 1; l < arr.length; l++) {
        let target = arr[l];
        let j = l - 1;
        while (j >= 0 && arr[j] > target) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = target;
    }
    return arr;
};
console.time();
console.log(solution());
console.timeEnd();
