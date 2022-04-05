let num = prompt("Enter your favorite number. Hint: it's the answer to the meaning of life")

if (num == "42") {
        alert("Great job! That is everyone's favorite number, right... ? :)")
} else { while (num != "42") {
        alert("Nope! please try again.");
        prompt("That wasn't your favorite number! Think about life.");
        if (num == "42");
        break;
    }
}