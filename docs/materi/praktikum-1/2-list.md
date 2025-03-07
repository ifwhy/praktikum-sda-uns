---
sidebar_position: 2
---

# 2 - 📌 Konsep List

List adalah struktur data yang digunakan untuk menyimpan banyak elemen dalam satu tempat. Implementasi umumnya terdiri dari **ArrayList** dan **LinkedList**.

## 📝 1. ArrayList vs LinkedList

| Fitur                        | ArrayList                                                                         | LinkedList                                         |
| ---------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Akses Elemen**             | Cepat ($O(1)$), karena berbasis array                                             | Lambat ($O(n)$), harus traversing node             |
| **Penambahan & Penghapusan** | Lambat ($O(n)$), perlu geser elemen, kompleksitas $O(1)$ jika penambahan di akhir | Cepat ($O(1)$ di awal/akhir, $O(n)$ di tengah)     |
| **Memori**                   | Menggunakan lebih banyak memori                                                   | Lebih efisien karena hanya alokasi yang dibutuhkan |

---

## 🚀 1.1. ArrayList

### 📌 Deklarasi

```java
List<Integer> numbers = new ArrayList<>();
```

### ⚡ Operasi Dasar

- **Menambahkan Elemen**:

  ```java
  numbers.add(42); // Menambahkan di akhir
  numbers.add(1, 99); // Menambahkan di indeks ke-1
  ```

- **Menghapus Elemen**:

  ```java
  numbers.remove(1); // Hapus indeks ke-1
  numbers.remove(Integer.valueOf(42)); // Hapus elemen bernilai 42
  ```

- **Mengakses Elemen**:

  ```java
  int angka = numbers.get(0); // Ambil elemen pertama
  ```

- **Iterasi List**:
  ```java
  for (int i = 0; i < numbers.size(); i++) {
      System.out.println("Index " + i + ": " + numbers.get(i));
  }
  ```

---

## 🔗 1.2. LinkedList

### 📌 Deklarasi

```java
List<String> names = new LinkedList<>();
```

### ⚡ Operasi Dasar

- **Menambahkan Elemen**:

  ```java
  names.add("Alice"); // Menambahkan di akhir
  ((LinkedList<String>) names).addFirst("Bob"); // Menambahkan di awal
  ```

- **Menghapus Elemen**:

  ```java
  ((LinkedList<String>) names).removeFirst(); // Hapus elemen pertama
  names.remove(1); // Hapus indeks ke-1
  ```

- **Mengakses Elemen**:

  ```java
  String name = names.get(1); // Ambil elemen di indeks ke-1
  ```

- **Iterasi List**:
  ```java
  for (String name : names) {
      System.out.println(name);
  }
  ```

---

## 🔍 Selengkapnya:

- 🔗 [Java ArrayList](https://www.geeksforgeeks.org/arraylist-in-java/)
- 🔗 [Java LinkedList](https://www.geeksforgeeks.org/linked-list-in-java/)
- 🔗 [Java Iterator](https://www.geeksforgeeks.org/iterators-in-java/)
