const input = [
    [5, 9],
    [1, 2, 3, 2, 6, 2, 3, 5, 7],
];

const solution = () => {
    const [cacheSize] = input[0];
    const works = input[1];

    let cache = Array(cacheSize).fill(0);
    works.forEach((work) => {
        const cacheIdx = cache.indexOf(work);
        if (cache.indexOf(0) !== -1 && cacheIdx !== -1) {
            cache[cache.indexOf(0)] = work;
        } else if (cacheIdx !== -1) {
            //cache hit
            cache.splice(cacheIdx, 1);
            cache = [work, ...cache];
        } else {
            //cache miss
            cache = [work, ...cache.slice(0, cache.length - 1)];
        }
    });
    return cache;
};
console.time();
console.log(solution());
console.timeEnd();
