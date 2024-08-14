//fibonaacciChallenge

function fibonaacciChallenge (n) {
    let answer = [];


    for (let i = 0; i < n; i++) {
        if (i === 0) {
            answer.push (0);
        } else if(i === 1) {
            answer.push(1);
        } else if (i === 2) {
            answer.push(1)
        } else {

            answer.push( answer[i - 2] + answer[i -1])
        }
    }
    return answer;
}

console.log(fibonaacciChallenge(16));


