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
// =====================
// Matriks Ketetanggaan (Adjacency Matrix)
// =====================

// Enum Klub
enum Klub {
    REAL_MADRID,
    CHELSEA,
    AC_MILAN,
    VALENCIA;
    public static final int JUMLAH_KLUB = values().length;
}

// Enum Hasil
enum Hasil {
    MENANG,
    SERI,
    KALAH
}

// Matriks ketetanggaan
Hasil[][] pertandingan = new Hasil[Klub.JUMLAH_KLUB][Klub.JUMLAH_KLUB];

// Contoh pengisian
pertandingan[Klub.AC_MILAN.ordinal()][Klub.VALENCIA.ordinal()] = Hasil.MENANG;
pertandingan[Klub.VALENCIA.ordinal()][Klub.AC_MILAN.ordinal()] = Hasil.KALAH;

pertandingan[Klub.REAL_MADRID.ordinal()][Klub.CHELSEA.ordinal()] = Hasil.SERI;
pertandingan[Klub.CHELSEA.ordinal()][Klub.REAL_MADRID.ordinal()] = Hasil.SERI;

// dan seterusnya ...
```

#### 🏙️ Contoh: Graf Kota Surakarta

```java
// =====================
// Matriks Ketetanggaan (Adjacency Matrix)
// =====================

enum Tempat {
    RUMAH,
    UNIVERSITAS_SEBELAS_MARET,
    RUMAH_SAKIT_DR_MOEWARDI,
    SMP_NEGERI_8_SURAKARTA,
    PECEL_MADIUN_PUCANGSAWIT,
    SMP_NEGERI_4_SURAKARTA,
    SMA_NEGERI_3_SURAKARTA;
    public static final int JUMLAH_TEMPAT = values().length;
}

// Matriks ketetanggaan
// Jarak antar tempat
// -1.0 jika tidak ada jalur langsung, 0.0 jika ke dirinya sendiri

double[][] jarakMatriks = new double[Tempat.JUMLAH_TEMPAT][Tempat.JUMLAH_TEMPAT];

// Contoh pengisian
jarakMatriks[Tempat.RUMAH.ordinal()][Tempat.UNIVERSITAS_SEBELAS_MARET.ordinal()] = 2.97;
jarakMatriks[Tempat.UNIVERSITAS_SEBELAS_MARET.ordinal()][Tempat.RUMAH.ordinal()] = 2.97;

jarakMatriks[Tempat.UNIVERSITAS_SEBELAS_MARET.ordinal()][Tempat.RUMAH_SAKIT_DR_MOEWARDI.ordinal()] = 2.86;
jarakMatriks[Tempat.RUMAH_SAKIT_DR_MOEWARDI.ordinal()][Tempat.UNIVERSITAS_SEBELAS_MARET.ordinal()] = 2.86;

jarakMatriks[Tempat.PECEL_MADIUN_PUCANGSAWIT.ordinal()][Tempat.SMA_NEGERI_3_SURAKARTA.ordinal()] = 2.28;
jarakMatriks[Tempat.SMA_NEGERI_3_SURAKARTA.ordinal()][Tempat.PECEL_MADIUN_PUCANGSAWIT.ordinal()] = 2.28;

jarakMatriks[Tempat.RUMAH.ordinal()][Tempat.RUMAH.ordinal()] = 0.0;
jarakMatriks[Tempat.RUMAH.ordinal()][Tempat.SMA_NEGERI_3_SURAKARTA.ordinal()] = -1.0;
jarakMatriks[Tempat.SMA_NEGERI_3_SURAKARTA.ordinal()][Tempat.RUMAH.ordinal()] = -1.0;

// dan seterusnya ...
```

---

### 2️⃣ Menggunakan Daftar Ketetanggaan (Adjacency List)

Daftar ketetanggaan menggunakan array yang berisi daftar tetangga untuk setiap simpul.

#### ⚽ Contoh: Graf Liga Champions

```java
// =====================
// Daftar Ketetanggaan (Adjacency List)
// =====================

class Pertandingan {
    Klub lawan;
    Hasil hasil;
    Pertandingan(Klub _lawan, Hasil _hasil) {
        lawan = _lawan;
        hasil = _hasil;
    }
}

// Daftar ketetanggaan
List<List<Pertandingan>> pertandinganList = new ArrayList<>();
for (int i = 0; i < Klub.JUMLAH_KLUB; i++) {
    pertandinganList.add(new ArrayList<>());
}

// Contoh pengisian
pertandinganList.get(Klub.AC_MILAN.ordinal()).add(new Pertandingan(Klub.VALENCIA, Hasil.MENANG));
pertandinganList.get(Klub.VALENCIA.ordinal()).add(new Pertandingan(Klub.AC_MILAN, Hasil.KALAH));

