function calcDistance(A, B)
{
    return Math.sqrt(Math.pow((B[1] - A[1]), 2) + Math.pow((A[0] - B[0]), 2));
}

let A = [1, 2];
let B = [2, 5];
console.log(calcDistance(A, B));