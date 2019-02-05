/// <reference path="../../../Assets/Utilities.ts" />

module Exercise {

    export let log : Log = new Log("log");

    export var getStringPermutations : (str : string) => string[] = function(str){        
        log.add("getStringPermutations(".concat(str).concat(")"));
        let rtnStrings : string[] = [];
        helperPermutationsBuilder("", str, rtnStrings);
        return rtnStrings;
    }

    var helperPermutationsBuilder :(prefix : string, 
                                    suffix : string, 
                                    results : string[]) => void = function(prefix, suffix, results){
        log.add("helperPermutationsBuilder(".concat(prefix).concat(", ").concat(suffix).concat(", [").concat(results.toString()).concat("])"));

        if (suffix.length == 0){
            results.push(prefix);
        }else{
            for (var i = 0; i < suffix.length; ++i){
                helperPermutationsBuilder(prefix.concat(suffix.charAt(i)), 
                                          suffix.substring(0, i).concat(suffix.substring(i + 1, suffix.length)),
                                          results);
            }
        }
    }

}

function getPermutations(){
    let log = Exercise.log;
    let permutations : string[] = Exercise.getStringPermutations("abc");
    log.add("Total Permutations: [".concat(permutations.toString()).concat("]"));
    log.show();
}