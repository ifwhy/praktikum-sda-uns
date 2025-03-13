---
sidebar_position: 3
---

# 3 - 📌 Konsep Queue

Queue adalah struktur data **FIFO (First-In-First-Out)** yang berarti elemen yang pertama kali dimasukkan akan menjadi elemen pertama yang keluar. Struktur ini mirip dengan antrean di kehidupan nyata, seperti antrean di kasir atau mesin ATM.

## 3.1. Ilustrasi Queue

Bayangkan sebuah antrean di ATM, di mana orang pertama yang datang akan menjadi orang pertama yang dilayani. Berikut ilustrasinya:

<img src="https://miro.medium.com/v2/resize:fit:910/1*1073fPLCqRAIzsL_chFDug.jpeg" alt="Ilustrasi Queue" width="75%"/>

Dalam bahasa **Java**, Queue diimplementasikan menggunakan **interface `Queue`** yang berada dalam package `java.util`. Salah satu implementasi paling umum dari Queue adalah menggunakan **LinkedList**.

## 3.2. Deklarasi Queue di Java

Kita bisa mendeklarasikan Queue menggunakan `LinkedList` seperti berikut:

```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> atmQueue = new LinkedList<>();
    }
}
```

## 3.3. Operasi pada Queue

### 1. Enqueue (Menambahkan Elemen)

Menambahkan elemen ke **bagian belakang antrean** menggunakan `add()` atau `offer()`:

```java
atmQueue.add("John Nash"); // Menambahkan elemen ke queue
atmQueue.offer("Alan Turing"); // Alternatif, tidak lempar exception jika penuh
```

### 2. Peek (Melihat Elemen Terdepan)

Melihat elemen yang berada di **paling depan antrean** tanpa menghapusnya:

```java
String depan = atmQueue.peek();
System.out.println("Orang di depan antrean: " + depan);
```

### 3. Dequeue (Menghapus Elemen Terdepan)

Menghapus elemen yang berada di **paling depan antrean** menggunakan `poll()`:

```java
String served = atmQueue.poll(); // Menghapus dan mengembalikan elemen terdepan
System.out.println("Melayani: " + served);
```

### 4. Mengecek Ukuran Queue

Untuk mengetahui berapa banyak elemen dalam antrean:

```java
System.out.println("Jumlah orang dalam antrean: " + atmQueue.size());
```

### 5. Mengecek Apakah Queue Kosong

Jika antrean kosong, metode `isEmpty()` akan mengembalikan `true`:

```java
if (atmQueue.isEmpty()) {
    System.out.println("Antrean kosong");
} else {
    System.out.println("Masih ada orang dalam antrean");
}
```

## 3.4. Contoh Program Lengkap

```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<String> atmQueue = new LinkedList<>();

        // Menambahkan elemen ke dalam queue
        atmQueue.add("John Nash");
        atmQueue.add("Alan Turing");
        atmQueue.add("Ada Lovelace");

        // Melihat elemen paling depan
        System.out.println("Orang di depan antrean: " + atmQueue.peek());

        // Menghapus elemen terdepan
        System.out.println("Melayani: " + atmQueue.poll());

        // Menampilkan seluruh isi antrean
        System.out.println("Sisa antrean: " + atmQueue);
    }
}
```

## 3.5. Selengkapnya

- [Java Queue (Oracle Docs)](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html)
- [Java Queue (GeeksforGeeks)](https://www.geeksforgeeks.org/queue-interface-java/)
