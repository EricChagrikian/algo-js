function calcDistance(a1, b1, a2, b2) {
    let b = a2 - a1;
    let a = b2 - b1


    return Math.sqrt(a * a + b * b)
}

console.log(calcDistance(-2, 2, 2, -2))


function calcDistance(A, B)
{
    return Math.sqrt(Math.pow((B[1] - A[1]), 2) + Math.pow((A[0] - B[0]), 2));
}

let A = [-2, 2];
let B = [2, -2];
console.log(calcDistance(A, B));