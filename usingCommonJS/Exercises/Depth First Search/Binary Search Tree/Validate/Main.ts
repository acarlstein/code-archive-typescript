/// <reference path="../../../../Assets/Collections.ts" />
/// <reference path="../../../../Assets/Nodes.ts" />

module Exercise {

    let previousValue : number = Number.MIN_VALUE - 1;

    var isBSTValid : (root: TreeNode) => boolean = function (root){
        
        // Empty BST = valid BST
        if (root == null) return true;

        // In-order traversal to the left side
        if (!isBSTValid(root.left)) return false;

        if (previousValue >= root.value) return false;

        previousValue = root.value;

        // In-order traversal to the right side
        return isBSTValid(root.right);    
    }

    let treeA : TreeNode = new TreeNode(2);
    treeA.left = new TreeNode(1);
    treeA.right = new TreeNode(3);
    console.log("Is Tree A a valid BST? " + isBSTValid(treeA));

    let treeB : TreeNode = new TreeNode(1);
    treeB.left = new TreeNode(2);
    treeB.right = new TreeNode(3);
    console.log("Is Tree B a valid BST? " + isBSTValid(treeB));
    
}