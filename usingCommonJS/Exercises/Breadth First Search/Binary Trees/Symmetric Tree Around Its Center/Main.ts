/// <reference path="../../../../Assets/Collections.ts" />
/// <reference path="../../../../Assets/Nodes.ts" />

module Exercise {

    let previousValue : number = Number.MIN_VALUE - 1;

    var isTreeSymmetric : (root: TreeNode) => boolean = function (root){
        
        // If root is null. Nothing to do here.
        // By definition this "tree" is symmetric since there is no node to begin with.
        if (null == root) return true;

        return isSymmetricHelper(root.left, root.right);
    }

    var isSymmetricHelper : (leftNode: TreeNode, rightNode: TreeNode) => boolean = function (leftNode, rightNode){
        
        // If both nodes are null, then both sides are the same
        if (null == leftNode && null == rightNode) return true;

        // If either node is null, then both sides are not symmetric
        if (null == leftNode || null == rightNode) return false;

        // If values are the same, go to left and right side recursevily to check symmetry.
        if (leftNode.value == rightNode.value){
            let isLeftSideSymmetric = isSymmetricHelper(leftNode.left, rightNode.right);
            let isRightSideSymmetric = isSymmetricHelper(leftNode.right, rightNode.left);
            return isLeftSideSymmetric && isRightSideSymmetric;
        }

        // Values are different; therefore, it is not symmetric.
        return false;
    }
    
    let symmetricTree : TreeNode = new TreeNode(1);
    symmetricTree.left = new TreeNode(2);
    symmetricTree.left.left = new TreeNode(3);
    symmetricTree.left.right = new TreeNode(4);
    symmetricTree.right = new TreeNode(2);
    symmetricTree.right.left = new TreeNode(4);
    symmetricTree.right.right = new TreeNode(3);
    console.log("Is this tree symmetric? " + isTreeSymmetric(symmetricTree));

    let nonSymmetricTree : TreeNode = new TreeNode(1);
    nonSymmetricTree.left = new TreeNode(2);
    nonSymmetricTree.left.left = new TreeNode(3);
    nonSymmetricTree.left.right = null;
    nonSymmetricTree.right = new TreeNode(2);
    nonSymmetricTree.right.left = new TreeNode(4);
    nonSymmetricTree.right.right = null;
    console.log("Is this tree symmetric? " + isTreeSymmetric(nonSymmetricTree));
    
}