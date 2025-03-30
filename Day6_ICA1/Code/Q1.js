function getMaxPurchase(budget, keyboardPrices, mousePrices) {
    let maxPurchase = -1;

    for (let k of keyboardPrices) {
        for (let m of mousePrices) {
            let totalCost = k + m;
            if (totalCost <= budget && totalCost > maxPurchase) {
                maxPurchase = totalCost;
            }
        }
    }

    return maxPurchase;
}


console.log(getMaxPurchase(60, [40, 50, 60], [5, 8, 12]));
console.log(getMaxPurchase(10, [3, 1], [5, 2, 8])); 
console.log(getMaxPurchase(20, [30, 15], [8, 10, 6])); 
