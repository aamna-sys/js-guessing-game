setTimeout(function () {
    let max = parseInt(prompt("Enter your maximum number:"));
    
    // if the user enters an invalid number (NaN) or a number smaller than 2:
    while (!max || max < 2) {
        max = parseInt(prompt("Enter a VALID maximum number:"));
    }
    console.log(`Playing range: 1 to ${max}`);
    
  }, 200);