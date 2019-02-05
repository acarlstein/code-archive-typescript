
module Exercise {
    
    /**
     * Given an array of numbers and a target, the function will return an array that will contain
     * the indeces of the elements that sum to the target if applies.
     * @param arr array of values
     * @param target target to match the sum of two elements of the array (if exists)
     */
    var sumTwoToTarget : (arr: number[], target : number) => number[] = function (arr, target){
        let rtnArr : number[] = [];
        
        var map: {[key: number]: number} = {}

        for(var i = 0; i < arr.length; ++i){
            
            // Check if element equal to the different between the target and current element exists.
            var val : number = map[target - arr[i]];

            // If doesn't exist then put index to map with element value 
            // Then break current loop iteration and continue with the next loop iteration.
            if (val == null){
                map[arr[i]] = i;
                continue;
            }

            // Match was found and we update the index values.
            // Then, we exit the loop.
            rtnArr[0] = val;
            rtnArr[1] = i;
            break;
        }

        return rtnArr;
    }

    console.log("Sum two elements in array [3, 5, 8, 13] to match target value 11:");
    let arr : number[] = [3, 5, 8, 13];
    let sumArr : number[] = sumTwoToTarget(arr, 11);
    console.log(sumArr);

}