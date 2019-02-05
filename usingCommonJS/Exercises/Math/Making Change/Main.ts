
module Exercise {
      
    /**
     *  Naive Solution
     */

    var ATMGetMinimumCoinsNeeded : (amount : number, coinSystem : number[]) => number = function (amount, coinSystem){
        coinSystem.sort(); // Sort for greater to small val
        return getMinimumAmountOfCoins(amount, coinSystem);
    }

    var getMinimumAmountOfCoins : (amount : number, coinSystem : number[]) => number = function (amount, coinSystem){
        
        if (amount == 0) return 0;
        
        let minimum : number = amount;

        coinSystem.forEach(coin => {
            if (amount - coin >= 0){
                let change : number = getMinimumAmountOfCoins(amount - coin, coinSystem);
                if (minimum > change + 1){
                    minimum = change + 1;
                }
            }
        });

        return minimum;
    }
    
    let coinSystem : number[] = [1, 5, 10, 25];
    let amount: number = 32;
    console.log("Minimum amount of coins needed: " + ATMGetMinimumCoinsNeeded(amount, coinSystem));

    /**
     * Alternative Solution
     * In this alternative solution we are going to use Dynamic programming.
     * Dynamic programming normally store values that we have already calculated.
     * This will allow the microprocessor to not waste time doing math that already done.
     */
    var dynamicATMGetMinimumCoinsNeeded : (amount : number, coinSystem : number[]) => number = function (amount, coinSystem){
        coinSystem.sort(); // Sort for greater to small val
        
        // We create a coin cache that will store the results of extracting the amount with the coin System.
        let coinCache : number[] = new Array(amount);

        // Except for the first position, we initialize all the other with the minimum value.
        // This will indicate that we haven't obtained a result for the position
        coinCache[0] = 0;
        for(var i = 1; i < amount; ++i){
            coinCache[i] = -1;
        }

        return getDynamicMinimumAmountOfCoins(amount, coinSystem, coinCache);
    }

    var getDynamicMinimumAmountOfCoins : (amount : number, 
                                          coinSystem : number[], 
                                          coinCache : number[]) => number = function (amount, coinSystem, coinCache){
        
        if (amount == 0) return 0; 
        
        let minimum : number = amount;

        coinSystem.forEach(coin => {
            if (amount - coin >= 0){                
                
                let change : number;

                if (coinCache[amount - coin] >= 0){
                    change = coinCache[amount - coin];
                }else{
                    change = getDynamicMinimumAmountOfCoins(amount - coin, coinSystem, coinCache);
                    coinCache[amount - coin] = change;
                }
                               
                if (minimum > change + 1){
                    minimum = change + 1;
                }
            }
        });

        return minimum;
    }
    console.log("(Dynamic) Minimum amount of coins needed: " + dynamicATMGetMinimumCoinsNeeded(amount, coinSystem));
}