function decodingChipher(chipher) {
    let upperCasePattern = /[A-Z]/;
    let lowerCasePattern = /[a-z]/;
    let digitPattern = /\d/;
    let decodedMessage = '';
    let cardPower = 0;

    for (let i = 0; i < chipher.length; i++) {
        let chipherChar = chipher[i];

        if (lowerCasePattern.test(chipherChar)) {
            decodedMessage += chipherChar.toUpperCase();
        } else if (upperCasePattern.test(chipherChar)) {
            decodedMessage += chipherChar.toLowerCase();
        } else if (digitPattern.test(chipherChar)) {
            cardPower += Number(chipherChar);
            decodedMessage += chipherChar;
        } else {
            decodedMessage += chipherChar;
        }
    }

    console.log(decodedMessage);

    if (cardPower > 20) {
        console.log(`The map reveals your next location! Total power: ${cardPower}`);
    } else {
        console.log(`The map warns of danger! Total power: ${cardPower}`);
    }
}

decodingChipher('T3r4p_M4p');