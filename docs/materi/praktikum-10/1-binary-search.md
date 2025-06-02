---
sidebar_position: 1
---

# 📌 Binary Search

Binary Search adalah algoritma pencarian efisien untuk mencari elemen di **array yang sudah terurut**. Algoritma ini bekerja dengan **membagi dua** array dan membandingkan elemen tengah dengan nilai yang dicari 🔪📦.

---

## 📌 Syarat Binary Search

✅ Array harus **sudah diurutkan** (ascending/descending).  
❌ Tidak cocok untuk array yang belum diurutkan.

---

## 🧠 Konsep Binary Search

1. Tentukan **elemen tengah**.
2. Bandingkan nilai tengah dengan target:
   - 🎯 Jika sama → selesai!
   - ⬅️ Jika target < tengah → cari ke kiri
   - ➡️ Jika target > tengah → cari ke kanan
3. Ulangi proses hingga ketemu atau tidak ada elemen tersisa.

---

## 🧾 Contoh Array (Sudah Terurut)

```java
int[] data = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
```

Target: `23`

---

## 🌀 Binary Search (Versi Rekursif)

```java
public class BinarySearchRecursive {
    public static int binarySearch(int[] arr, int left, int right, int target) {
        if (left > right) {
            return -1; // 🔚 Target tidak ditemukan
        }

        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid; // 🎯 Ditemukan
        } else if (arr[mid] > target) {
            return binarySearch(arr, left, mid - 1, target); // 🔍 ke kiri
        } else {
            return binarySearch(arr, mid + 1, right, target); // 🔍 ke kanan
        }
    }

    public static void main(String[] args) {
        int[] data = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        int target = 23;
        int result = binarySearch(data, 0, data.length - 1, target);

        if (result != -1) {
            System.out.println("🎉 Elemen ditemukan di indeks: " + result);
        } else {
            System.out.println("❌ Elemen tidak ditemukan.");
        }
    }
}
```

---

## 🔁 Binary Search (Versi Iteratif / Non-Rekursif)

```java
public class BinarySearchIterative {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid; // 🎯
            }

            if (arr[mid] < target) {
                left = mid + 1; // ➡️ geser kanan
            } else {
                right = mid - 1; // ⬅️ geser kiri
            }
        }

        return -1; // ❌ Tidak ditemukan
    }

    public static void main(String[] args) {
        int[] data = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        int target = 23;
        int result = binarySearch(data, target);

        if (result != -1) {
            System.out.println("🎉 Elemen ditemukan di indeks: " + result);
        } else {
            System.out.println("❌ Elemen tidak ditemukan.");
        }
    }
}
```

---

## ⚖️ Perbandingan Rekursif vs Iteratif

| Fitur                             | Rekursif 🔁          | Iteratif 🔄 |
| --------------------------------- | -------------------- | ----------- |
| Elegan dan ringkas                | ✅                   | ✅          |
| Stack aman (tidak stack overflow) | ❌ (jika data besar) | ✅          |
| Mudah dibaca                      | ✅                   | ✅          |
| Performa                          | Sama ($O(log \, n)$) | Sama        |

---

## 📚 Kompleksitas Waktu

| Kasus     | Kompleksitas   |
| --------- | -------------- |
| Terbaik   | $O(1) $        |
| Rata-rata | $O(log \, n) $ |
| Terburuk  | $O(log \, n) $ |

---

## ✅ Kesimpulan

- Binary Search sangat efisien untuk array yang **sudah terurut**.
- Bisa diimplementasikan secara **rekursif** maupun **iteratif**.
- Kompleksitasnya jauh lebih baik dibandingkan Linear Search ($O(n)$) 🚀

---

> ✨ Gunakan binary search saat kamu tahu datanya sudah **terurut**, dan kamu ingin pencarian yang cepat!
