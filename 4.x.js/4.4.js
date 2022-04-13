let arr = ["Gilles", "Jamie", "Jason", "Jérémy", "Emre", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sébastien", "Tangy", "Thibaud", "Zakaria", "Martin", "Eric"]

function rand10() {
    return Math.floor(Math.random() * arr.length);
}

function pickLearners(arr, n){
    if(n >= arr.length)
      return arr
  
    const arrCopy = [...arr]
    const returnArr = []
  
    for(let i=0;i<n;i++){
      const r = rand10()
  
      returnArr.push(arrCopy[r])
      arrCopy.splice(r, 1)
    }
  
    return returnArr
  }
  
console.log(pickLearners(arr, 2));
