---
sidebar_position: 2
---

# 📌 Minimum Spanning Tree (MST)

**Struktur Data Terkait:** 📦 **Graf**  
**Algoritma Terkait:** 🧠 **Kruskal's Algorithm** & **Prim's Algorithm**

---

## 📚 Konsep Dasar

Minimum Spanning Tree (MST) adalah sebuah **tree** yang mencakup seluruh node dalam graf, di mana total bobot dari semua edge-nya seminimal mungkin 🧮.

> Tree adalah bentuk khusus dari graf yang **tidak mengandung siklus** 🔄

### 🆚 Perbandingan Tree dan Graph

![tree vs graph](https://techdifferences.com/wp-content/uploads/2018/03/Untitled-1.jpg)

> Pada bagian _Graph_, node **D, E, F, G, H** membentuk siklus (loop), maka tidak bisa dikategorikan sebagai **tree**.

---

## 🖼️ Contoh Hasil MST

![contoh MST](/img/mst.png)

---

## 🎯 Studi Kasus

> Seorang kepala desa ingin mengaspal jalan antar desa, tetapi dengan biaya seminimal mungkin.  
> Maka, dicari jalur-jalur penghubung antar desa sehingga **seluruh desa saling terhubung** dengan **panjang jalan total yang paling pendek**.

Solusinya? Gunakan **Minimum Spanning Tree**! 💡

---

## ⚙️ Algoritma Kruskal

### 🔄 Langkah-langkah:

1. 📜 Buat edge list dan urutkan berdasarkan bobot dari terkecil → terbesar
2. 🕵️ Ambil edge dengan bobot terkecil, dan periksa apakah edge tersebut membentuk **siklus** menggunakan **Disjoint Set Union (DSU)**
3. ✅ Jika **tidak membentuk siklus** → masukkan ke MST  
   ❌ Jika **membentuk siklus** → abaikan edge tersebut
4. 🔁 Ulangi hingga jumlah edge dalam MST = **(V - 1)**

📎 [Contoh visualisasi](https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)

---

## ⚙️ Algoritma Prim

### 🔄 Langkah-langkah:

1. 🧩 Bagi node menjadi 2 himpunan:
   - ✅ Node yang sudah masuk ke MST
   - ❌ Node yang belum masuk ke MST
2. 🧮 Gunakan **map** untuk menyimpan nilai bobot MST minimum dari setiap node (default: ∞)
3. 🧭 Gunakan **map** lain untuk menyimpan node **parent** dari masing-masing node
4. 🔁 Selagi masih ada node di luar MST:
   - 🎯 Ambil node dengan bobot MST terkecil dari himpunan non-MST
   - ➕ Masukkan node tersebut ke dalam MST
   - 🔄 Perbarui bobot MST tetangga dari node tersebut (hanya jika bobot edge lebih kecil dari sebelumnya)
   - 📌 Jika bobot diperbarui → update parent-nya

📎 [Contoh visualisasi](https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/)

---

## 🧠 Perbandingan Kruskal vs Prim

| Fitur                   | 🧱 Kruskal               | 🧵 Prim                   |
| ----------------------- | ------------------------ | ------------------------- |
| Struktur yang digunakan | Disjoint Set (DSU) ⚙️    | Priority Queue + Map 🧮   |
| Pilihan awal            | Bebas                    | Mulai dari 1 node awal 🔽 |
| Kompleksitas            | O(E log E)               | O(E log V)                |
| Cocok untuk             | Graf **jarang** (sparse) | Graf **padat** (dense)    |

---

## 📌 Catatan Penting

- MST hanya bisa dibuat jika **graf terhubung** (connected)
- Jumlah edge pada MST selalu = **V - 1**
- MST **tidak unik**, bisa ada lebih dari satu solusi

---

## 🏁 Kesimpulan

✅ Minimum Spanning Tree sangat bermanfaat dalam **optimisasi jaringan** seperti kabel listrik, jalan, jaringan komputer, dll.  
✅ Kruskal dan Prim adalah dua algoritma populer dengan pendekatan berbeda.  
✅ Pilih sesuai kondisi graf dan kebutuhanmu ya! 🚀
