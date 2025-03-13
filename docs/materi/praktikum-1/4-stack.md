---
sidebar_position: 4
---

# 4 - 📌 Konsep Stack

Stack adalah struktur data **LIFO (Last-In, First-Out)**, yang berarti elemen yang terakhir dimasukkan adalah elemen pertama yang akan keluar. Konsep ini mirip dengan tumpukan buku—buku yang terakhir diletakkan di atas adalah yang pertama kali diambil.

### Ilustrasi Stack

<img src="https://visualgo.net/img/stack_illustration.png" alt="Ilustrasi Stack" width="75%"/>

Dalam bahasa **Java**, stack dapat digunakan melalui kelas `Stack` yang terdapat dalam package `java.util`. Stack diimplementasikan menggunakan **Linked List** atau **ArrayList** sebagai penyimpanan elemen-elemen di dalamnya.

---

## 2.1. Deklarasi Stack

Untuk menggunakan `Stack` di Java, deklarasikan objek stack dengan tipe data yang diinginkan. Contoh berikut menunjukkan deklarasi stack yang menyimpan elemen bertipe `Integer`:

```java
import java.util.Stack;

Stack<Integer> usia = new Stack<>();
```

---

## 2.2. Operasi Dasar pada Stack

### 1. **Push** (Menambahkan Elemen)

Metode `push()` digunakan untuk menambahkan elemen ke bagian atas stack.

```java
Stack<String> books = new Stack<>();
books.push("HTML for Babies");
books.push("Java for Beginners");
```

Setelah operasi di atas, stack akan berisi:

```
Top -> [Java for Beginners, HTML for Babies]
```

### 2. **Peek** (Melihat Elemen Teratas)

Metode `peek()` digunakan untuk melihat elemen di bagian atas stack tanpa menghapusnya.

```java
String topBook = books.peek();
System.out.println("Buku teratas: " + topBook);
```

Hasil:

```
Buku teratas: Java for Beginners
```

### 3. **Pop** (Menghapus Elemen Teratas)

Metode `pop()` menghapus dan mengembalikan elemen teratas dari stack.

```java
String removedBook = books.pop();
System.out.println("Buku yang diambil: " + removedBook);
```

Hasil:

```
Buku yang diambil: Java for Beginners
```

Sekarang, stack hanya berisi:

```
Top -> [HTML for Babies]
```

### 4. **Cek Apakah Stack Kosong**

Metode `isEmpty()` digunakan untuk memeriksa apakah stack kosong atau tidak.

```java
if (books.isEmpty()) {
    System.out.println("Stack kosong");
} else {
    System.out.println("Stack masih berisi elemen");
}
```

---

## 2.3. Implementasi Lengkap

Berikut contoh program lengkap menggunakan Stack di Java:

```java
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> books = new Stack<>();

        // Menambahkan elemen ke stack
        books.push("HTML for Babies");
        books.push("Java for Beginners");
        books.push("Data Structures in Java");

        // Melihat elemen teratas
        System.out.println("Buku teratas: " + books.peek());

        // Menghapus elemen teratas
        System.out.println("Mengambil buku: " + books.pop());

        // Menampilkan isi stack setelah pop
        System.out.println("Isi stack saat ini: " + books);
    }
}
```

---

## 📒 Selengkapnya

- 🔗 [Java Stack Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html)
