
module Exercise {


    var getLongestCommonPrefix : (strArr: string[]) => string = function (strArr){
        let rtnCommonPrefix : string = "";
        if (strArr.length > 0){
            var strSorted = strArr.concat().sort();            
            var firstStr = strSorted[0];
            var lastStr = strSorted[strSorted.length - 1];
            for (var i = 0; i < firstStr.length; ++i){
                if (firstStr[i] !== lastStr[i]){
                    rtnCommonPrefix = firstStr.substr(0, i);
                    break;
                }
            }
        }
        return rtnCommonPrefix;
    }
 

    console.log("Obtain longest common prefix from  [\"abcdefgh\", \"axghhjkl\",\"abcefgh\"]:");
    let strArr : string[] = ["abcdefgh", "axghhjkl","abcefgh"];
    let longestCommonPrefix : string = getLongestCommonPrefix(strArr);
    console.log("Result: " + longestCommonPrefix);

}