pertandinganList.get(Klub.REAL_MADRID.ordinal()).add(new Pertandingan(Klub.CHELSEA, Hasil.SERI));
pertandinganList.get(Klub.CHELSEA.ordinal()).add(new Pertandingan(Klub.REAL_MADRID, Hasil.SERI));

// dan seterusnya ...
```

#### 🏙️ Contoh: Graf Kota Surakarta

```java
// =====================
// Daftar Ketetanggaan (Adjacency List)
// =====================

class Jarak {
    Tempat tujuan;
    double jarak;
    Jarak(Tempat _tujuan, double _jarak) {
        tujuan = _tujuan;
        jarak = _jarak;
    }
}

List<List<Jarak>> jarakList = new ArrayList<>();
for (int i = 0; i < Tempat.JUMLAH_TEMPAT; i++) {
    jarakList.add(new ArrayList<>());
}

// Contoh pengisian
jarakList.get(Tempat.RUMAH.ordinal()).add(new Jarak(Tempat.UNIVERSITAS_SEBELAS_MARET, 2.97));
jarakList.get(Tempat.UNIVERSITAS_SEBELAS_MARET.ordinal()).add(new Jarak(Tempat.RUMAH, 2.97));

jarakList.get(Tempat.UNIVERSITAS_SEBELAS_MARET.ordinal()).add(new Jarak(Tempat.RUMAH_SAKIT_DR_MOEWARDI, 2.86));
jarakList.get(Tempat.RUMAH_SAKIT_DR_MOEWARDI.ordinal()).add(new Jarak(Tempat.UNIVERSITAS_SEBELAS_MARET, 2.86));

jarakList.get(Tempat.PECEL_MADIUN_PUCANGSAWIT.ordinal()).add(new Jarak(Tempat.SMA_NEGERI_3_SURAKARTA, 2.28));
jarakList.get(Tempat.SMA_NEGERI_3_SURAKARTA.ordinal()).add(new Jarak(Tempat.PECEL_MADIUN_PUCANGSAWIT, 2.28));

// dan seterusnya ...
```

---

### 3️⃣ Menggunakan Daftar Sisi (Edge List)

Daftar sisi merepresentasikan graf sebagai list yang berisi semua sisi.

#### ⚽ Contoh: Graf Liga Champions

```java
// =====================
// Daftar Sisi (Edge List)
// =====================

class PertandinganEdge {
    Klub pemain;
    Klub lawan;
    Hasil hasil;
    PertandinganEdge(Klub _pemain, Klub _lawan, Hasil _hasil) {
        pemain = _pemain;
        lawan = _lawan;
        hasil = _hasil;
    }
}

List<PertandinganEdge> edgeList = new ArrayList<>();

// Contoh pengisian
edgeList.add(new PertandinganEdge(Klub.AC_MILAN, Klub.VALENCIA, Hasil.MENANG));
edgeList.add(new PertandinganEdge(Klub.VALENCIA, Klub.AC_MILAN, Hasil.KALAH));

edgeList.add(new PertandinganEdge(Klub.REAL_MADRID, Klub.CHELSEA, Hasil.SERI));
edgeList.add(new PertandinganEdge(Klub.CHELSEA, Klub.REAL_MADRID, Hasil.SERI));
```

#### 🏙️ Contoh: Graf Kota Surakarta

```java
// =====================
// Daftar Sisi (Edge List)
// =====================

class JarakEdge {
    Tempat asal;
    Tempat tujuan;
    double jarak;
    JarakEdge(Tempat _asal, Tempat _tujuan, double _jarak) {
        asal = _asal;
        tujuan = _tujuan;
        jarak = _jarak;
    }
}

List<JarakEdge> edgeJarak = new ArrayList<>();

// Contoh pengisian
edgeJarak.add(new JarakEdge(Tempat.RUMAH, Tempat.UNIVERSITAS_SEBELAS_MARET, 2.97));
edgeJarak.add(new JarakEdge(Tempat.UNIVERSITAS_SEBELAS_MARET, Tempat.RUMAH, 2.97));

edgeJarak.add(new JarakEdge(Tempat.UNIVERSITAS_SEBELAS_MARET, Tempat.RUMAH_SAKIT_DR_MOEWARDI, 2.86));
edgeJarak.add(new JarakEdge(Tempat.RUMAH_SAKIT_DR_MOEWARDI, Tempat.UNIVERSITAS_SEBELAS_MARET, 2.86));

edgeJarak.add(new JarakEdge(Tempat.PECEL_MADIUN_PUCANGSAWIT, Tempat.SMA_NEGERI_3_SURAKARTA, 2.28));
edgeJarak.add(new JarakEdge(Tempat.SMA_NEGERI_3_SURAKARTA, Tempat.PECEL_MADIUN_PUCANGSAWIT, 2.28));
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
