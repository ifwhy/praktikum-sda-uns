---
sidebar_position: 1
---

# 📌 Graf

## 📖 Konsep Graf

Graf adalah struktur data yang mendefinisikan **hubungan** antara suatu data dengan data lainnya. Graf terdiri dari **simpul (node)** dan **sisi (edge)** yang menghubungkan simpul-simpul tersebut.

### 🌐 Contoh Graf

1. **Graf Berarah (Directed Graph)**  
   Contoh: Pertandingan pada tahap grup UEFA Champions League.  
   ![Ilustrasi Graf Berarah](/img/directed-graph.png)

2. **Graf Tidak Berarah (Undirected Graph)**  
   Contoh: Graf Kota Surakarta.  
   ![Ilustrasi Graf Tidak Berarah](/img/undirected-graph.png)

### 🧩 Istilah Penting

- **Tetangga**: Daftar simpul yang terhubung langsung dengan sebuah simpul.

---

## 🛠️ Implementasi Graf

### 1️⃣ Menggunakan Matriks Ketetanggaan (Adjacency Matrix)

Matriks ketetanggaan menggunakan array dua dimensi untuk merepresentasikan graf.

#### ⚽ Contoh: Graf Liga Champions

```java
public enum Klub {
    REAL_MADRID,
    CHELSEA,
    AC_MILAN,
    VALENCIA,
    JUMLAH_KLUB
};

public enum Hasil {
    MENANG,
    SERI,
    KALAH
};

// ...

// matriks ketetanggaan
Hasil pertandingan[JUMLAH_KLUB][JUMLAH_KLUB];

// ...

pertandingan[AC_MILAN][VALENCIA] = MENANG;
pertandingan[VALENCIA][AC_MILAN] = KALAH;

pertandingan[REAL_MADRID][CHELSEA] = SERI;
pertandingan[CHELSEA][REAL_MADRID] = SERI;

// dan seterusnya ...
```

#### 🏙️ Contoh: Graf Kota Surakarta

```java
public enum Tempat {
    RUMAH,
    UNIVERSITAS_SEBELAS_MARET,
    RUMAH_SAKIT_DR_MOEWARDI,
    SMP_NEGERI_8_SURAKARTA,
    PECEL_MADIUN_PUCANGSAWIT,
    SMP_NEGERI_4_SURAKARTA,
    SMA_NEGERI_3_SURAKARTA,
    JUMLAH_TEMPAT
};

// ...

// matriks ketetanggaan
double jarak[JUMLAH_TEMPAT][JUMLAH_TEMPAT];

// ...

jarak[RUMAH][UNIVERSITAS_SEBELAS_MARET] = 2.97;
jarak[UNIVERSITAS_SEBELAS_MARET][RUMAH] = 2.97;

jarak[UNIVERSITAS_SEBELAS_MARET][RUMAH_SAKIT_DR_MOEWARDI] = 2.86;
jarak[RUMAH_SAKIT_DR_MOEWARDI][UNIVERSITAS_SEBELAS_MARET] = 2.86;

jarak[PECEL_MADIUN_PUCANGSAWIT][SMA_NEGERI_3_SURAKARTA] = 2.28;
jarak[SMA_NEGERI_3_SURAKARTA][PECEL_MADIUN_PUCANGSAWIT] = 2.28;

// memberikan nilai 0 karena itu merupakan jarak ke dirinya sendiri
jarak[RUMAH][RUMAH] = 0.0;

// memberikan nilai negatif karena tidak ada jalur langsung dari RUMAH ke SMA NEGERI 3 Surakarta
jarak[RUMAH][SMA_NEGERI_3_SURAKARTA] = -1.0;
jarak[SMA_NEGERI_3_SURAKARTA][RUMAH] = -1.0;

// dan seterusnya ...
```

---

### 2️⃣ Menggunakan Daftar Ketetanggaan (Adjacency List)

Daftar ketetanggaan menggunakan array yang berisi daftar tetangga untuk setiap simpul.

#### ⚽ Contoh: Graf Liga Champions

```java
class Pertandingan {
    Klub lawan;
    Hasil hasil;

    Pertandingan(Klub _lawan, Hasil _hasil) {
        lawan = _lawan;
        hasil = _hasil;
    }
};

// ...

// daftar ketetanggaan
List<Pertandingan>[] pertandingan = new ArrayList[JUMLAH_KLUB];

// ...

pertandingan[AC_MILAN].add(new Pertandingan(Klub.VALENCIA, Hasil.MENANG));
pertandingan[VALENCIA].add(new Pertandingan(Klub.AC_MILAN, Hasil.KALAH));

pertandingan[REAL_MADRID].add(new Pertandingan(Klub.CHELSEA, Hasil.SERI));
pertandingan[CHELSEA].add(new Pertandingan(Klub.REAL_MADRID, Hasil.SERI));

// dan seterusnya ...
```

