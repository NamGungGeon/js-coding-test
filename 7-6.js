const input = [120, 125, 152, 130, 135, 135, 143, 127, 160];

const solution = () => {
    const lengths = input;
    const sorted = lengths.slice().sort();

    let targets = [];
    for (let l = 0; l < lengths.length; l++) {
        if (lengths[l] !== sorted[l] && targets.length < 2) {
            //found
            targets.push(l + 1);
        }
    }
    return targets;
};
console.time();
console.log(solution());
console.timeEnd();
