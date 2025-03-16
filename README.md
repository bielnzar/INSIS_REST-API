# INSIS_REST-API

Mata Kuliah Integrasi Sistem 2025

Proyek 1 REST API - GO MASJID

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

### Cara menguji di Postman

1. **POST /masjid** (Menambah banyak masjid sekaligus)

   - Method: POST
   - URL: `http://localhost:3000/masjid`
   - Body: Pilih raw, tipe JSON, lalu masukkan contoh data di atas.

2. **GET /masjid** (Melihat semua masjid)

   - Method: GET
   - URL: `http://localhost:3000/masjid`

3. **GET /masjid/:id** (Melihat masjid tertentu)

   - Method: GET
   - URL: `http://localhost:3000/masjid/<id>` (ganti <id> dengan ID masjid)

4. **PUT /masjid/:id** (Mengedit masjid)

   - Method: PUT
   - URL: `http://localhost:3000/masjid/<id>`
   - Body: raw, JSON (contoh: { "menu_takjil": "Es Kelapa Muda" })

5. **DELETE /masjid/:id** (Menghapus masjid)
   - Method: DELETE
   - URL: `http://localhost:3000/masjid/<id>`

### Example raw data Post

```js
{
  "nama": "Masjid Al-Falah",
  "lokasi": "Medokan Semampir",
  "waktu_selesai_tarawih": "20:30",
  "hari": "Senin Kamis",
  "menu_takjil": "Nasi Bebek Carok",
  "gambar": "https://welcomesaudi.com/uploads/0000/1/2024/10/12/1-masjid-quba.jpg",
  "kapasitas": 500,
  "fasilitas": ["AC", "Parkir Luas", "WiFi"]
}
```
