function decodingChipher(chipher) {

    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let smallCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let decodedMessage = '';
    let cardPower = 0;

    for (let i = 0; i < chipher.length; i++) {
        let chipherChar = chipher[i];

        if (smallCase.includes(chipherChar)) {
            decodedMessage += chipherChar.toUpperCase();
        } else if (upperCase.includes(chipherChar)) {
            decodedMessage += chipherChar.toLowerCase();
        } else if (digits.includes(chipherChar)) {
            cardPower += Number(chipherChar);
            decodedMessage += chipherChar;
        } else {
            decodedMessage += chipherChar;
        }
    }

    console.log(decodedMessage);

    if (cardPower > 20) {
        console.log(`The map reveals the your next location! Total power: ${cardPower}`);
    } else {
        console.log(`The map warns of danger! Total power: ${cardPower}`);
    }
}

decodingChipher('Dangerous_2Clue');