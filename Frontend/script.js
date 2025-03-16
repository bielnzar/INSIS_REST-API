document.addEventListener("DOMContentLoaded", () => {
    const mosqueListElement = document.getElementById("mosqueList");
    const mosqueDetailContent = document.getElementById("mosqueDetailContent");

    // 🔹 Fetch Data Masjid dari API
    async function loadMosqueList() {
        try {
            const response = await fetch("http://localhost:3000/masjid");
            if (!response.ok) throw new Error("Gagal mengambil data masjid");
            const mosques = await response.json();

            mosqueListElement.innerHTML = "";

            mosques.forEach((mosque) => {
                const mosqueCard = document.createElement("div");
                mosqueCard.className = "mosque-card";
                mosqueCard.setAttribute("data-id", mosque._id);
                
                mosqueCard.innerHTML = `
                    <div class="mosque-image">
                        <img src="${mosque.gambar}" alt="${mosque.nama}">
                        <div class="distance-badge">- km</div>
                    </div>
                    <div class="mosque-info">
                        <h3>${mosque.nama}</h3>
                        <div class="mosque-address">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${mosque.lokasi}</span>
                        </div>
                        <div class="mosque-highlights">
                            <span><i class="fas fa-clock"></i> Tarawih: ${mosque.waktu_selesai_tarawih}</span>
                            <span><i class="fas fa-calendar"></i> Hari: ${mosque.hari}</span>
                            <span><i class="fas fa-users"></i> Kapasitas: ${mosque.kapasitas}</span>
                            <span><i class="fas fa-concierge-bell"></i> Fasilitas: ${mosque.fasilitas ? mosque.fasilitas.join(', ') : 'Tidak ada fasilitas'}</span>
                        </div>
                    </div>
                `;

                mosqueCard.addEventListener("click", () => openMosqueDetail(mosque));
                mosqueListElement.appendChild(mosqueCard);
            });
        } catch (error) {
            mosqueListElement.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }

    // 🔹 Tampilkan Detail Masjid di Modal
    function openMosqueDetail(mosque) {
        mosqueDetailContent.innerHTML = `
            <div class="mosque-hero">
                <img src="${mosque.gambar}" alt="${mosque.nama}" class="mosque-detail-image">
                <div class="mosque-hero-info">
                    <h2>${mosque.nama}</h2>
                    <p><i class="fas fa-map-marker-alt"></i> ${mosque.lokasi}</p>
                </div>
            </div>
            <div class="mosque-details">
                <div class="mosque-detail-section">
                    <h3>Informasi Umum</h3>
                    <div class="mosque-meta">
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            <span>Tarawih selesai: ${mosque.waktu_selesai_tarawih}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-calendar"></i>
                            <span>Hari: ${mosque.hari}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-users"></i>
                            <span>Kapasitas: ${mosque.kapasitas}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-concierge-bell"></i>
                            <span>Fasilitas: ${mosque.fasilitas ? mosque.fasilitas.join(', ') : 'Tidak ada fasilitas'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="mosque-detail-section">
                    <h3>Menu Berbuka</h3>
                    <p>${mosque.menu_takjil}</p>
                </div>
            </div>
        `;

        document.getElementById("mosqueDetailModal").style.display = "block";
    }

    // 🔹 Tutup Modal
    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("mosqueDetailModal").style.display = "none";
    });

    // 🔹 Pencarian Masjid
    document.querySelector(".search-button").addEventListener("click", async () => {
        const searchTerm = document.querySelector(".search-input").value.toLowerCase();
        
        try {
            const response = await fetch("http://localhost:3000/masjid");
            if (!response.ok) throw new Error("Gagal mengambil data masjid");
            const mosques = await response.json();

            const filteredMosques = mosques.filter(masjid => 
                masjid.nama.toLowerCase().includes(searchTerm) ||
                masjid.lokasi.toLowerCase().includes(searchTerm)
            );

            mosqueListElement.innerHTML = "";

            if (filteredMosques.length === 0) {
                mosqueListElement.innerHTML = "<p>Tidak ada masjid yang ditemukan</p>";
                return;
            }

            filteredMosques.forEach(mosque => {
                const mosqueCard = document.createElement("div");
                mosqueCard.className = "mosque-card";
                mosqueCard.innerHTML = `
                    <div class="mosque-image">
                        <img src="${mosque.gambar}" alt="${mosque.nama}">
                        <div class="distance-badge">- km</div>
                    </div>
                    <div class="mosque-info">
                        <h3>${mosque.nama}</h3>
                        <div class="mosque-address">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${mosque.lokasi}</span>
                        </div>
                        <div class="mosque-highlights">
                            <span><i class="fas fa-clock"></i> Tarawih: ${mosque.waktu_selesai_tarawih}</span>
                            <span><i class="fas fa-calendar"></i> Hari: ${mosque.hari}</span>
                            <span><i class="fas fa-users"></i> Kapasitas: ${mosque.kapasitas}</span>
                            <span><i class="fas fa-concierge-bell"></i> Fasilitas: ${mosque.fasilitas ? mosque.fasilitas.join(', ') : 'Tidak ada fasilitas'}</span>
                        </div>
                    </div>
                `;
                mosqueCard.addEventListener("click", () => openMosqueDetail(mosque));
                mosqueListElement.appendChild(mosqueCard);
            });
        } catch (error) {
            mosqueListElement.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });

    loadMosqueList();
});
