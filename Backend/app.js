const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.json());

// Koneksi ke MongoDB Atlas
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Terhubung ke MongoDB"))
  .catch((err) => console.error("Gagal terhubung ke MongoDB:", err));

const masjidSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  lokasi: { type: String, required: true },
  waktu_selesai_tarawih: { type: String, required: true },
  hari: { type: String, required: true },
  menu_takjil: { type: String, required: true },
  gambar: { type: String, required: true },
  kapasitas: { type: Number, required: true },
  fasilitas: { type: [String], required: true },
});
const Masjid = mongoose.model("Masjid", masjidSchema);

app.post("/masjid", async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const newMasjids = await Masjid.insertMany(req.body);
      res.status(201).json(newMasjids);
    } else {
      const newMasjid = new Masjid(req.body);
      await newMasjid.save();
      res.status(201).json(newMasjid);
    }
  } catch (err) {
    res.status(400).json({ error: "Gagal menambah masjid: " + err.message });
  }
});

app.get("/masjid", async (req, res) => {
  try {
    const masjidList = await Masjid.find();
    res.json(masjidList);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data masjid" });
  }
});

app.get("/masjid/:id", async (req, res) => {
  try {
    const masjid = await Masjid.findById(req.params.id);
    if (masjid) {
      res.json(masjid);
    } else {
      res.status(404).json({ error: "Masjid tidak ditemukan" });
    }
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data masjid" });
  }
});

app.put("/masjid/:id", async (req, res) => {
  try {
    const masjid = await Masjid.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (masjid) {
      res.json(masjid);
    } else {
      res.status(404).json({ error: "Masjid tidak ditemukan" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ error: "Gagal mengubah data masjid: " + err.message });
  }
});

app.delete("/masjid/:id", async (req, res) => {
  try {
    const masjid = await Masjid.findByIdAndDelete(req.params.id);
    if (masjid) {
      res.json({ message: "Masjid berhasil dihapus" });
    } else {
      res.status(404).json({ error: "Masjid tidak ditemukan" });
    }
  } catch (err) {
    res.status(500).json({ error: "Gagal menghapus masjid" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
