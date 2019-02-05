
module Exercise {
    
    var getLongestSubstringsWithoutRepetition : (strArr: string[]) => number[] = function (strArr){
        let rtnSubStrLenArr : number[] = [];

        strArr.forEach(element => {
            rtnSubStrLenArr.push(getLengthOfLongestSubstringWithoutRepetition(element));
        });

        return rtnSubStrLenArr;
    }

    var getLengthOfLongestSubstringWithoutRepetition : (str : string) => number = function (str){
        
        if (str.length == 0) return 0;

        var maxLength : number = 0;
        
        var map: {[key: string]: number} = {};

        var count = 0;
        for (var i = 0; i < str.length; ++i){
            var char = str.charAt(i);
            if (char in map){
                count = Math.max(count, map[char] + 1);
            }
            map[char] = i;
            maxLength = Math.max(maxLength, i - count + 1);
        }
        return maxLength;
    }

    console.log("Obtain longest substrings without repetition of [\"abcabcdd\", \"ccccc\", \"paakea\"]:");
    let strArr : string[] = ["abcabcdd", "ccccc", "paakea"];
    let subStrLenArr : number[] = getLongestSubstringsWithoutRepetition(strArr);
    console.log(subStrLenArr);

}