let arr = [1, 2, 3, 4, 5];
let total = 0;
let numbers = 0
for(let i = 0; i < arr.length; i++) {
    total += arr[i];
}
let average = total / arr.length;




let arr = [1, 2, 3, 4, 5];
let total = 0;
for (let i in arr) {
  total += arr[i];
}