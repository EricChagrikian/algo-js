function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}
let times = Number(prompt("set how many numbers to generate"))

function multirand(randnum, times) {
    randnum();
    times && --times && multirand(randnum, times);
}

multirand(function() { console.log(rand10()); }, times);


