
module Exercise {

    enum Method {
        REMAINDER,
        AND
    }

    /**
     * This function will return the number of ones that the binary representation of a number provides.
     * There a two ways to do this. Using a reminder or an AND operator. 
     * The AND operator is set as a defaul since its more efficient.
     * @param num Number for which obtain the number of ones
     * @param method Use the remainder or & method
     */
    var getNumberOfOnes : (num : number, method ?: Method) => number = function (num, method=Method.AND){
        let sum : number = 0;
        
        while (num > 0){
            switch(method){
                case Method.REMAINDER:
                    /*
                     * By dividing by 2, we have two possible answers: 0 or 1.
                     * Zero if the number is even and one if the number is odd.
                     * If the number is even, we sum zero. If it is odd, we sum one.
                     */
                    sum += num % 2;
                    break;
                default: // AND
                    /*
                     *  x & 0 = 0
                     *  x & 1 = x
                     *  x & x = x
                     *  So, by using the AND bitwise operator, we set all bits to zero except the LSB
                     *  which would be of the value of num. Example:
                     *       0b1010101011        0b1010101010
                     *      &                   &
                     *       0b0000000001        0b0000000001
                     *      --------------      --------------
                     *       0b0000000001        0b0000000000
                     */
                    sum += num & 1;
            }
            
            // We use a logical shift right by one position
            // Remember that we already use the LSB on the previous step so we don't need it.
            num >>>= 1;
        }

        return sum;
    }
    
  
}