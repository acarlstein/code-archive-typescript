/// <reference path="../../../Assets/Set.ts" />
import Set from "../../../Assets/Set";

module Exercise {
    
     

    /**
     * @param arr array of values
     * @param target target to match the sum of two elements of the array (if exists)
     */
    var hasPairWhichSumToTarget : (arr: number[], target : number) => boolean = function (arr, target){
        
        let comp : Set<number> = new Set<number>();
        
        for (var value of arr){
            if(comp.has(value)){
                return true;
            }
            comp.add(target - value);
        }

        return false;
    }

    console.log("Sum two elements in array [3, 5, 8, 13] to match target value 11:");
    let target : number = 11;
    let arr : number[] = [3, 5, 8, 13];
    console.log("Is there a pair that sum to " + target + "? " + hasPairWhichSumToTarget(arr, target));

    arr = [3, 5, 9, 13];
    console.log("Is there a pair that sum to " + target + "? " + hasPairWhichSumToTarget(arr, target));

}