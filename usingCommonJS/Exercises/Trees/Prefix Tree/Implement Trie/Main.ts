/// <reference path="../../../../Assets/Collections.ts" />
/// <reference path="../../../../Assets/Nodes.ts" />

module Exercise {

    // We are working with lower case characters from a to z.
    const ALPHABET_SIZE : number = 26;

    class TrieNode {
        value : string;
        isWord : boolean;
        node : TrieNode;
        children : TrieNode[] = new Array<TrieNode>(ALPHABET_SIZE);
        

        constructor(private character : string = null){
            this.isWord = false;
            for (var i = 0; i < this.children.length; ++i){
                this.children[i] = null;
            }
            if (character){
                this.node = new TrieNode;
                this.node.value = character;
            }
        }

    }

    class Trie {
        root : TrieNode;

        constructor(){
            this.root = new TrieNode();
            this.root.value = '';
        }


        /**
         * 
         * @param word 
         */
        insert(word: string) {
            // We will start from the root of the Trie (current node).
            var current : TrieNode = this.root;
            
            // Loop through each character in the word
            for (var i = 0; i < word.length; ++i){

                let character = word.charAt(i);

                // We obtain an index by resting the ASCII number representation of the current character
                // with the ASCII number representation of the 'a' character.
                // This allow us to have an index going from 0 to 25 for which a = 0 and z = 25
                // i.e.: a = 97. a = 97. Then, childIndex = 97 - 97 = 0.
                // i.e.: t = 116. a = 97. Then, childIndex = 116 - 97 = 19.
                // i.e.: z = 122. a = 97. Then, childIndex = 122 - 97 = 25.
                let childIndex : number = character.charCodeAt(0) - 'a'.charCodeAt(0);

                // We check in the array if there is a node.
                // If there is, then such node is holding the character
                if (null == current.children[childIndex]){
                
                    // We need to create a new node with the character.
                    // The index will be the numerical representation of that character
                    current.children[childIndex] = new TrieNode(character);                    
                }

                // Now the current node is the children at that index.
                current = current.children[childIndex];
            }
            
            // By the time we checked every character of the word,
            // we will have a node position to the last character
            // then we check if it is a word or not.
            current.isWord = true;
        }


        search(word : string) : boolean {
            // We will start from the root of the Trie (current node).
            var current : TrieNode = this.root;

            // We will look each character of the word.
            for (var i = 0; i < word.length; ++i){
                let character = word.charAt(i);
                let childIndex : number = character.charCodeAt(0) - 'a'.charCodeAt(0);
                
                // If we find that there is no a node with the character
                // then it means that such word doesn't exist in our Trie
                if (null == current.children[childIndex]){
                    return false;                    
                }

                // We keep moving between nodes
                current = current.children[childIndex];
            }

            // At this moment, we are at the last character
            // We indicate if such character is a word or not.
            return current.isWord;
        }

        /**
         * The startsWith function works identical to the search word; 
         * however, it returns true if at the end of the nodes we iterate
         * we encounter an inexistent character.
         * @param prefix 
         */
        startsWith(prefix : string) : boolean {
            var current : TrieNode = this.root;

            for (var i = 0; i < prefix.length; ++i){
                let character = prefix.charAt(i);
                let childIndex : number = character.charCodeAt(0) - 'a'.charCodeAt(0);
                if (null == current.children[childIndex]){
                    return false;                    
                }
                current = current.children[childIndex];
            }

            return true;  
        }

    }

    let words : string[] = ["a", "to", "tea", "ted", "ten", "i", "in", "inn"];
    let trie : Trie = new Trie();
    
    words.forEach(word => {
        trie.insert(word);    
    });
    
    words.forEach(word => {
        console.log("Is ".concat(word).concat(" inside trie? ") + trie.search(word));    
    });

    console.log("");

    words.forEach(word => {        
        for (var i = 0; i <= word.length; ++i){
            var prefix = word.slice(0, i);
            console.log("Is prefix ".concat(prefix).concat(" inside trie? ") + trie.startsWith(prefix));    
        }
    });
}