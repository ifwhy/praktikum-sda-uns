---
sidebar_position: 1
---

# 1 - 📌 Konsep Array

Array adalah struktur data yang menyimpan sekumpulan elemen dalam satu blok memori dengan ukuran tetap. Elemen dalam array dapat diakses menggunakan indeks.

## 🚀 1.1. Deklarasi & Penggunaan Array

### 📌 Deklarasi

```java
int[] numbers = new int[5]; // Array dengan 5 elemen
int[] values = {1, 2, 3, 4, 5}; // Array dengan elemen langsung
```

### ⚡ Operasi Dasar

- **Menambahkan & Mengubah Elemen**:

  ```java
  numbers[0] = 10; // Menambahkan elemen di indeks ke-0
  numbers[1] = 20; // Mengubah elemen di indeks ke-1
  ```

- **Menghapus Elemen**:

  ```java
  numbers[2] = 0; // Tidak bisa benar-benar menghapus, hanya mengatur ulang nilai
  ```

- **Mengakses Elemen**:

  ```java
  int angka = numbers[1]; // Ambil elemen indeks ke-1
  ```

- **Iterasi Array**:

  ```java
  for (int i = 0; i < numbers.length; i++) {
      System.out.println("Index " + i + ": " + numbers[i]);
  }

  int i = 0;
  for(int number : numbers){
      System.out.println("Index " + i + ": " + number);
      i++;
  }
  ```

---

## 📝 1.2 Kelebihan & Kekurangan Array

| Aspek              | Kelebihan                                          | Kekurangan                                                 |
| ------------------ | -------------------------------------------------- | ---------------------------------------------------------- |
| **Akses Elemen**   | Cepat ($O(1)$) karena menggunakan indeks           | Tidak fleksibel dalam perubahan ukuran                     |
| **Penambahan**     | Cepat jika di akhir (dengan indeks kosong)         | Lambat ($O(n)$) jika di tengah atau awal karena pergeseran |
| **Penghapusan**    | Bisa dilakukan dengan mudah jika di akhir ($O(1)$) | Lambat ($O(n)$) jika di tengah atau awal                   |
| **Memori**         | Efisien jika ukuran tetap dan diketahui sebelumnya | Pemborosan memori jika ukuran terlalu besar                |
| **Kecepatan Umum** | Sangat cepat untuk akses sekuensial atau acak      | Tidak efisien untuk operasi insert/delete dinamis          |

---

## 📌 1.2. Mengapa Ada Struktur Data Lain Seperti List, Queue, Stack?

Array adalah struktur data yang efisien untuk akses cepat dengan indeks tetap, tetapi memiliki keterbatasan. Oleh karena itu, beberapa struktur data lain dikembangkan:

1. **List (ArrayList, LinkedList)** → Untuk koleksi yang bisa bertambah dan berkurang ukurannya dengan mudah.
2. **Stack** → Untuk operasi LIFO (Last In First Out), seperti undo-redo atau pemrosesan rekursi.
3. **Queue (dan Deque)** → Untuk operasi FIFO (First In First Out), seperti antrian proses atau buffering.
4. **HashMap & HashSet** → Untuk penyimpanan yang membutuhkan pencarian cepat berdasarkan kunci.

**Kesimpulan**: Array bagus untuk akses cepat, tetapi kurang fleksibel dalam ukuran dan operasi CRUD. Oleh karena itu, struktur data lain dikembangkan untuk mengatasi kekurangan ini.

---

## 🔍 Selengkapnya

- 🔗 [Java Arrays](https://www.geeksforgeeks.org/arrays-in-java/)
- 🔗 [Array vs List](https://www.geeksforgeeks.org/array-vs-arraylist-in-java/)
- 🔗 [Data Structures Overview](https://www.geeksforgeeks.org/data-structures/)
