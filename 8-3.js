const input = [1];

let iterCount = 0;
const solution = () => {
    const traverse = (v, result = '') => {
        iterCount++;
        if (v > 7) {
            return result;
        }
        // //후위순회 (왼쪽자식->오른쪽자식-> 부모)
        // result = traverse(v * 2, result);
        // result = traverse(v * 2 + 1, result);
        // result += v;
        // //중위순회 (왼쪽자식->부모->오른쪽자신)
        // result = traverse(v * 2, result);
        // result += v;
        // result = traverse(v * 2 + 1, result);
        //전위순회 (부모-> 왼쪽자식-> 오른쪽자식)
        result += v;
        result = traverse(v * 2, result);
        result = traverse(v * 2 + 1, result);

        return result;
    };

    return traverse(input[0]);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
