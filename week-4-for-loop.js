function findingHappyNumbers(firstNumber, finalNumber) {
    let palindromeCount = 0;
    let result = '';

    for (let i = firstNumber; i <= finalNumber; i++) {
        if (i % 2 === 0) {
            if (i % 3 === 0) {
                let chr = String(i);
                let rev = chr.split("").reverse("").join("");

                if (rev == chr) {
                    result += chr + "\n";
                    palindromeCount++
                }
            }
        }
    }

    if (palindromeCount === 0) {
        result = `The statues remain silent…`
    }

    console.log(result);
}

findingHappyNumbers(10, 300)
