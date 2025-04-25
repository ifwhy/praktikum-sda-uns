# 2 - Binary Search Tree

## Konsep Binary Search Tree
Binary Search Tree adalah struktur data Binary Tree berbasis node yang memiliki beberapa aturan seperti berikut:

Subtree sebelah kiri dari sebuah node hanya berisi node dengan kunci (key) yang lebih kecil dari kunci node.<br>
Subtree sebelah kanan dari sebuah node hanya berisi node dengan kunci (key) lebih besar dari kunci node.<br>
Subtree sebelah kiri dan kanan masing-masing juga harus berupa pohon pencarian biner, serta tidak ada kunci yang sama.<br>

![Gambar Binary Tree](https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png)

## Implementasi Binary Search Tree

### Searching
Ilustrasi untuk mencari 6 di pohon atas:
1. Mulai dari akar.
2. Bandingkan elemen pencarian dengan root, jika kurang dari root, maka panggil subtree kiri secara rekursif, jika tidak panggil subtree kanan secara rekursif.
3. Jika elemen yang dicari ditemukan di mana saja, kembalikan true, jika tidak, kembalikan false.


```java
// Function to search a given key in a given BST
static Node search(Node root, int key) {
	// Base Cases: root is null or key is present at root
	if (root == null || root.key == key)
		return root;

	// Key is greater than root's key
	if (root.key < key)
		return search(root.right, key);

	// Key is smaller than root's key
	return search(root.left, key);
}
```

### Insertion

Ilustrasi untuk menyisipkan 2 di bawah pohon:
1. Mulai dari akar.
2. Bandingkan elemen penyisipan dengan root, jika kurang dari root, maka panggil subtree kiri secara rekursif, jika tidak panggil subtree kanan secara rekursif.
3. Setelah mencapai akhir, masukkan saja simpul itu di kiri (jika kurang dari arus) yang lain di kanan.

![Gambar Binary Tree](https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png)


```java
// Java program to demonstrate insertion
// in a BST recursively.
class BST {
    int data;
    BST left, right;

    // Default constructor.
    BST() {
        data = 0;
        left = right = null;
    }

    // Parameterized constructor.
    BST(int value) {
        data = value;
        left = right = null;
    }

    // Insert function.
    BST insert(BST root, int value) {
        if (root == null) {
            // Insert the first node, if root is null.
            return new BST(value);
        }

        // Insert data.
        if (value > root.data) {
            // Insert right node data, if the 'value'
            // to be inserted is greater than 'root' node data.

            // Process right nodes.
            root.right = insert(root.right, value);
        } else {
            // Insert left node data, if the 'value'
            // to be inserted is greater than 'root' node data.

            // Process left nodes.
            root.left = insert(root.left, value);
        }

        // Return 'root' node, after insertion.
        return root;
    }

    // Inorder traversal function.
    // This gives data in sorted order.
    void inorder(BST root) {
        if (root == null) {
            return;
        }
        inorder(root.left);
        System.out.println(root.data);
        inorder(root.right);
    }

    public static void main(String[] args) {
        BST b = new BST();
        BST root = null;
        root = b.insert(root, 50);
        b.insert(root, 30);
        b.insert(root, 20);
        b.insert(root, 40);
        b.insert(root, 70);
        b.insert(root, 60);
        b.insert(root, 80);

        b.inorder(root);
    }
}
```

Output:
```
20
30
40
50
60
70
80
```

### Deletion

Ketika kami menghapus sebuah node, tiga kemungkinan muncul.
1) Node yang akan dihapus adalah daunnya: Cukup hapus dari pohonnya.
```
              50                            50
           /     \         delete(20)      /   \
          30      70       --------->    30     70 
         /  \    /  \                     \    /  \ 
       20   40  60   80                   40  60   80
```
2) Node yang akan dihapus hanya memiliki satu anak: Salin anak ke node dan hapus anak
```
              50                            50
           /     \         delete(30)      /   \
          30      70       --------->    40     70 
            \    /  \                          /  \ 
            40  60   80                       60   80
```
3) Node yang akan dihapus memiliki dua anak: Temukan penerus berurutan dari node tersebut. Salin konten penerus inorder ke node dan hapus penerus inorder. Perhatikan bahwa pendahulunya inorder juga dapat digunakan.
```
              50                            60
           /     \         delete(50)      /   \
          40      70       --------->    40    70 
                 /  \                            \ 
                60   80                           80
```

```java
class BinarySearchTree {
    static class Node {
        int key;
        Node left, right;

        // Constructor
        Node(int item) {
            key = item;
            left = right = null;
        }
    }

    // Utility function to create a new BST node
    static Node newNode(int item) {
        return new Node(item);
    }

    // Utility function to perform inorder traversal of BST
    static void inorder(Node root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.key + " ");
            inorder(root.right);
        }
    }

    // Utility function to insert a new node with given key in BST
    static Node insert(Node node, int key) {
        if (node == null)
            return newNode(key);
        if (key < node.key)
            node.left = insert(node.left, key);
        else if (key > node.key)
            node.right = insert(node.right, key);
        return node;
    }

    // Utility function to find the node with minimum key value in a given BST
    static Node minValueNode(Node node) {
        Node current = node;
        while (current != null && current.left != null)
            current = current.left;
        return current;
    }

    // Utility function to delete the node with given key in BST
    static Node deleteNode(Node root, int key) {
        if (root == null)
            return root;
        if (key < root.key)
            root.left = deleteNode(root.left, key);
        else if (key > root.key)
            root.right = deleteNode(root.right, key);
        else {
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;
            root.key = minValueNode(root.right).key;
            root.right = deleteNode(root.right, root.key);
        }
        return root;
    }

    // Driver code
    public static void main(String[] args) {
	/* Let us create following BST
		    50
		   /  \
		  30   70
		 / \   / \
	    	20 40 60 80 */
        Node root = null;
        root = insert(root, 50);
        root = insert(root, 30);
        root = insert(root, 20);
        root = insert(root, 40);
        root = insert(root, 70);
        root = insert(root, 60);
        root = insert(root, 80);

        System.out.println("Inorder traversal of the given tree:");
        inorder(root);

        System.out.println("\nDelete 20:");
        root = deleteNode(root, 20);
        System.out.println("Inorder traversal of the modified tree:");
        inorder(root);

        System.out.println("\nDelete 30:");
        root = deleteNode(root, 30);
        System.out.println("Inorder traversal of the modified tree:");
        inorder(root);

        System.out.println("\nDelete 50:");
        root = deleteNode(root, 50);
        System.out.println("Inorder traversal of the modified tree:");
        inorder(root);
    }
}

```

Output:
```
Inorder traversal of the given tree 
20 30 40 50 60 70 80
Delete 20
Inorder traversal of the modified tree
30 40 50 60 70 80
Delete 30
Inorder traversal of the modified tree
40 50 60 70 80
Delete 50
Inorder traversal of the modified tree
40 60 70 80
```
