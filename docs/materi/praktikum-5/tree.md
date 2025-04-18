---
sidebar_position: 1
---

# 📌 Tree (Pohon)

## 📘 Konsep Tree

**Tree** adalah struktur data abstrak yang merepresentasikan sebuah hierarki berbentuk pohon. Tree tersusun atas elemen-elemen yang disebut **node**, di mana:

- Setiap node hanya memiliki **satu parent** (kecuali root node).
- Node bisa memiliki **0 atau lebih anak** (child).
- Terdapat satu node khusus sebagai akar pohon disebut **root** (tidak memiliki parent).

📌 Ilustrasi:
![Tree Illustration](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/421px-Tree_%28computer_science%29.svg.png)

🔍 Contoh nyata: struktur direktori pada sistem operasi—folder utama sebagai root, dan isinya sebagai child nodes.

> 🧠 **Tantangan:** Apa saja jenis-jenis Tree yang memiliki aturan berbeda-beda untuk node-nya?

---

## 🔧 Operasi Dasar pada Tree

Tree memiliki 3 operasi utama:

1. **Insertion** – Menambahkan node.
2. **Deletion** – Menghapus node.
3. **Traversal** – Menjelajahi semua node (preorder/postorder).

---

## 🔨 Implementasi Tree di Java

### 📦 Struktur Node

```java
import java.util.ArrayList;
import java.util.List;

class Node {
    int m_data;
    List<Node> m_children;

    // Constructor
    Node(int data) {
        m_data = data;
        m_children = new ArrayList<>();
    }

    // Insertion
    void insert(Node node) {
        m_children.add(node);
    }

    // Deletion by index
    boolean deleteNodeIndex(int index) {
        if (m_children.isEmpty() || index >= m_children.size()) return false;
        m_children.remove(index);
        return true;
    }

    // Preorder Traversal
    void _preOrder(int depth) {
        for (int i = 0; i < depth; i++) System.out.print("--");
        System.out.println("> " + m_data);
        for (Node child : m_children) child._preOrder(depth + 1);
    }

    void preOrder() {
        System.out.println("Preorder Traversal: ");
        _preOrder(0);
    }

    // Postorder Traversal
    void _postOrder(int depth) {
        for (Node child : m_children) child._postOrder(depth + 1);
        for (int i = 0; i < depth; i++) System.out.print("--");
        System.out.println("> " + m_data);
    }

    void postOrder() {
        System.out.println("Postorder Traversal: ");
        _postOrder(0);
    }
}
```

---

## 👨‍💻 Contoh Penggunaan

### 1. Inisialisasi Node

```java
Node root = new Node(2);
Node child_0 = new Node(7);
Node child_1 = new Node(5);
Node child_2 = new Node(2);
Node child_3 = new Node(10);
Node child_4 = new Node(6);
Node child_5 = new Node(9);
```

### 2. Insertion (dari bawah ke atas)

```java
child_0.insert(child_2);
child_0.insert(child_3);
child_0.insert(child_4);
child_1.insert(child_5);
root.insert(child_0);
root.insert(child_1);
```

:::info[**Mengapa kita insert dari bawah?** ]
Karena child harus sudah ada sebelum kita masukkan ke parent-nya. Kalau langsung insert ke root dulu, maka strukturnya belum lengkap (child-nya belum siap).
:::

---

### 3. Traversal

```java
root.preOrder();
root.postOrder();
```

**Output:**

```
Preorder Traversal:
> 2
--> 7
----> 2
----> 10
----> 6
--> 5
----> 9

Postorder Traversal:
----> 2
----> 10
----> 6
--> 7
----> 9
--> 5
> 2
```

---

## 📚 Ringkasan

| Operasi   | Fungsi                                   |
| --------- | ---------------------------------------- |
| Insertion | Menambahkan child ke node tertentu       |
| Deletion  | Menghapus child dari node (dengan index) |
| Preorder  | Proses node → anak-anaknya               |
| Postorder | Proses anak-anak → node                  |

---

## 🎯 Studi Lanjutan

Beberapa jenis struktur Tree lainnya:

- **Binary Tree**: Setiap node maksimal punya 2 child.
- **Binary Search Tree (BST)**: Binary tree dengan aturan left < root < right.
- **AVL Tree**: Binary Tree dengan kondisi keseimbangan.
- **N-ary Tree**: Setiap node bisa punya lebih dari 2 child (seperti contoh kita).
- **Trie**: Tree khusus untuk menyimpan string atau kata.

---

> 🔍 _Tree bukan sekadar struktur data — tree mencerminkan bagaimana kita mengelola kompleksitas menjadi hirarki yang tertata rapi._
