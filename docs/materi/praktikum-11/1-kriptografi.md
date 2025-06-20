---
sidebar_position: 1
---

# 📌 Algoritma Kriptografi

> _"Data is the new oil — maka, harus kita jaga keamanannya."_
> Yuk, pelajari cara mengenkripsi dan mengamankan data menggunakan **Java** dalam dunia **kriptografi klasik & modern**! 🚀💻

---

## 🧠 Apa Itu Kriptografi?

Kriptografi adalah ilmu dan seni dalam **mengamankan informasi** dengan cara mengubah data agar **tidak bisa dibaca sembarang orang**, kecuali oleh pihak yang memiliki **kunci rahasia** 🔑.
Tujuannya? 🛡️ Melindungi **kerahasiaan**, **integritas**, dan **autentikasi** dalam komunikasi digital.

---

## 🧩 **Caesar Cipher — Teknik Kriptografi Kuno tapi Keren**

📜 Caesar Cipher adalah salah satu teknik enkripsi tertua. Caranya?
Setiap huruf digeser sejumlah langkah tertentu dalam alfabet. Misalnya, kalau kunci = 3:

```
Plaintext:  HELLO
Ciphertext: KHOOR
```

### 🔄 Langkah Enkripsi:

1. 🔡 Konversi huruf ke angka (A = 1, ..., Z = 26)
2. ➕ Tambahkan kunci ke setiap angka
3. ➗ Modulo 26 untuk menjaga tetap dalam rentang alfabet
4. 🔤 Konversi angka kembali ke huruf

### 🔓 Langkah Dekripsi:

Kebalikan dari proses di atas! Tinggal kurangi kuncinya 🔁

---

### 🧪 Contoh Kode Caesar Cipher di Java:

```java
public class CaesarCipher {
    public static String encrypt(String text, int shift) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);

            if (Character.isLetter(ch)) {
                char encryptedChar = (char) (ch + shift);
                if ((Character.isLowerCase(ch) && encryptedChar > 'z') ||
                    (Character.isUpperCase(ch) && encryptedChar > 'Z')) {
                    encryptedChar = (char) (ch - (26 - shift));
                }
                result.append(encryptedChar);
            } else {
                result.append(ch);
            }
        }

        return result.toString();
    }

    public static String decrypt(String text, int shift) {
        return encrypt(text, 26 - shift);
    }

    public static void main(String[] args) {
        String plaintext = "Hello, World!";
        int shift = 3;

        String ciphertext = encrypt(plaintext, shift);
        System.out.println("Encrypted Text: " + ciphertext);

        String decryptedText = decrypt(ciphertext, shift);
        System.out.println("Decrypted Text: " + decryptedText);
    }
}
```

---

## 🧬 **Hash Functions — Kriptografi Sekali Jalan (One-Way)**

Hash function itu seperti **sidik jari digital**: kamu bisa mencocokkan, tapi tidak bisa menyalin balik! 🧱

### 💡 Ciri-ciri Hash Function:

- 📍 _Deterministik_: Input sama = output selalu sama
- ⚡ _Cepat_
- 🔐 _Tidak bisa dibalik (irreversible)_
- ❌ _Tidak boleh terjadi tabrakan (collision)_

---

## 📦 Contoh Hashing di Java

### 🔒 MD5 Hash (128-bit)

```java
public static String getMD5(String input) {
    try {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] messageDigest = md.digest(input.getBytes());
        BigInteger no = new BigInteger(1, messageDigest);
        String hashText = no.toString(16);
        while (hashText.length() < 32) {
            hashText = "0" + hashText;
        }
        return hashText;
    } catch (NoSuchAlgorithmException e) {
        throw new RuntimeException(e);
    }
}
```

---

### 🔐 SHA-1 Hash (160-bit)

```java
public static String getSHA1(String input) {
    try {
        MessageDigest md = MessageDigest.getInstance("SHA-1");
        byte[] messageDigest = md.digest(input.getBytes());
        BigInteger no = new BigInteger(1, messageDigest);
        String hashText = no.toString(16);
        while (hashText.length() < 40) {
            hashText = "0" + hashText;
        }
        return hashText;
    } catch (NoSuchAlgorithmException e) {
        throw new RuntimeException(e);
    }
}
```

---

### 🔐 SHA-256 Hash (256-bit — Super Kuat 💪)

```java
public static String getSHA256(String input) {
    try {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] messageDigest = md.digest(input.getBytes());
        BigInteger no = new BigInteger(1, messageDigest);
        String hashText = no.toString(16);
        while (hashText.length() < 64) {
            hashText = "0" + hashText;
        }
        return hashText;
    } catch (NoSuchAlgorithmException e) {
        throw new RuntimeException(e);
    }
}
```

---

## 🚀 Kesimpulan

Dengan memahami dasar **kriptografi klasik (Caesar Cipher)** dan **kriptografi modern (Hashing)**, kita bisa menjaga data tetap aman dari penyusup 👾. Di dunia nyata, kriptografi digunakan dalam login, pengiriman pesan, dompet kripto, hingga keamanan cloud.

---

> 🔑 **“Jangan cuma jadi pengguna teknologi. Jadi juga yang mengamankan teknologi.”**
