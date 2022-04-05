let num = prompt("Enter your favorite number. Hint: it's the answer to the meaning of life")

if (num == "42") {
        alert("Great job!")
} else { while (num != "42") {
        alert("Nope! please try again.")
        break;
    }
}