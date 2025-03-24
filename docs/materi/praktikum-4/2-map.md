---
sidebar_position: 2
---

# 📌 Map

## 🔍 **Konsep Map**

**Map** (atau **pemetaan**) adalah struktur data yang digunakan untuk menyimpan pasangan **key-value** (_kunci-nilai_), di mana setiap **key** bersifat unik dan digunakan untuk mengakses nilai yang terkait dengannya.

📌 **Mengapa Menggunakan Map?**  
✅ Memudahkan pencarian berdasarkan **key**.  
✅ Menggantikan indeks numerik pada array dengan indeks berbasis **string atau tipe data lain**.  
✅ Umumnya diimplementasikan menggunakan **HashMap**, **TreeMap**, atau **LinkedHashMap**.

🚀 **Kompleksitas Operasi:**

- `HashMap` → $O(1)$ untuk operasi utama (pencarian, penambahan, penghapusan) dalam kasus rata-rata.
- `TreeMap` → $O(log \, N)$ karena menggunakan struktur **binary search tree (BST)**.
- `LinkedHashMap` → Seperti `HashMap`, tetapi mempertahankan urutan penyisipan elemen.

Dalam Java, struktur data `Map` tersedia dalam paket `java.util`.

---

## ✨ **Deklarasi Map di Java**

Untuk mendeklarasikan `Map` dalam Java, kita bisa menggunakan `HashMap`, `TreeMap`, atau `LinkedHashMap`.  
Contoh:

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Deklarasi Map yang memetakan String ke String
        Map<String, String> dataMhs = new HashMap<>();
    }
}
```

📌 **Penjelasan:**

- `HashMap<String, String>` digunakan untuk menyimpan **data mahasiswa**, di mana **NIM** adalah key dan **nama mahasiswa** adalah value.
- `String` berfungsi sebagai **key**, sedangkan `String` lainnya adalah **value**.
- Jika membutuhkan **Map yang terurut** berdasarkan key, gunakan `TreeMap`.
- Jika membutuhkan **Map yang mempertahankan urutan penyisipan**, gunakan `LinkedHashMap`.

---

## 🛠 **Operasi Dasar pada Map**

### 🔹 **Menambahkan Data (Assignment)**

Tambahkan mahasiswa dengan NIM **L0123068** ke dalam `dataMhs`:

```java
dataMhs.put("L0123068", "Ivan Wahyu Nugroho");
```

---

### 🔹 **Mengakses Data (Access)**

Ambil data mahasiswa dengan NIM **L0123068**:

```java
String nama = dataMhs.get("L0123068");
System.out.println("🎓 Nama: " + nama);
```

---

### 🔹 **Mengecek Keberadaan Key dalam Map**

Cek apakah mahasiswa dengan NIM **L0123068** ada dalam `dataMhs`:

```java
if (dataMhs.containsKey("L0123068")) {
    System.out.println("✅ L0123068 merupakan mahasiswa UNS.");
} else {
    System.out.println("❌ L0123068 bukan merupakan mahasiswa UNS.");
}
```

---

### 🔹 **Menghapus Data (Removal)**

Hapus mahasiswa dengan NIM **L0123068** dari `dataMhs`:

```java
dataMhs.remove("L0123068");
```

---

### 🔹 **Iterasi Seluruh Elemen dalam Map**

Gunakan **for-each loop** untuk menampilkan semua data mahasiswa:

```java
for (Map.Entry<String, String> entry : dataMhs.entrySet()) {
    System.out.println("🎓 NIM: " + entry.getKey() + " | Nama: " + entry.getValue());
}
```

Atau dengan **forEach (Java 8+):**

```java
dataMhs.forEach((nim, nama) ->
    System.out.println("🎓 NIM: " + nim + " | Nama: " + nama)
);
```

---

## 📌 **Jenis-jenis Implementasi Map di Java**

| 🏷 **Tipe Map** | ⚡ **Kompleksitas** | 🔄 **Urutan Key**           | 📌 **Keterangan**                        |
| --------------- | ------------------- | --------------------------- | ---------------------------------------- |
| `HashMap`       | $O(1)$ (rata-rata)  | ❌ Tidak terjamin           | Performa terbaik untuk pencarian         |
| `TreeMap`       | $O(log \, N)$       | ✅ Terurut secara alami     | Menggunakan struktur BST (Balanced Tree) |
| `LinkedHashMap` | $O(1)$              | ✅ Sesuai urutan penyisipan | Kombinasi `HashMap` dan `LinkedList`     |

---

## 📚 **Dokumentasi Resmi**

🔗 [Java Map Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)
