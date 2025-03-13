---
sidebar_position: 2
---

# 🏆 Pendahuluan Java

![James Gosling](https://trydale.com/wp-content/uploads/2017/02/james-gosling-1-300x150.jpg)
Java adalah bahasa pemrograman berorientasi objek yang pertama kali dikembangkan oleh [James Gosling](https://en.wikipedia.org/wiki/James_Gosling) di [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) pada tahun 1995. Java dirancang agar dapat berjalan di berbagai platform dengan konsep **Write Once, Run Anywhere (WORA)**, yang berarti kode Java bisa dijalankan di berbagai sistem operasi tanpa perlu diubah. ☕✨

Keunggulan Java meliputi keamanan yang tinggi, manajemen memori otomatis dengan **Garbage Collector**, serta dukungan yang luas untuk pengembangan aplikasi mulai dari **aplikasi desktop, web, mobile (Android), hingga IoT dan AI**. 🚀

:::info[Fun Fact Java]
Nama bahasa pemrograman Java diambil dari nama pulau Jawa di Indonesia. Hal ini disebabkan James Gosling sangat menyukai kopi yang berasal dari Jawa. Oleh karena itu, bahasa pemrograman ini dinamakan Java dengan logo secangkir kopi.
:::

## 🔤 Sintaks Dasar Java

Berikut adalah beberapa sintaks dasar dalam Java:

### 🔹 Menampilkan Output (Print ke Konsol)

```java
public class Main {
    public static void main(String[] args) {
        int number = 1;
        System.out.println("Hello, Java!"); // Cetak teks ke layar sebaris
        System.out.print("Hello, World!"); // Cetak teks ke layar
        System.out.printf("Hello, Number is %d", number); // Cetak teks ke layar (mirip bahasa C)
    }
}
```

### 🔹 Mengambil Input dari Pengguna

```java
import java.util.Scanner;

public class ContohMain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Masukkan nama: ");
        String nama = scanner.nextLine();
        System.out.println("Halo, " + nama + "!");

        System.out.print("Masukkan usia Anda: ");
        int usia = scanner.nextInt();
        System.out.println("Usiamu " + usia + " tahun");
    }
}
```

:::note[Penamaan File dan Kelas di Java]
Nama file di Java umumnya ditulis dengan _Pascal Case_, misalnya `Main.java` (dengan awalan huruf kapital). Apabila terdapat lebih dari satu kata, dapat ditulis seperti berikut ini `ContohMain.java`. **Penamaan kelas utama di Java mengikuti nama filenya**. Di Java, dalam satu file, diperbolehkan terdapat lebih dari satu kelas, tetapi hanya boleh terdapat satu kelas dengan _identifier_ **public**.
:::

### 🔹 Tipe Data dalam Java

Java memiliki berbagai tipe data yang digunakan untuk menyimpan nilai dengan karakteristik yang berbeda.

| Tipe Data | Ukuran     | Nilai Minimum              | Nilai Maksimum            | Contoh      |
| --------- | ---------- | -------------------------- | ------------------------- | ----------- |
| `byte`    | 1 byte     | -128                       | 127                       | 100         |
| `short`   | 2 byte     | -32,768                    | 32,767                    | 20000       |
| `int`     | 4 byte     | -2,147,483,648             | 2,147,483,647             | 42          |
| `long`    | 8 byte     | -9,223,372,036,854,775,808 | 9,223,372,036,854,775,807 | 9000000000L |
| `float`   | 4 byte     | 1.4E-45                    | 3.4028235E+38             | 3.14f       |
| `double`  | 8 byte     | 4.9E-324                   | 1.7976931348623157E+308   | 3.141592653 |
| `char`    | 2 byte     | '\u0000'                   | '\uffff'                  | 'A'         |
| `boolean` | 1 bit      | false                      | true                      | true/false  |
| `String`  | Bervariasi | -                          | -                         | "Java"      |

**📝 Catatan:**

- `byte`, `short`, `int`, dan `long` digunakan untuk bilangan bulat.
- `float` dan `double` digunakan untuk bilangan desimal.
- `char` menyimpan karakter Unicode.
- `boolean` menyimpan nilai `true` atau `false`.
- `String` adalah kumpulan karakter yang bisa menyimpan teks.

### 🔹 Pengondisian dan Perulangan

#### ✅ Pengondisian (Conditional Statement)

Pengondisian digunakan untuk mengambil keputusan dalam program berdasarkan suatu kondisi.

##### 🔹 `if-else` Statement

```java
int angka = 10;
if (angka > 0) {
    System.out.println("Angka positif");
} else {
    System.out.println("Angka negatif atau nol");
}
```

##### 🔹 `switch` Statement

```java
int hari = 3;
switch (hari) {
    case 1:
        System.out.println("Senin");
        break;
    case 2:
        System.out.println("Selasa");
        break;
    case 3:
        System.out.println("Rabu");
        break;
    default:
        System.out.println("Hari tidak valid");
}
```

##### 🔹`Ternary Operator`

```java
int number = 2;
String positiveNum = number > 0 ? "Ya, bilangan positif" : "Bukan bilangan positif";
```

#### 🔁 Perulangan (Looping)

Perulangan digunakan untuk menjalankan blok kode secara berulang.

##### 🔹 `for` Loop

```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Iterasi ke-" + i);
}
```

##### 🔹 `while` Loop

```java
int i = 1;
while (i <= 5) {
    System.out.println("Iterasi ke-" + i);
    i++;
}
```

##### 🔹 `do-while` Loop

```java
int i = 1;
do {
    System.out.println("Iterasi ke-" + i);
    i++;
} while (i <= 5);
```

### 🔹 Fungsi (Method)

```java
private static void sayHello(String name){
    System.out.println("Hi, ", name, "!");
}

private static void sayHello(){
    System.out.println("Hi, John Doe!");
}

private static double getPI(){
    return 3.14;
}

```

---

Selamat belajar dan semangat praktikum! 🚀💪
