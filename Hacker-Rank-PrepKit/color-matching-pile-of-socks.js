function sockMerchant(n, ar) {
    try {
        let pairs = 0;
        const temp = {};
        const pairedSocks = {};
        for (let n of ar) {
            if (temp[n] in temp) {
                pairedSocks[`Pair no ${pairs + 1}`] = n;
                delete temp[n];
                pairs++;
            } else {
                temp[n] = n;
            }
        }
        return { TotalPairs: pairs, PairedSocks: pairedSocks };
    } catch (error) {
        return { Error: error, Message: error.message }
    }
}

const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);

