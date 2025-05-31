---
sidebar_position: 2
---

# 📌 Quicksort

### 🔍 Definisi

_Quicksort_ adalah algoritma sorting **divide-and-conquer** berbasis **rekursi**. Ia bekerja dengan memilih satu elemen sebagai **pivot**, lalu mempartisi elemen lain berdasarkan apakah mereka lebih kecil atau lebih besar dari pivot.

---

### 📊 Kompleksitas

| Kasus      | Kompleksitas                  |
| ---------- | ----------------------------- |
| 🔥 Best    | $O(n \, log \, n)$            |
| 💡 Average | $O(n \, log \, n)$            |
| ⚠️ Worst   | $O(n^2)$                      |
| 🧠 Memori  | $O(log \, n)$ (rekursi stack) |

---

### 🧠 Pseudocode

```plaintext
quicksort(arr[], start, end)
    if start >= end
        return
    else
        p := partition(arr)
        quicksort(arr, start, p-1)
        quicksort(arr, p+1, end)
```

> ✨ _Partitioning_ adalah kunci dari _quicksort_: memilih pivot, menempatkan di posisi seharusnya, lalu mengurutkan kiri dan kanan pivot.

---

### 🔎 Contoh Visual

🔗 Lihat simulasi quicksort di: [VisualGo](https://visualgo.net/en/sorting)
🖼️ Visual interaktif membantu banget loh!

---

### 🚀 Implementasi Program

Berikut ini kode Java untuk algoritma quick-sort:

```java
public static void quickSort(ArrayList<Integer> list, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(list, low, high);
        quickSort(list, low, pivotIndex - 1);   // bagian kiri pivot
        quickSort(list, pivotIndex + 1, high); // bagian kanan pivot
    }
}

private static int partition(ArrayList<Integer> list, int low, int high) {
    int pivot = list.get(high);  // pilih elemen terakhir sebagai pivot
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (list.get(j) <= pivot) {
            i++;
            Collections.swap(list, i, j);
        }
    }

    Collections.swap(list, i + 1, high);
    return i + 1;
}

```
