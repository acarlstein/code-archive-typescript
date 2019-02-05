/**
 * Author: Alejandro G. Carlstein Ramos Mejia
 */
namespace DoubleLinkedList { 

    /**
     * Node
     */
    interface INode<T>{
        data : T;
        next : INode<T>;
        prev : INode<T>;
    }

    class Node<T> implements INode<T>{
        data : T;
        next : Node<T>;
        prev : Node<T>;
        constructor(data : T){
            this.next = null;
            this.prev = null;
            this.data = data;
        }
    }

    /**
     * List of nodes
     */
    interface IListNode<T> {
        size() : number;
        isEmpty() : boolean;      
        addToFront(node : INode<T>) : IListNode<T>;
        addToBack(node : INode<T>) : IListNode<T>;
        getFirst() : INode<T>;
        getLast() : INode<T>;
        popFromFront() : INode<T>;
        popFromBack() : INode<T>;
        clone() : IListNode<T>;
    }

    class ListNode<T> implements IListNode<T>{
        private _size : number = 0;
        private _head : Node<T>;
        private _tail : Node<T>;

        constructor(){           
            this._head = null; 
            this._tail = null;
        }

        size = () : number => this._size;  
        isEmpty = () : boolean => (this._size > 0);
        
        addToFront(node : INode<T>) : IListNode<T> {
            if (this._head == null){
                this._head = node;
                this._tail = node;
                this._size++;
                return;
            }
            node.next = this._head;
            this._head = node;
            this._size++;
            return this;
        }

        addToBack(node : INode<T>) : IListNode<T> {
            if (this._tail == null){
                this._head = node;
                this._tail = node;
                this._size++;
                return;
            }
            node.prev = this._tail;
            this._tail = node;
            this._size++;
            return this;
        }
        
        getFirst() : INode<T> {             
            return this._head; 
        }

        getLast() : INode<T> { 
            return this._tail; 
        }

        popFromFront() : INode<T> {
            if (this._head != null){
                var rtnNode = this._head;
                this._head = this._head.next;
                this._size--;
                return rtnNode;
            }
            return null;
        }
        
        popFromBack() : INode<T>{
            if (this._tail != null){
                var rtnNode = this._tail;
                this._tail = this._tail.prev;
                this._size--;
                return rtnNode;
            }
            return null;
        }

        clone() : IListNode<T> { 
            let newList = new ListNode<T>();
            if (this._head.next != null){
                var currentNode = this._head.next;
                while (currentNode != null){
                    newList.addToBack(currentNode);
                    currentNode = currentNode.next;
                }
            }

            return newList; 
        }
    }

    interface IList<T> {
        size() : number;
        isEmpty() : boolean;      
        pushFront(data : T) : IList<T>;
        pushBack(data : T) : IList<T>;
        getFront() : T;
        getBack() : T;
        popFront() : T;
        popBack() : T;        
        clone() : IList<T>;
    }

    export class List<T> extends ListNode<T> implements IList<T>{
        
        constructor(){
            super();
        }

        pushFront(data : T) : IList<T> {                         
            super.addToFront(this.getNode(data));
            return this;
        }

        pushBack(data : T) : IList<T> {                        
            super.addToBack(this.getNode(data));
            return this;
        }
        
        getFront() : T {             
            return super.getFirst().data; 
        }

        getBack() : T { 
            return super.getLast().data; 
        }

        popFront() : T {             
            return super.popFromFront().data; 
        }

        popBack() : T { 
            return super.popFromBack().data; 
        }

        clone() : List<T>{
            return this;
        }

        getNode = (data : T) : Node<T> => new Node<T>(data); 
    }

}