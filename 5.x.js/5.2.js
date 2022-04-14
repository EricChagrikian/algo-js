function askTvSerie {
    const serieinfo = {
    name: prompt("What is your favorite TV serie's name ?"),
    year: prompt("When was it produced ?"),
    cast: []
    }
};

function randLength(n) {
    return Math.floor(Math.random() * n);
}

function isUnique(stock, i){
      let j = 0;
      while(j < i)
          if (stock[j++] == stock[i])
              return false;
      return true;
  }
function randomizeCast(tvSerie)
{
    let array = [];
    let stock = [];
    let i = 0;

    while (i < tvSerie.cast.length) {
        stock[i] = randLength(tvSerie.cast.length);
        if(isUnique(stock, i))
            array.push(tvSerie.cast[stock[i++]])
    }
    return array;
}

function newCast()
{
    let newSerie ={
        name : prompt("new serie"),
        cast : randomizeCast(askTvSerie())
    };
    return newSerie.cast;
}

console.log("Your favorite serie's name is: " + askTvSerie["name"])
console.log("It was produced in: " + askTvSerie["year"])
console.log("Your new cast is " + newCast());
