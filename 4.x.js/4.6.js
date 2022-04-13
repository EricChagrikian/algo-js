function factorial(a){
    //base case
    if(a == 0 || a == 1){
        return 1;
    //recursive case
    }else{
        return a * factorial(a-1);
    }
}
let a = 2;
answer = factorial(a)
console.log("The factorial of " + a + " is " + answer);