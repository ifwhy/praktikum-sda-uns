# 1 - Binary Tree

## Konsep Binary Tree
Tree merupakan struktur data yang biasanya tidak kontinu, dimana sebuah node bisa memiliki beberapa "anak" (child node), dan berbeda dengan Graph, jalan menuju sebuah child node hanya bisa dicapai melalui maksimal 1 node, dimana pada Graph, dimungkinkan bahwa 1 node bisa dicapai dari banyak node lainnya. Sebuah node yang tidak memiliki child node sama sekali dinamakan leaf node.

Jenis Tree yang paling umum digunakan adalah Binary Tree, yang sebenarnya memiliki konsep yang sama dengan Tree pada umumnya. Namun bedanya, Binary Tree memiliki jumlah maksimal 2 child, yang secara spesifik dapat disebut left child dan right child.  
  
![Gambar Binary Tree](https://www.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png)

## Implementasi Binary Tree

Sebuah node Binary Tree berisi bagian-bagian berikut.

```java
public class Main {

    static class Node {
        int data;
        Node left, right;

        // Val is the key or the value that
        // has to be added to the data part
        Node(int val) {
            data = val;

            // Left and right child for node
            // will be initialized to null
            left = null;
            right = null;
        }
    }

    public static void main(String[] args) {

        /*create root*/
        Node root = new Node(1);
        /* following is the tree after above statement

            1
           / \
        NULL NULL
        */

        root.left = new Node(2);
        root.right = new Node(3);
        /* 2 and 3 become left and right children of 1
                     1
                    / \
                 2     3
                / \   / \
            NULL NULL NULL NULL
        */

        root.left.left = new Node(4);
        /* 4 becomes left child of 2
                 1
                / \
               2   3
              / \  / \
             4 NULL NULL NULL
            / \
           NULL NULL
        */
    }
}
```

### Insertion
Idenya adalah untuk melakukan traversal urutan level iteratif dari pohon yang diberikan menggunakan queue. Jika kita menemukan sebuah node yang anak kirinya kosong, kita membuat kunci baru sebagai anak kiri dari node tersebut. Lain jika kita menemukan node yang anak kanannya kosong, kita membuat kunci baru sebagai anak kanan. terus sampai kita menemukan simpul yang anak kiri atau kanannya kosong.  

![Gambar Binary Tree](https://media.geeksforgeeks.org/wp-content/uploads/binary-tree-insertion.png)

```java
import java.util.LinkedList;
import java.util.Queue;

// Java program to insert element in Binary Tree
public class Main {

    /* A binary tree node has data, pointer to left child
    and a pointer to right child */
    static class Node {
        int data;
        Node left;
        Node right;
    }

    /* Function to create a new node */
    static Node CreateNode(int data) {
        Node newNode = new Node();
        if (newNode == null) {
            System.out.println("Memory error");
            return null;
        }
        newNode.data = data;
        newNode.left = null;
        newNode.right = null;
        return newNode;
    }

    /* Function to insert element in binary tree */
    static Node InsertNode(Node root, int data) {
        // If the tree is empty, assign new node address to root
        if (root == null) {
            root = CreateNode(data);
            return root;
        }

        // Else, do level order traversal until we find an empty
        // place, i.e. either left child or right child of some
        // node is pointing to NULL.
        Queue<Node> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            Node temp = q.poll();

            if (temp.left != null)
                q.add(temp.left);
            else {
                temp.left = CreateNode(data);
                return root;
            }

            if (temp.right != null)
                q.add(temp.right);
            else {
                temp.right = CreateNode(data);
                return root;
            }
        }
        return root;
    }

    /* Inorder traversal of a binary tree */
    static void inorder(Node temp) {
        if (temp == null)
            return;

        inorder(temp.left);
        System.out.print(temp.data + " ");
        inorder(temp.right);
    }

    // Driver code
    public static void main(String[] args) {
        Node root = CreateNode(10);
        root.left = CreateNode(11);
        root.left.left = CreateNode(7);
        root.right = CreateNode(9);
        root.right.left = CreateNode(15);
        root.right.right = CreateNode(8);

        System.out.print("Inorder traversal before insertion: ");
        inorder(root);
        System.out.println();

        int key = 12;
        root = InsertNode(root, key);

        System.out.print("Inorder traversal after insertion: ");
        inorder(root);
        System.out.println();
    }
}
```

Output:
```
Inorder traversal before insertion: 7 11 10 15 9 8 
Inorder traversal after insertion: 7 11 12 10 15 9 8 
```

### Deletion

Algoritma
1. Mulai dari root, temukan node paling dalam dan paling kanan di binary tree dan node yang ingin kita hapus.
2. Ganti data node paling kanan paling dalam dengan node yang akan dihapus.
3. Kemudian hapus node paling kanan paling dalam.  

![Gambar Binary Tree](https://media.geeksforgeeks.org/wp-content/uploads/deletion-in-binary-tree.png)


```java
import java.util.LinkedList;
import java.util.Queue;

// Java program to delete element in binary tree
public class Main {

    /* A binary tree node has key, pointer to left
    child and a pointer to right child */
    static class Node {
        int key;
        Node left, right;
    }

    /* function to create a new node of tree and
    return pointer */
    static Node newNode(int key) {
        Node temp = new Node();
        temp.key = key;
        temp.left = temp.right = null;
        return temp;
    }

    /* Inorder traversal of a binary tree*/
    static void inorder(Node temp) {
        if (temp == null)
            return;
        inorder(temp.left);
        System.out.print(temp.key + " ");
        inorder(temp.right);
    }

    /* function to delete the given deepest node
    (d_node) in binary tree */
    static void deletDeepest(Node root, Node d_node) {
        Queue<Node> q = new LinkedList<>();
        q.add(root);

        // Do level order traversal until last node
        Node temp = null;
        while (!q.isEmpty()) {
            temp = q.poll();
            if (temp == d_node) {
                temp = null;
                return;
            }
            if (temp.right != null) {
                if (temp.right == d_node) {
                    temp.right = null;
                    return;
                } else
                    q.add(temp.right);
            }

            if (temp.left != null) {
                if (temp.left == d_node) {
                    temp.left = null;
                    return;
                } else
                    q.add(temp.left);
            }
        }
    }

    /* function to delete element in binary tree */
    static Node deletion(Node root, int key) {
        if (root == null)
            return null;

        if (root.left == null && root.right == null) {
            if (root.key == key)
                return null;
            else
                return root;
        }

        Queue<Node> q = new LinkedList<>();
        q.add(root);

        Node temp = null;
        Node key_node = null;

        // Do level order traversal to find deepest
        // node(temp) and node to be deleted (key_node)
        while (!q.isEmpty()) {
            temp = q.poll();

            if (temp.key == key)
                key_node = temp;

            if (temp.left != null)
                q.add(temp.left);

            if (temp.right != null)
                q.add(temp.right);
        }

        if (key_node != null) {
            int x = temp.key;
            deletDeepest(root, temp);
            key_node.key = x;
        }
        return root;
    }

    // Driver code
    public static void main(String[] args) {
        Node root = newNode(10);
        root.left = newNode(11);
        root.left.left = newNode(7);
        root.left.right = newNode(12);
        root.right = newNode(9);
        root.right.left = newNode(15);
        root.right.right = newNode(8);

        System.out.print("Inorder traversal before deletion : ");
        inorder(root);
        System.out.println();

        int key = 11;
        root = deletion(root, key);

        System.out.print("Inorder traversal after deletion : ");
        inorder(root);
    }
}

```

Output:
```
Inorder traversal before deletion : 7 11 12 10 15 9 8 
Inorder traversal after deletion : 7 8 12 10 15 9 
```
