
module Exercise {

    class Node{
        digit : number;
        next : Node;
        constructor(digit : number){
            this.next = null;
            this.digit = digit;
        }
    }
    

    var getNthToLast : (list: Node, n : number) => Node = function (list, n){
        
        // Both current and follower pointers are pointing to the beginning of the list (hopefully)
        let current : Node = list;
        let follower : Node = list;


        // Iterate the current point to the Nth element.
        for (var i = 0; i < n; ++i){

            // We must have in consideration that perhaps there is no Nth element in the linked list.
            if (current == null) return null;

            current = current.next;
        }

        // Now that we are at the Nth element, we can allow the follower pointer to follow the current pointer
        // since follower will be at the proper distance.
        while (current.next != null){
            current = current.next;
            follower = follower.next;
        }

        // At this point, current has reached the end of the list and follower will end at the Nth element.
        return follower;
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



    let linkedlist : Node = new Node(1);
    linkedlist.next = new Node(2);
    linkedlist.next.next = new Node(3);
    linkedlist.next.next.next = new Node(4);
    linkedlist.next.next.next.next = new Node(5);
    
    printList(linkedlist);
    

}