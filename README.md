# INSIS_REST-API

Mata Kuliah Integrasi Sistem 2025

## Kelompok I

|      **Nama**       |  **NRP**   |
| :-----------------: | :--------: |
|    Abhirama T.H     | 5027231061 |
|        Hasan        | 5027231073 |
| Nabiel Nizar Anwari | 5027231087 |

### Clone Repository:

```
https://github.com/bielnzar/INSIS_REST-API.git
```

### Masuk ke folder projek:

```
cd backend
```

### Install Dependencies

```
npm install
```

### Konfigurasi environment variables:

- Buat file `.env` di root folder.
- Tambahkan variabel berikut:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/masjidDB?retryWrites=true&w=majority
PORT=3000
```

- Ganti <username> dan <password> dengan kredensial MongoDB Atlas Anda.

### Jalankan server:

```
node app.js
```

> Server akan berjalan di http://localhost:3000.

### Use Example

- Post Berjamaah dari Postman

```
[
  {
    "nama": "Al Ikhlas",
    "lokasi": "Gebang Putih",
    "waktu_selesai_tarawih": "20:30",
    "hari": "Sabtu Minggu",
    "menu_takjil": "Nasi Kotak"
  },
  {
    "nama": "Masjid As Sa'adah",
    "lokasi": "Bumi Marina Emas",
    "waktu_selesai_tarawih": "20:05",
    "hari": "Setiap hari",
    "menu_takjil": "Gorengan + Es Cendol"
  }
]
```
