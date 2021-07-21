const input = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];

//My solution is faster than alternativeSolution 10 times!!
const solution = () => {
    console.time();
    const studentCount = input[0].length;
    const teams = [];
    for (let l = 1; l <= studentCount; l++) {
        for (let k = 1; k <= studentCount; k++) {
            if (l !== k) teams.push([l, k]);
        }
    }

    input.forEach((exam) => {
        const reverseExam = exam.reverse();
        reverseExam.forEach((student, idx) => {
            for (let l = idx + 1; l < studentCount; l++) {
                const invalidIndex = teams.findIndex(
                    (team) => team[0] === student && team[1] === reverseExam[l]
                );
                if (invalidIndex !== -1) {
                    teams.splice(invalidIndex, 1);
                }
            }
        });
    });
    console.timeEnd();

    return teams.length;
};
const alternativeSolution = () => {
    console.time();
    const teams = [];
    let result = 0;

    const examCount = input.length;
    const studentCount = input[0].length;

    //student check loops
    for (let i = 1; i <= studentCount; i++) {
        for (let j = 1; j <= studentCount; j++) {
            let cnt = 0;
            for (let k = 0; k < examCount; k++) {
                //k is examIndex
                let iRank = 0,
                    jRank = 0;
                for (let h = 0; h < studentCount; h++) {
                    if (input[k][h] === i) iRank = h;
                    if (input[k][h] === j) jRank = h;
                }
                if (iRank < jRank) cnt++;
            }
            if (cnt === examCount) {
                teams.push([i, j]);
                result++;
            }
        }
    }
    console.log(teams);
    console.timeEnd();
    return result;
};
console.log(solution());
