/// <reference path="../../../../Assets/Collections.ts" />
/// <reference path="../../../../Assets/Nodes.ts" />

module Exercise {



    /**
     * In order traversal, iterate throw the tree iteratively (not recursive)
     * @param root Tree
     */
    var inOrderTraversal : (root: TreeNode) => number[] = function (root){
        let list : number[] = [];
        let stack : Stack<TreeNode> = new Stack<TreeNode>();
        

        while (root != null || !stack.isEmpty()){

            // Process left subtree
            if (root != null){
                stack.push(root);
                root = root.left;

                // Continue with next iteration (skip the rest of the code in the loop)
                continue;
            }

            // Retrieve value
            root = stack.pop();
            list.push(root.value);
            
            // Process right subtree
            root = root.right;
        }

        return list;
    }

    let tree : TreeNode = new TreeNode(1);
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);

    let list =  inOrderTraversal(tree);
    console.log("[".concat(list.toString()).concat("]"));

}