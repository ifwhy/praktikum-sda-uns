---
id: tugas-1
title: Tugas 1 - List, Stack, Queue
sidebar_position: 1
---

# 📝 Tugas Praktikum: List, Stack, & Queue

## 🎯 **Petunjuk Umum**

1. **Gunakan bahasa Java** untuk mengerjakan semua soal.
2. **Format penamaan file** saat dikumpulkan di Google Classroom (tanpa di-zip):

   ```
   PSDA_IFPSDKU_01_NIM_NamaLengkap_NomorSoal.java
   ```

   Contoh untuk nomor 1:

   ```
   PSDA_IFPSDKU_01_L0324000_Fulan_1.java
   ```

---

## 🚀 **No. 1 - List (Bobot: 40%)**

Bayangkan kamu punya daftar buah-buahan yang disusun dalam list:

```
[Rambutan, Jambu, Jeruk, Melon, Semangka, Durian]
```

### 🎯 **Misi**

1. **Bagi list menjadi 2 bagian:**
   - `list1`: **Rambutan, Jambu, Jeruk**
   - `list2`: **Melon, Semangka, Durian**
2. **Hapus** `Jambu` dari `list1` dan `Durian` dari `list2`.
3. **Cetak hasil akhir dari kedua list tersebut!**

### 🖥 **Contoh Output**

```
Seluruh List:
Rambutan
Jambu
Jeruk
Melon
Semangka
Durian

List 1:
Rambutan
Jeruk

List 2:
Melon
Semangka
```

Kamu bebas menggunakan **ArrayList** atau **LinkedList**.

---

## 📚 **No. 2 - Stack (Bobot: 30%)**

Ronald punya tumpukan buku yang tersusun sebagai berikut:

```
1. Implementation of Linear Algebra
2. Data Structure and Algorithm 2nd Edition
3. Linear Algebra and Its Applications
4. Introduction to OpenCV Library (Python)
5. Introduction to Machine Learning
6. Data Structure and Algorithm 1st Edition
7. Machine Learning
8. Database Management System (Expert Edition)
9. Database Management System (Beginner Edition)
```

Ronald ingin **mengurutkan ulang** tumpukan dan **menjual buku "Introduction to OpenCV Library (Python)"**, sehingga daftar barunya menjadi:

```
1. Linear Algebra and Its Applications
2. Implementation of Linear Algebra
3. Introduction to Machine Learning
4. Machine Learning
5. Data Structure and Algorithm 1st Edition
6. Data Structure and Algorithm 2nd Edition
7. Database Management System (Beginner Edition)
8. Database Management System (Expert Edition)
```

### 🎯 **Tantangan**

1. **Gunakan stack** untuk mensimulasikan proses ini!
2. **Pop stack, pindahkan ke ArrayList, urutkan ulang, lalu push kembali ke stack!**
3. **Jangan buat ulang stack baru!**

---

## 🖥 **No. 3 - Queue & Stack (Bobot: 30%)**

Komputer Pak Dengklek hanya mengenali 4 perintah sederhana:

| Perintah | Fungsi                            |
| -------- | --------------------------------- |
| `PUSH 0` | Menambahkan angka 0 ke atas stack |
| `PUSH 1` | Menambahkan angka 1 ke atas stack |
| `TOP`    | Menampilkan angka teratas stack   |
| `POP`    | Menghapus angka teratas stack     |

Pak Dengklek menerima daftar perintah berikut:

```
PUSH 0
PUSH 0
TOP
PUSH 1
TOP
POP
POP
TOP
```

Dari perintah ini, komputer akan menampilkan output:

```
010
```

### 🎯 **Misi**

1. **Gunakan queue** untuk menyimpan perintah sebelum dieksekusi.
2. **Gunakan stack** untuk menjalankan perintah sesuai urutan di queue.
3. **Outputkan hasil eksekusi sesuai dengan perintah TOP.**

Kamu bebas memasukkan perintah langsung di dalam kode atau meminta user menginputnya.

---

## 🎉 **Selesaikan dan Tunjukkan Kehebatanmu!**

Latihan ini dirancang agar kamu lebih paham tentang **List, Stack, dan Queue** dalam Java. Selain itu, kamu akan belajar bagaimana memodelkan masalah dunia nyata ke dalam kode. **Semangat mengoding! 🚀**