#### 🏙️ Contoh: Graf Kota Surakarta

```java
class Jarak {
    Tempat tujuan;
    double jarak;

    Jarak(Tempat _tujuan, double _jarak) {
        tujuan = _tujuan;
        jarak = _jarak;
    }
};

// ...

// daftar ketetanggaan
List<Jarak>[] jarak = new ArrayList[JUMLAH_TEMPAT];

// ...

jarak[RUMAH].add(new Jarak(Tempat.UNIVERSITAS_SEBELAS_MARET, 2.97));
jarak[UNIVERSITAS_SEBELAS_MARET].add(new Jarak(Tempat.RUMAH, 2.97));

jarak[UNIVERSITAS_SEBELAS_MARET].add(new Jarak(Tempat.RUMAH_SAKIT_DR_MOEWARDI, 2.86));
jarak[RUMAH_SAKIT_DR_MOEWARDI].add(new Jarak(Tempat.UNIVERSITAS_SEBELAS_MARET, 2.86));

jarak[PECEL_MADIUN_PUCANGSAWIT].add(new Jarak(Tempat.SMA_NEGERI_3_SURAKARTA, 2.28));
jarak[SMA_NEGERI_3_SURAKARTA].add(new Jarak(Tempat.PECEL_MADIUN_PUCANGSAWIT, 2.28));

// dan seterusnya ...
```

---

### 3️⃣ Menggunakan Daftar Sisi (Edge List)

Daftar sisi merepresentasikan graf sebagai list yang berisi semua sisi.

#### ⚽ Contoh: Graf Liga Champions

```java
class Pertandingan {
    Klub pemain;
    Klub lawan;
    Hasil hasil;

    Pertandingan(Klub _pemain, Klub _lawan, Hasil _hasil) {
        pemain = _pemain;
        lawan = _lawan;
        hasil = _hasil;
    }
};

// daftar sisi
List<Pertandingan> pertandingan = new ArrayList<>();

// ...

pertandingan.add(new Pertandingan(Klub.AC_MILAN, Klub.VALENCIA, Hasil.MENANG));
pertandingan.add(new Pertandingan(Klub.VALENCIA, Klub.AC_MILAN, Hasil.KALAH));

pertandingan.add(new Pertandingan(Klub.REAL_MADRID, Klub.CHELSEA, Hasil.SERI));
pertandingan.add(new Pertandingan(Klub.CHELSEA, Klub.REAL_MADRID, Hasil.SERI));
```

#### 🏙️ Contoh: Graf Kota Surakarta

```java
class Jarak {
    Tempat asal;
    Tempat tujuan;
    double jarak;

    Jarak(Tempat _asal, Tempat _tujuan, double _jarak) {
        asal = _asal;
        tujuan = _tujuan;
        jarak = _jarak;
    }
};

// daftar sisi
List<Jarak> jarak = new ArrayList<>();

// ...

jarak.add(new Jarak(Tempat.RUMAH, Tempat.UNIVERSITAS_SEBELAS_MARET, 2.97));
jarak.add(new Jarak(Tempat.UNIVERSITAS_SEBELAS_MARET, Tempat.RUMAH, 2.97));

jarak.add(new Jarak(Tempat.UNIVERSITAS_SEBELAS_MARET, Tempat.RUMAH_SAKIT_DR_MOEWARDI, 2.86));
jarak.add(new Jarak(Tempat.RUMAH_SAKIT_DR_MOEWARDI, Tempat.UNIVERSITAS_SEBELAS_MARET, 2.86));

jarak.add(new Jarak(Tempat.PECEL_MADIUN_PUCANGSAWIT, Tempat.SMA_NEGERI_3_SURAKARTA, 2.28));
jarak.add(new Jarak(Tempat.SMA_NEGERI_3_SURAKARTA, Tempat.PECEL_MADIUN_PUCANGSAWIT, 2.28));

```

---

## 📊 Perbandingan Kompleksitas

| **Operasi**                | **Adjacency Matrix** | **Adjacency List** | **Edge List** |
| -------------------------- | -------------------- | ------------------ | ------------- |
| Menambahkan sisi           | $O(1)$               | $O(1)$             | $O(1)$        |
| Menghapus sisi             | $O(1)$               | $O(K)$             | $O(E)$        |
| Memeriksa keterhubungan    | $O(1)$               | $O(K)$             | $O(E)$        |
| Melakukan iterasi tetangga | $O(V)$               | $O(K)$             | $O(E)$        |
| Penggunaan memori          | $O(V²)$              | $O(E)$             | $O(E)$        |

---

## 📝 Catatan

- Pilihan implementasi tergantung pada kebutuhan spesifik.
- **Adjacency Matrix** cocok untuk graf kecil dengan banyak operasi pengecekan keterhubungan.
- **Adjacency List** atau **Edge List** lebih efisien untuk graf besar dengan banyak operasi penambahan/penghapusan sisi.
