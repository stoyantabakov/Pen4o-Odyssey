function isTriangleValid (a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        console.log(`The Triangle of Truth with sides ${a}, ${b} and ${c} has been validated. Pen4o, you may begin your journey!`);
    } else {
        console.log(`The Triangle of Truth with sides ${a}, ${b} and ${c} is invalid. Pen4o remains stuck!`);
    }
}

isTriangleValid(3, 4, 5);