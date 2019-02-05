
module Exercise {

    class Node{
        digit : number;
        next : Node;
        constructor(digit : number){
            this.next = null;
            this.digit = digit;
        }
    }
    
    var printList : (l: Node) => void = function (l){
        let str : string = "";
        let current = l;
        while (current != null){
            str = str.concat("[").concat(current.digit.toString()).concat("]").concat((current.next) ? "->" : "");
            current = current.next;
        }
        console.log(str);
    }

    /**
     * From both list, you will receive one list with the results.
     * Single digits will be summated and stored in the return list.
     * If there is a carry value, then it will be carried to the next summation.
     * @param l1 First list
     * @param l2 Second List
     */
    var addDigits : (l1: Node, l2: Node) => Node = function (l1, l2){
        
        let current : Node = null;
        let head : Node = null;
        let sum : number = 0;
        let carry : number = 0;

        while (l1 != null || l2 != null){
            
            sum = carry;

            // Move throw the nodes of both lists
            if (l1 != null){
                sum += l1.digit;
                l1 = l1.next;
            }

            if (l2 != null){
                sum += l2.digit;
                l2 = l2.next;
            }

            // Store the last digit in a new node
            let newNode : Node = new Node(Math.floor(sum % 10));

            // Add new node with result to list
            if (current == null){
                current = newNode;
                head = newNode;
            } else {
                current.next = newNode;
                current = current.next;
            }
    
            carry = sum / 10;

        } // while


        if (carry == 1){
            current.next = new Node(1);
        }

        return (head != null) ? head : new Node(0);
    }

    // Linked List 1: [2] -> [3] -> [4]
    // Linked List 2: [5] -> [6] -> [7]
    // Linked List Result: [7] -> [9] -> [1]

    let list1 : Node = new Node(2);
    list1.next = new Node(3);
    list1.next.next = new Node(4);
    printList(list1);
    
    let list2 : Node = new Node(5);
    list2.next = new Node(6);
    list2.next.next = new Node(7);
    printList(list2);

    let listR : Node = addDigits(list1, list2);
    printList(listR);
}