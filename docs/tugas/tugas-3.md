---
id: tugas-3
title: Tugas 3 - Set dan Map
sidebar_position: 3
---

# 🧠 Tugas Praktikum SDA - Set dan Map! 🎯

Halo, Praktikan Hebat! 👋  
Minggu ini kalian akan menguji logika dan kreativitas kalian dengan dua tantangan seru dari dunia `Set` dan `Map` di Java! Siapkan laptop, kopi, dan semangat ngoding kalian! ☕💻

---

## 📌 NOMOR 1 – **SET: Mendeteksi Kata Aneh**

### 💡 Deskripsi:

Kata disebut **"aneh"** jika memenuhi dua syarat:

1. ✅ **Semua huruf unik** (tidak ada huruf yang berulang),
2. 🆕 **Belum pernah muncul sebelumnya** (tidak duplikat).

### 💻 Koding

```java
import java.util.*;

public class Nomor1_Set {
    public static void main(String[] args) {
        String[] kata = {
            "halo", "dunia", "haha", "halo", "abcd", "abcde", "abcc", "abcde"
        };

        // Buat dua set, satu untuk melacak kata yang pernah muncul,
        // dan satu untuk huruf dalam kata
        for (String k : kata) {
            // Cek apakah kata sudah pernah muncul

            // Cek apakah semua huruf dalam kata unik
        }

        System.out.println("Jumlah kata aneh: " + jumlah);
    }
}


```

### 🧪 Contoh Input:

```java
["halo", "dunia", "haha", "abcd", "abcde"]
```

### 🎯 Output:

```
Jumlah kata aneh: 4
```

### 🛠 Hint:

- Gunakan `Set<String>` untuk menyimpan kata-kata yang sudah diproses.
- Gunakan `Set<Character>` untuk memeriksa apakah huruf-huruf dalam kata unik.
- Case-sensitive ya! `"Halo"` ≠ `"halo"`.

---

## 📌 NOMOR 2 – **MAP: Simulasi E-Commerce 🛒**

### 💡 Deskripsi:

Kalian akan membuat simulasi e-commerce sederhana dengan ketentuan sebagai berikut:

### 📦 Produk:

Setiap produk memiliki:

- 🔢 Kode
- 📝 Nama
- 📦 Stok
- 💰 Harga

### 👤 Anda sebagai pelanggan:

- Punya **saldo awal** (misal: Rp$500.000$).
- Bisa **memilih produk** berdasarkan `kode`.
- Menginput **jumlah** produk yang akan dibeli.
- Stok produk akan **berkurang** dan saldo Anda **berkurang** sesuai total harga pembelian.

### 🛠 Tools Wajib:

Gunakan `Map<String, Produk>` sebagai database produk.

### 🧠 Tantangan Tambahan (Opsional tapi Keren! 😎):

- Tampilkan total belanja dan sisa saldo setelah transaksi.
- Beri notifikasi jika stok tidak mencukupi atau saldo tidak cukup.
- Tambahkan menu interaktif via `Scanner`.

---

## 🧪 Format Pengumpulan:

- Mengikuti _template_ laporan berikut ini: [Laporan Praktikum Set dan Map](https://docs.google.com/document/d/1OP2BkragE2jLtVU-UL1xUe75q9na6lAF5eMlCrskhbo/edit?usp=sharing)
- Laporan: `PSDA03_NIM_NamaLengkap.pdf`
- File:
  - `Nomor1_Set.java`
  - `Nomor2_Map.java`
- Jangan lupa berikan komentar berisi nama dan NIM di file java

---

## 🏁 Semangat Praktikan!

Jangan takut salah, karena dari salah kita belajar 💪  
Good luck and happy coding! 🚀✨
