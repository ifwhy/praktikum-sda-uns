---
id: tugas-4
title: Tugas 4 - Algoritma Sorting
sidebar_position: 4
---

# ✨ Tugas Implementasi Algoritma Sorting dengan Java 🧠

Halo teman-teman pejuang ngoding! 👨‍💻👩‍💻
Kali ini kita akan bermain-main dengan algoritma sorting klasik yang sering jadi andalan dalam dunia struktur data! Tapi… kita kasih twist dikit ya — yang kita urutkan kali ini bukan angka, tapi _String_ alias kata-kata! 🔤✨

---

## 🎯 Tujuan

Mengimplementasikan berbagai algoritma pengurutan untuk mengurutkan _String_ dalam jumlah data yang berbeda-beda. Kamu bisa bayangkan seperti mengurutkan daftar nama teman, daftar kota, atau bahkan daftar makanan favorit kamu 🍜🍕🍩.

---

## 📦 Data yang Harus Disorting:

Data yang harus diurutkan adalah string-string berikut ini:

```java
 ArrayList<String> words = new ArrayList<>(Arrays.asList(
    "apel", "zebra", "kucing", "rumah", "langit",
    "bola", "hujan", "matahari", "gunung", "komputer",
    "robot", "api", "bulan", "internet", "bunga",
    "ikan", "kertas", "lampu", "musik", "pantai"
));
```

## 🔄 Algoritma yang Harus Diimplementasikan

Berikut ini adalah 5 algoritma sorting legendaris yang perlu kamu implementasikan menggunakan Java:

1. **Bubble Sort 🫧**
   Sederhana tapi makan waktu. Cocok buat pemanasan dulu!

2. **Selection Sort 🎯**
   Pilih yang terbaik dari yang tersisa — kayak nyari teman hidup wkwk.

3. **Insertion Sort 🧩**
   Masukin satu-satu ke tempat yang pas. Rapi dan efisien buat data kecil!

4. **Quick Sort ⚡**
   Cepat dan tangkas. Cocok buat kamu yang gak sabaran!

5. **Merge Sort 🧵**
   Bagi dulu, lalu gabung. Cocok buat kamu yang suka kerja terstruktur.

---

## 📸 Bukti Eksperimen

- Lampirkan screenshot hasil runtime dan waktu eksekusi dari setiap algoritma.
- Boleh pakai `System.nanoTime()` atau `System.currentTimeMillis()` untuk mencatat waktu eksekusi ya ⏱️
- Kamu bisa bikin semacam _summary table_ biar hasilnya kece 💼✨

---

## 📝 Format Pengumpulan

Gunakan format berikut saat menyimpan file tugasmu:

- `PSDA06_NIM_NamaLengkap_Sorting.java`
- `PSDA06_NIM_NamaLengkap_Sorting_Report.pdf`

💡 Contoh:
`C_PSDA08_L0522001_AndrianKornelis_Sorting.java`
`C_PSDA08_L0522001_AndrianKornelis_Sorting.pdf`

---

## 🧠 Bonus Tips:

- Pakai `ArrayList<String>` atau `String[]` untuk menyimpan datanya.
- Gunakan `Collections.shuffle()` untuk ngacak data sebelum disorting.
