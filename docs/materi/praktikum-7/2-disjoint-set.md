---
sidebar_position: 2
---

# 📌 Disjoint Set

## 📖 Konsep Disjoint Set

Disjoint Set adalah struktur data yang memungkinkan pengelompokan data berdasarkan kesamaan. Salah satu contoh penerapan sederhana dari struktur data ini adalah jejaring pertemanan di media sosial. 👫

### 🌐 Ilustrasi

- 👦 **Azfa** berteman dengan **Hammam**.
- 👦 **Hammam** berteman dengan **Caca**.
- 👦 **Ihsan** berteman dengan **Hanan**.

Hasilnya:

- **Caca** berada dalam satu jaringan pertemanan dengan **Azfa** (melalui **Hammam**).
- **Caca** tidak berada dalam satu jaringan pertemanan dengan **Hanan** (karena jaringan **Hanan** hanya dengan **Ihsan**).

---

## 🛠️ Implementasi Disjoint Set

Disjoint Set dapat diimplementasikan menggunakan **array** atau **map** yang memetakan setiap data ke perwakilan (representative) dari kelompoknya.

### ✍️ Contoh Definisi Struktur Data

```java
Map<String, String> perwakilan = new HashMap<>();

// Awalnya, setiap orang diwakili oleh dirinya sendiri,
// sehingga Azfa berada dalam kelompok yang terpisah, begitu juga Hammam, dan seterusnya
perwakilan.put("Azfa", "Azfa");
perwakilan.put("Hammam", "Hammam");
perwakilan.put("Caca", "Caca");
perwakilan.put("Ihsan", "Ihsan");
perwakilan.put("Hanan", "Hanan");
```

---

### 🔍 Operasi Utama

#### 1️⃣ **Find**

Operasi ini digunakan untuk mencari perwakilan (representative) dari suatu elemen.

```java
String find(String X) {
    if (perwakilan.get(X).equals(X)) {
        return X;
    }
    return find(perwakilan.get(X));
}
```

#### 2️⃣ **Union**

Operasi ini digunakan untuk menggabungkan dua kelompok menjadi satu.

```java
void merge(String A, String B) {
    String perwakilanA = find(A);
    String perwakilanB = find(B);
    perwakilan.put(perwakilanA, perwakilanB);
}
```

---

### 🧪 Contoh Penggunaan

#### 🔗 Menjalin Pertemanan

```java
merge("Azfa", "Hammam");
merge("Hammam", "Caca");
merge("Ihsan", "Hanan");
```

#### ❓ Memeriksa Jaringan Pertemanan

```java
if (find("Azfa").equals(find("Ihsan"))) {
    System.out.println("Azfa dan Ihsan berada dalam satu jaringan yang sama");
} else {
    System.out.println("Azfa dan Ihsan berada dalam jaringan yang berbeda");
}
```

---

## 📊 Analisis dan Optimasi

### ⚡ Teknik Optimasi

1. **Weighted Union**  
   Menggabungkan dua kelompok berdasarkan bobot (size atau rank) untuk mengurangi tinggi pohon.
2. **Path Compression**  
   Memperpendek jalur pencarian saat melakukan operasi `find` dengan langsung menunjuk ke perwakilan.

---

## 📚 Selengkapnya

Untuk informasi lebih lanjut, kunjungi:

- [Disjoint Set Data Structure (GeeksforGeeks)](https://www.geeksforgeeks.org/disjoint-set-data-structures/)
- [Union-Find (CP Algorithms)](https://cp-algorithms.com/data_structures/disjoint_set_union.html)
- [Disjoint Set Union - Union Find (AlgoExpert)](https://www.algoexpert.io/data-structures/disjoint-set-union)
