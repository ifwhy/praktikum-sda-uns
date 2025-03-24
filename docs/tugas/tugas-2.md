---
id: tugas-2
title: Tugas 2 - Rekursi dan Analisis Kompleksitas Algoritma
sidebar_position: 2
---

# 🏰 Implementasi Tower of Hanoi dengan Rekursi

> **Tantangan Klasik dalam Pemrograman Rekursif!**  
> Implementasikan algoritma Tower of Hanoi dan ukur waktu eksekusinya. 📊⏳

📌 **Deskripsi**  
Tower of Hanoi adalah teka-teki rekursif di mana $n$ cakram harus dipindahkan dari **tiang awal** ke **tiang tujuan** dengan bantuan **tiang bantu**, mengikuti aturan:

1️⃣ Hanya satu cakram bisa dipindahkan dalam satu waktu.  
2️⃣ Cakram yang lebih besar tidak boleh berada di atas yang lebih kecil.  
3️⃣ Tiang bantu digunakan untuk memindahkan cakram dengan strategi yang benar.

🔗 **Referensi Video:** [Tower of Hanoi - Visualisasi](https://www.youtube.com/watch?v=q6RicK1FCUs)

---

## 🎯 **Tugas**

### 1️⃣ **Implementasi Algoritma Rekursif**

Buat fungsi **rekursif** `hanoi(n, from, to, aux)` yang:

✅ Memindahkan **n cakram** dari **tiang sumber (from)** ke **tiang tujuan (to)** dengan bantuan **tiang bantu (aux)**.  
✅ Mencetak setiap langkah perpindahan cakram.  
✅ Menghitung **jumlah total langkah** yang dilakukan.  
✅ Jalankan program untuk $n = 3, 4, 5, 7$.

📌 **Contoh Panggilan:**

```cpp
hanoi(3, 'A', 'C', 'B');
```

---

### 2️⃣ **Analisis Kompleksitas Rekursi**

🔬 Analisis **jumlah langkah dan waktu eksekusi** berdasarkan nilai $n$.

---

### 3️⃣ **Perbandingan Jumlah Langkah**

Buat tabel perbandingan hasil eksekusi dengan **rumus rekursif** Tower of Hanoi:

| 🎯 **$n$ (Jumlah Cakram)** | 📐 **Perhitungan Langkah $(2ⁿ - 1)$** | ⚡ **Langkah Nyata (Program)** |
| -------------------------- | ------------------------------------- | ------------------------------ |
| 1                          | 1                                     | ?                              |
| 2                          | 3                                     | ?                              |
| 3                          | 7                                     | ?                              |
| 4                          | 15                                    | ?                              |
| 5                          | 31                                    | ?                              |
| 10                         | 1.023                                 | ?                              |
| 20                         | 1.048.575                             | ?                              |

---

### 4️⃣ **Pengukuran Waktu Eksekusi**

⏳ **Gunakan `System.nanoTime()`** untuk mengukur waktu eksekusi program untuk:

✅ $n = 5, 15, 25, 35$ \
✅ Analisis apakah hasil nyata mengikuti kompleksitas teori.

---

### 5️⃣ **Diskusi**

💡 **Mengapa Tower of Hanoi sangat lambat untuk $n$ besar?**  
Berikan analisis berdasarkan hasil pengujian.

---

📢 **Ayo tantang logikamu dan selesaikan Tower of Hanoi dengan rekursi! 🚀**
