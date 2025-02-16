function fillTheWell(wellCapacity, arr) {
    let waterVolumeInput = 0;
    let totalWaterVolume = 0;
    let isVolumeMinus = false;

    for (let i = 0; i < arr.length; i++) {
        waterVolumeInput = Number(arr[i]);
        totalWaterVolume += waterVolumeInput;

        if (waterVolumeInput < 0) {
            isVolumeMinus = true;
            break;
        }
    }

    if (isVolumeMinus) {
        console.log(`Failure! The well has been sealed.`);
    } else if (totalWaterVolume === wellCapacity) {
        console.log(`Success! The well reveals its precious treasure!`);
    } else if (totalWaterVolume > wellCapacity) {
        console.log(`Overflow! The well rejects your offering.`);
    }
}

fillTheWell(50, [30, 20]);
// fillTheWell(100, [10, 30, -10]);
// fillTheWell(50, [30, 40]);
