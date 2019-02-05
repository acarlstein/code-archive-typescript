
module Exercise {
    
    /**
     * @param arr array of values
     * @param target target to match the sum of two elements of the array (if exists)
     */
    var hasPairWhichSumToTarget : (arr: number[], target : number) => boolean = function (arr, target){
        
        // Lower index goes from left to right.
        let lowerIndex : number = 0;

        // Higher index goes from right to left.
        let higherIndex : number = arr.length - 1;

        let alternate : number = 0;
     
        while (target >= arr[higherIndex]){            
            higherIndex--;
        }

        // While the indexes do not cross such as higherIndex is lower than lowerIndex
        while (lowerIndex < higherIndex){
            
            // Do the summation of the current values in such indexes and check if match the target            
            let summation = arr[lowerIndex] + arr[higherIndex];            
            console.log(arr[lowerIndex] + " + " + arr[higherIndex] + " = " + summation + " =?= " + target);

            if (summation == target){
                return true;
            } 
            
            // Since we didn't find two values that sum to the target,
            // we alternate by moving the lowerIndex to the right by 1, and the move the higherIndex to the left by 1.
            if (alternate % 2 == 0){
                higherIndex--;
            }else{
                lowerIndex++;
            }
            alternate++;
        }

        // At this point, we couldn't find two values in the array that would sum to the target.
        return false;
    }

    console.log("Sum two elements in array [3, 5, 8, 13] to match target value 11:");
    let target : number = 11;
    let arr : number[] = [3, 5, 8, 13];
    console.log("Is there a pair that sum to " + target + "? " + hasPairWhichSumToTarget(arr, target));

    arr = [3, 5, 9, 13];
    console.log("Is there a pair that sum to " + target + "? " + hasPairWhichSumToTarget(arr, target));

}