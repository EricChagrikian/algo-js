let min = Number(prompt("select a min equal to 0 and below 9"))
let max = Number(prompt("select a max equal to 0 and below 9"))

if ((min > max) || (min < 0) || (max > 9))  {
    function Wtf(){ Error.apply(this, arguments); this.name = "Your min is higher than your max, or you chose a number below 0 or above 9... see you...  ://"; }
    Wtf.prototype = Object.create(Error.prototype);
    throw new Wtf("Damn you're bad, see you...  ://");
}

let current = prompt("select a current")

if ((current >= min) && (current <= max)) {
    alert("Current is between min & max")
} else {
    alert("Current is NOT between min & max")
}
