function inputDoorNumber(doorNumber) {
    switch (doorNumber) {
        case 1:
        case 2:
        case 3:
            let goldDoorNumber = Math.floor(Math.random() * 3) + 1; // Formula for random number in diapason -> Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (doorNumber === goldDoorNumber) {
                console.log(`Congratulations, Pen4o! You found the treasure behind Door ${doorNumber}!`);

            } else {
                console.log('A bucket of cold water splashes on you! Unlucky Pen4o!');

            }

        break;

        default: 
            console.log('Invalid choice. Please select Door 1, 2, or 3.'); break;

    }

}

inputDoorNumber(3);