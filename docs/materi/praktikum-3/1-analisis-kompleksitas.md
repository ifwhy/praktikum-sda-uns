---
sidebar_position: 1
---

# 📌 Analisis Kompleksitas Algoritma

Pada semester pertama, kita telah mempelajari bagaimana membuat algoritma untuk menyelesaikan suatu masalah. Namun, hal tersebut tidak cukup. Algoritma tidak hanya harus **benar** (efektif), tetapi juga harus **mangkus** (efisien). Sehingga dapat dikatakan bahwa algoritma yang baik adalah algoritma yang mangkus. Kemangkusan suatu algoritma diukur dari sisi **waktu** (_time_) eksekusi serta penggunaan **memori** (_space_). 💻🧠

## 1️⃣ - **Notasi Asimtotik**

Terdapat beberapa jenis notasi asimtotik, tetapi kita hanya akan menggunakan dan membahas satu notasi saja, yaitu notasi **Big-O**. Notasi Big-O dipilih karena merupakan notasi yang paling populer dan banyak digunakan di kalangan peneliti ilmu komputer. Notasi Big-O digunakan untuk mengkategorikan algoritma ke dalam fungsi yang menggambarkan batas atas (**upper limit**) dari pertumbuhan sebuah fungsi ketika masukan dari fungsi tersebut bertambah banyak. 📈

| **Fungsi Big-O**  | **Nama**    |
| ----------------- | ----------- |
| $O(1)$            | Konstan     |
| $O(\log(n))$      | Logaritmik  |
| $O(n)$            | Linear      |
| $O(n \, \log(n))$ | Linearitmik |
| $O(n^2)$          | Kuadratik   |
| $O(n^m)$          | Polinomial  |
| $O(n!)$           | Faktorial   |

## 2️⃣ - **Contoh Kriteria Kompleksitas**

### $O(1)$: **Konstan** ⚡

```java
// ...
System.out.println("Hello, world!");
// ...
```

Pada kode di atas, `"Hello, world!"` dicetak hanya sekali. Jadi, kompleksitas waktu adalah konstan: $O(1)$, yang berarti setiap kali hanya dibutuhkan waktu yang sama terlepas dari ukuran input.

### $O(N)$: **Linear** 📏

```java
// ...
int i, n = 8;
for (i = 1; i <= n; i++) {
    System.out.println("Hello, world!");
}
// ...
```

Di sini, `"Hello, world!"` akan dicetak sebanyak $N$ kali. Sehingga, kompleksitas waktu dari kode di atas adalah $$O(N)$$.

### $O(N^2)$: **Kuadratik** 🔲

```java
// ...
int a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
// ...
```

Kode ini berjalan sebanyak:

$= N + (N - 1) + (N - 2) + \cdots + 1 + 0$

$= \frac{N(N+1)}{2}$

$= \frac{N^2}{2} + \frac{N}{2}$

Jadi, kompleksitasnya adalah $$O(N^2)$$.

### $O(log \, N)$: **Logaritmik** 🔍

```java
// ...
int a = 0, i = N;
while (i > 0) {
    a += i;
    i /= 2;
}
// ...
```

Di sini, kita harus mencari $x$ terkecil sehingga $\frac{N}{2^x} \leq N$. Maka, kompleksitasnya adalah $$O(log N)$$.

### $O(N\, log (N))$: **Linearitmik** 🌀

```java
// ...
int i, j, k = 0;
for (i = N / 2; i <= N; i++) {
    for (j = 2; j <= N; j = j * 2) {
        k = k + N / 2;
    }
}
// ...
```

Di sini, kompleksitasnya adalah $O(N \, log(N))$ karena ada dua loop yang bergantung pada N.

### $O(N!)$: **Faktorial** 🧮

```java
import java.util.*;

public class TravelingSalesman {
    private static int n = 4; // Jumlah kota
    private static int[][] graph = {
        {0, 10, 15, 20},
        {10, 0, 35, 25},
        {15, 35, 0, 30},
        {20, 25, 30, 0}
    };

    private static int tsp(int start) {
        List<Integer> cities = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (i != start) cities.add(i);
        }

        return permuteAndFindMin(start, cities);
    }

    private static int permuteAndFindMin(int start, List<Integer> cities) {
        int minCost = Integer.MAX_VALUE;
        List<List<Integer>> permutations = generatePermutations(cities);

        for (List<Integer> perm : permutations) {
            int cost = 0, prev = start;
            for (int city : perm) {
                cost += graph[prev][city];
                prev = city;
            }
            cost += graph[prev][start]; // Kembali ke kota awal
            minCost = Math.min(minCost, cost);
        }
        return minCost;
    }

    private static List<List<Integer>> generatePermutations(List<Integer> cities) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(cities, new ArrayList<>(), result);
        return result;
    }

    private static void backtrack(List<Integer> cities, List<Integer> temp, List<List<Integer>> result) {
        if (temp.size() == cities.size()) {
            result.add(new ArrayList<>(temp));
            return;
        }
        for (Integer city : cities) {
            if (!temp.contains(city)) {
                temp.add(city);
                backtrack(cities, temp, result);
                temp.remove(temp.size() - 1);
            }
        }
    }

    public static void main(String[] args) {
        int minCost = tsp(0);
        System.out.println("Biaya perjalanan terpendek: " + minCost);
    }
}
```

Contoh di atas adalah algoritma _Traveling Salesman Problem_ (TSP). Proses yang berlipat ganda mengarah pada kompleksitas $O(N!)$ yang sangat tidak efisien.

## 3️⃣ - **Perbandingan Pertumbuhan Kompleksitas** 📊

![Gambar perbandingan kompleksitas](https://i.ytimg.com/vi/XiGedDZGOM8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCoZ7k4wh3HCXJkQQ0zw_wgCF8ymw)

Pengembangan algoritma idealnya diusahakan mendapatkan kompleksitas $O(1)$ atau $O(log \,n)$. Sayangnya, kita tidak selalu bisa mencapai kompleksitas terbaik dalam merancang algoritma. Jika tidak dapat mencapai kompleksitas maksimal, hal terbaik yang dapat kita lakukan adalah melihat apakah masalah dapat diselesaikan dengan algoritma yang sudah ada terlebih dahulu, sebelum mengembangkan algoritma baru. Hal ini memastikan kita mendapatkan kompleksitas yang paling efisien. 🚀

## 4️⃣ - **Kesimpulan** 📝

Pada bagian ini, kita telah mempelajari bagaimana melakukan analisis efisiensi algoritma menggunakan notasi **Big-O**. Algoritma yang paling efisien memiliki kompleksitas $O(1)$, sementara $O(n!)$ adalah yang paling tidak efisien. Dengan memahami efisiensi algoritma, diharapkan kita dapat memilih dan merancang algoritma yang tepat sesuai dengan kebutuhan untuk menyelesaikan masalah. 🔧
