function findingHappyNumbers(firstNumber, finalNumber) {
    let currentNumber = firstNumber;
    let palindromeCount = 0;
    let result = '';

    while (currentNumber <= finalNumber) {
        
        if (currentNumber % 2 === 0) {
            if (currentNumber % 3 === 0) {
                let chr = String(currentNumber);
                let rev = chr.split("").reverse("").join(""); 

                if (rev == chr) {
                    result += chr + "\n";
                    palindromeCount++
                }
            }
        }

        currentNumber++;
    }

    if (palindromeCount === 0) {
        result = `The statues remain silent…`
    }

    console.log(result);
}

findingHappyNumbers(50, 60)