let askTvSerie = {
   
    name: prompt("What is your favorite TV serie's name ?"),
    year: prompt("When was it produced ?"),
    cast: [ prompt ("Name one or more members of its cast.")

};



        console.log("Your favorite serie's name is: " + askTvSerie["name"])
        console.log("It was produced in: " + askTvSerie["year"])
        console.log("One of/Some of the member(s) of its cast: " + askTvSerie["cast"])