
module Exercise {

    /**
     * Return a array of distinct subsets created from the set of values provided.
     * @param set 
     */
    var getSubsets : (set : Array<number>) => Array<Array<number>> = function(set){
        let subsets : Array<Array<number>> = new Array<Array<number>>();
        subsets.push(new Array<number>()); // Add Empty set
        findAllSubsets(subsets, set, 0);
        return subsets;
    }

    /**
     * For each set:
     * 1. Create a new set and add elements of a given set
     * 2. Then, add all the possible subsets to the new set.
     * 3. Finally, repeat step #2 for each element of the given set.
     * @param subsets Group of subsets
     * @param set Original set of values to use
     * @param currentPos Current position in the set to get values from
     */
    var findAllSubsets : (subsets : Array<Array<number>>, 
                          set : Array<number>,
                          currentPos : number) => void = function(subsets, set, currentPos){        
        if (currentPos == set.length){
            return;
        }

        let subsetLen : number = subsets.length;
        let newSet : Array<number> = new Array<number>();

        for(var i = 0; i < subsetLen; ++i){
            newSet = cloneSet(subsets[i]);
            newSet.push(set[currentPos]);
            subsets.push(newSet);
        }

        findAllSubsets(subsets, set, currentPos + 1);
        
    }

    /**
     * Return a clone of a set provided
     * @param set 
     */
    var cloneSet : (set : Array<number>) => Array<number> = function (set){
        const clone = (<any>Object).assign([], set);
        return clone;        
    }
    
    let set : Array<number> = [1, 2, 3];
    console.log(getSubsets(set));    

}