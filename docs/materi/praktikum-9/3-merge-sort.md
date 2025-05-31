---
sidebar_position: 3
---

# 📌 Mergesort

### 🔍 Definisi

_Mergesort_ juga berbasis **divide-and-conquer**. Ia akan membagi array menjadi bagian paling kecil, lalu **menggabungkan** (merge) bagian-bagian tersebut dalam urutan yang benar.

---

### 📊 Kompleksitas

| Kasus      | Kompleksitas       |
| ---------- | ------------------ |
| 🔥 Best    | $O(n \, log \, n)$ |
| 💡 Average | $O(n \, log \, n)$ |
| ⚠️ Worst   | $O(n \, log \, n)$ |
| 🧠 Memori  | $O(n)$             |

---

### 🧠 Pseudocode

```plaintext
mergesort(arr[], left, right)
    if right > left
        middle = left + (right - left) / 2
        mergesort(arr, left, middle)
        mergesort(arr, middle + 1, right)
        merge(arr, left, middle, right)
```

---

### 🎥 Contoh Visual

💡 Kamu bisa lihat animasi merge sort di:
🔗 [VisualGo Mergesort](https://visualgo.net/en/sorting)

Atau lihat gif ini:

<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif" width="300px" />
</div>

### 🚀Implementasi Program

Berikut ini kode program untuk Merge Sort di Java:

```java

public static ArrayList<Integer> mergeSort(ArrayList<Integer> list) {
{       if (list.size() <= 1) {
        return list;
    }

    int middle = list.size() / 2;
    ArrayList<Integer> left = new ArrayList<>(list.subList(0, middle));
    ArrayList<Integer> right = new ArrayList<>(list.subList(middle, list.size()));

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

private static ArrayList<Integer> merge(ArrayList<Integer> left, ArrayList<Integer> right) {
    ArrayList<Integer> result = new ArrayList<>();

    int i = 0, j = 0;

    // Gabungkan keduanya secara terurut
    while (i < left.size() && j < right.size()) {
        if (left.get(i) <= right.get(j)) {
            result.add(left.get(i));
            i++;
        } else {
            result.add(right.get(j));
            j++;
        }
    }

    // Tambahkan sisa elemen
    while (i < left.size()) {
        result.add(left.get(i));
        i++;
    }

    while (j < right.size()) {
        result.add(right.get(j));
        j++;
    }

    return result;
}}

```

---
