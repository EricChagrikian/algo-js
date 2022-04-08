let n = Number(prompt("Enter how many numbers you want to sum"));
let final = 0;

while (n !== 0){
    ask = Number(prompt("Enter a number to sum"));
    final += ask;
    n--
}

console.log ("The result is " + final)

