
/**
 * Author: Alejandro G. Carlstein Ramos Mejia
 * IN construction
 */
namespace SimpleTree {

   /**
    * Leaf
    */
    interface ILeaf<T>{
        data : T;
        left : ILeaf<T>;
        right : ILeaf<T> 
    }

    export class Leaf<T> implements ILeaf<T>{
        data : T;
        left : Leaf<T>;
        right: Leaf<T>;
        parent: Leaf<T>;
        constructor(data : T){            
            this.data = data;
            this.left = null;
            this.right = null;
            this.parent = null;
        }
    }

    /**
     * TreeNode
     */
    interface ITreeNode<T> {
        insertLeaf(leaf : Leaf<T>);
        createLeaf(data : T);
        deleteLeaf(leaf : Leaf<T>);
        deleteLeftLeaf(leaf : Leaf<T>);
        deleteRightLeaf(leaf : Leaf<T>);
        deleteChildrenLeaves(leaf : Leaf<T>);        
        count() : number;    
        writeInOrder(callback : (output: any) => void) : void;
        writePreOrder(callback : (output: any) => void) : void;
        writePostOrder(callback : (output: any) => void) : void;
        readInOrder(callback : (input: any) => void) : number;
        readPreOrder(callback : (input: any) => void) : number;
        readPostOrder(callback : (input: any) => void) : number;
    }

    class TreeNode<T> implements ITreeNode<T>{
        _root : Leaf<T>;
        _count : number;
        constructor(){}

        insertLeaf(leaf : Leaf<T>){}

        createLeaf(data : T){}
        
        deleteLeaf(leaf : Leaf<T>){}
        
        deleteLeftLeaf(leaf : Leaf<T>){}
        
        deleteRightLeaf(leaf : Leaf<T>){}
        
        deleteChildrenLeaves(leaf : Leaf<T>){}
        
        count() : number { return this._count};  
            
        writeInOrder(callback : (output: any) => void) {}

        writePreOrder(callback : (output: any) => void) {}
        
        writePostOrder(callback : (output: any) => void) {}

        readInOrder(callback : (input: any) => void) { return 0;}

        readPreOrder(callback : (input: any) => void)  { return 0;}
        
        readPostOrder(callback : (input: any) => void) { return 0;}

    }

    /**
     * Tree
     */
    interface ITree<T> {
        isEmpty() : boolean; 
        delete (data : T | Leaf<T>) : Leaf<T>;
        insert (data : T | Leaf<T>) : Leaf<T>;
        search (data : T | Leaf<T>) : Leaf<T>;  
    }

    export class Tree<T> extends TreeNode<T> implements ITree<T>{
        
        constructor(){
            super();
        }

        isEmpty = () : boolean => (super.count() > 0);
        
        delete (data : T | Leaf<T>) { return null; } 
        
        insert (data : T | Leaf<T>) { return null; } 
        
        search (data : T | Leaf<T>) { return null; }
    }

}