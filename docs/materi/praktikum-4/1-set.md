---
sidebar_position: 1
---

# 📌 Set

## 🔍 **Konsep Set**

Set (atau **himpunan**) adalah struktur data yang digunakan untuk **menyimpan elemen unik** dan **mengecek keberadaan suatu data** secara efisien. Konsep ini mirip dengan himpunan dalam matematika, tetapi dengan jumlah elemen yang terbatas (tidak seperti himpunan bilangan bulat yang bisa tak terhingga).

🔹 **Ciri utama dari Set:**  
✅ Tidak mengizinkan elemen duplikat.  
✅ Biasanya diimplementasikan menggunakan **HashSet**, **TreeSet**, atau **LinkedHashSet**.  
✅ Operasi pencarian, penambahan, dan penghapusan elemen umumnya memiliki kompleksitas $O(1)$ hingga $O(log \, N)$ tergantung pada implementasinya.

Dalam Java, struktur data `Set` tersedia dalam paket `java.util`.

---

## ✨ **Deklarasi Set di Java**

Untuk mendeklarasikan `Set` dalam Java, kita bisa menggunakan `HashSet`, `TreeSet`, atau `LinkedHashSet`.  
Contoh:

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Deklarasi Set dengan elemen bertipe Integer
        Set<Integer> favNumbers = new HashSet<>();
    }
}
```

📌 **Penjelasan:**

- `HashSet<Integer>` digunakan karena memiliki performa terbaik untuk operasi dasar seperti `add()`, `remove()`, dan `contains()` dengan kompleksitas $O(1)$.
- Jika urutan elemen ingin tetap terjaga, gunakan `LinkedHashSet`.
- Jika membutuhkan Set yang terurut secara alami, gunakan `TreeSet` (dengan kompleksitas $O(log \,N)$).

---

## 🛠 **Operasi Dasar pada Set**

### 🔹 **Menambahkan Elemen (Insertion)**

Tambahkan angka `36` ke dalam himpunan `favNumbers`:

```java
favNumbers.add(36);
```

### 🔹 **Mengecek Keberadaan Elemen (Access)**

Cek apakah angka `36` ada dalam `favNumbers`:

```java
if (favNumbers.contains(36)) {
    System.out.println("🎉 Angka 36 adalah salah satu angka favorit saya!");
}
```

---

### 🔹 **Menghapus Elemen (Removal)**

Hapus angka `36` dari `favNumbers`:

```java
favNumbers.remove(36);
```

Atau dengan menggunakan **iterator**:

```java
Iterator<Integer> it = favNumbers.iterator();
while (it.hasNext()) {
    Integer num = it.next();
    if (num == 36) {
        it.remove(); // Menghapus elemen yang ditunjuk oleh iterator
        break; // Keluar dari loop setelah elemen dihapus
    }
}
```

---

### 🔹 **Iterasi Seluruh Elemen dalam Set**

Gunakan loop **for-each** untuk menampilkan semua elemen dalam `favNumbers`:

```java
for (Integer num : favNumbers) {
    System.out.println("⭐ Angka favorit: " + num);
}
```

Atau gunakan **iterator**:

```java
Iterator<Integer> it = favNumbers.iterator();
while (it.hasNext()) {
    System.out.println("🔢 Angka favorit: " + it.next());
}
```

---

## 📌 **Jenis-jenis Implementasi Set di Java**

| 🏷 **Tipe Set** | ⚡ **Kompleksitas** | 🔄 **Urutan Elemen**           | 📌 **Keterangan**                        |
| --------------- | ------------------- | ------------------------------ | ---------------------------------------- |
| `HashSet`       | $O(1)$ (rata-rata)  | ❌ Tidak terjamin              | Performa terbaik untuk pencarian         |
| `TreeSet`       | $O(log \, N)$       | ✅ Terurut (berdasarkan nilai) | Menggunakan struktur BST (Balanced Tree) |
| `LinkedHashSet` | $O(1)$              | ✅ Sesuai urutan penambahan    | Kombinasi `HashSet` dan `LinkedList`     |

---

## 📚 **Dokumentasi Resmi**

🔗 [Java Set Documentation](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html)

✨ Dengan `Set`, kita bisa menyimpan elemen **unik**, melakukan pencarian dengan cepat, dan mengelola data tanpa duplikasi! 🚀🔥
