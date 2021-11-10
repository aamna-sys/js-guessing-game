setTimeout(function () {
    let max = parseInt(prompt("Enter your maximum number:"));

    // if the user enters an invalid number (NaN) or a number smaller than 2:
    while (!max || max < 2) {
        max = parseInt(prompt("Enter a VALID maximum number:"));
    }
    console.log(`Playing range: 1 to ${max}`);

    const target = Math.floor(Math.random() * max) + 1; //generating a random b/w 1 and max

    let guess = parseInt(prompt("Enter your guess:"));
    while (!guess || guess < 1 || guess > max) {
        guess = parseInt(prompt(`Enter a valid guess in range 1 - ${max}:`));
    }

    let attempts = 1;

    while (true) {
        let instruction = "";
        if (guess < target) {
            instruction = "low";
        } else if (guess > target) {
            instruction = "high";
        } else {
            alert("Open the console to see the results.");
            console.log(
                `You WON!!! The secret number was ${target}. It took you ${attempts} tries to guess it.`
            );
            break;
        }

        guess = parseInt(prompt(`Too ${instruction}. Enter again:`));
        while (!guess || guess < 1 || guess > max) {
            guess = parseInt(
                prompt(`Enter a valid guess in range 1 - ${max}:`)
            );
        }
        attempts++;
    }
}, 200);
