// Sample data (replace with your API data)
const mosques = [
    {
        id: 1,
        name: "Masjid Istiqlal",
        address: "Jl. Taman Wijaya Kusuma, Jakarta Pusat",
        distance: "2.5 km",
        capacity: 200000,
        tarawihDuration: "2 jam",
        iftarMenu: ["Kurma", "Air Mineral", "Nasi Kotak", "Es Buah"],
        facilities: ["Tempat Wudhu", "Toilet", "Area Parkir", "AC"],
        image: "/api/placeholder/800/500"
    },
    {
        id: 2,
        name: "Masjid Raya Ciputat",
        address: "Jl. Ir. H. Juanda No.55, Ciputat, Tangerang Selatan",
        distance: "1.2 km",
        capacity: 5000,
        tarawihDuration: "1.5 jam",
        iftarMenu: ["Kurma", "Teh Manis", "Kolak", "Gorengan"],
        facilities: ["Tempat Wudhu", "Toilet", "Parkir Motor", "Kipas Angin"],
        image: "/api/placeholder/800/500"
    },
    {
        id: 3,
        name: "Masjid Al-Azhar",
        address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
        distance: "3.8 km",
        capacity: 10000,
        tarawihDuration: "1.5 jam",
        iftarMenu: ["Kurma", "Air Mineral", "Ta'jil Bervariasi"],
        facilities: ["Tempat Wudhu", "Toilet", "Area Parkir Luas", "AC"],
        image: "/api/placeholder/800/500"
    },
    {
        id: 4,
        name: "Masjid Agung An-Nur",
        address: "Jl. Diponegoro No. 23, Menteng, Jakarta Pusat",
        distance: "4.1 km",
        capacity: 8000,
        tarawihDuration: "2 jam",
        iftarMenu: ["Kurma", "Air Zam-zam", "Bubur Sumsum", "Buah-buahan"],
        facilities: ["Tempat Wudhu", "Toilet", "Tempat Penitipan Sepatu", "AC"],
        image: "/api/placeholder/800/500"
    },
    {
        id: 5,
        name: "Masjid Jami Al-Atiq",
        address: "Jl. KH. Abdullah Syafei, Tebet, Jakarta Selatan",
        distance: "0.8 km",
        capacity: 3000,
        tarawihDuration: "1 jam",
        iftarMenu: ["Kurma", "Air Putih", "Gorengan", "Sup Buah"],
        facilities: ["Tempat Wudhu", "Toilet", "Parkir Motor", "Kipas Angin"],
        image: "/api/placeholder/800/500"
    },
    {
        id: 6,
        name: "Masjid Cut Meutia",
        address: "Jl. Cut Meutia No. 1, Menteng, Jakarta Pusat",
        distance: "5.3 km",
        capacity: 1500,
        tarawihDuration: "1.5 jam",
        iftarMenu: ["Kurma", "Air Mineral", "Kue Tradisional"],
        facilities: ["Tempat Wudhu", "Toilet", "Perpustakaan", "AC"],
        image: "/api/placeholder/800/500"
    }
];

// Load mosque list
function loadMosqueList() {
    const mosqueListElement = document.getElementById('mosqueList');
    mosqueListElement.innerHTML = '';
    
    mosques.forEach(mosque => {
        const mosqueCard = document.createElement('div');
        mosqueCard.className = 'mosque-card';
        mosqueCard.setAttribute('data-id', mosque.id);
        
        mosqueCard.innerHTML = `
            <div class="mosque-image">
                <img src="${mosque.image}" alt="${mosque.name}">
                <div class="distance-badge">${mosque.distance}</div>
            </div>
            <div class="mosque-info">
                <h3>${mosque.name}</h3>
                <div class="mosque-address">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${mosque.address}</span>
                </div>
                <div class="mosque-highlights">
                    <span><i class="fas fa-users"></i> ${mosque.capacity} orang</span>
                    <span><i class="fas fa-clock"></i> Tarawih ${mosque.tarawihDuration}</span>
                </div>
            </div>
        `;
        
        mosqueCard.addEventListener('click', () => openMosqueDetail(mosque.id));
        mosqueListElement.appendChild(mosqueCard);
    });
}

// Open mosque detail modal
function openMosqueDetail(mosqueId) {
    const mosque = mosques.find(m => m.id === mosqueId);
    if (!mosque) return;
    
    const mosqueDetailContent = document.getElementById('mosqueDetailContent');
    
    mosqueDetailContent.innerHTML = `
        <div class="mosque-hero">
            <img src="${mosque.image}" alt="${mosque.name}" class="mosque-detail-image">
            <div class="mosque-hero-info">
                <h2>${mosque.name}</h2>
                <p><i class="fas fa-map-marker-alt"></i> ${mosque.address}</p>
            </div>
        </div>
        <div class="mosque-details">
            <div class="mosque-detail-section">
                <h3>Informasi Umum</h3>
                <div class="mosque-meta">
                    <div class="meta-item">
                        <i class="fas fa-users"></i>
                        <span>Kapasitas: ${mosque.capacity} orang</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>Durasi Tarawih: ${mosque.tarawihDuration}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-location-arrow"></i>
                        <span>Jarak: ${mosque.distance}</span>
                    </div>
                </div>
            </div>
            
            <div class="mosque-detail-section">
                <h3>Menu Berbuka Puasa</h3>
                <ul class="iftar-menu">
                    ${mosque.iftarMenu.map(item => `
                        <li><i class="fas fa-utensils"></i> ${item}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="mosque-detail-section">
                <h3>Fasilitas</h3>
                <ul class="facilities-list">
                    ${mosque.facilities.map(facility => `
                        <li><i class="fas fa-check-circle"></i> ${facility}</li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="action-buttons">
                <button class="action-button directions-button">
                    <i class="fas fa-directions"></i> Petunjuk Arah
                </button>
                <button class="action-button save-button">
                    <i class="fas fa-bookmark"></i> Simpan
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('mosqueDetailModal').style.display = 'block';
}

// Close mosque detail modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('mosqueDetailModal').style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('mosqueDetailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Get location button
document.getElementById('getLocation').addEventListener('click', () => {
    const loadingAnimation = document.getElementById('loadingAnimation');
    loadingAnimation.style.display = 'block';
    
    // Simulate API call delay
    setTimeout(() => {
        loadingAnimation.style.display = 'none';
        loadMosqueList(); // Reload the list (in a real app, this would filter by location)
        alert('Menampilkan masjid terdekat dari lokasi Anda');
    }, 1500);
    
    // In a real app, you would use the Geolocation API here
    // navigator.geolocation.getCurrentPosition((position) => { ... });
});

// Search functionality
document.querySelector('.search-button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        loadMosqueList();
        return;
    }
    
    const filteredMosques = mosques.filter(mosque => 
        mosque.name.toLowerCase().includes(searchTerm) ||
        mosque.address.toLowerCase().includes(searchTerm)
    );
    
    const mosqueListElement = document.getElementById('mosqueList');
    
    if (filteredMosques.length === 0) {
        mosqueListElement.innerHTML = '<div class="no-results">Tidak ada masjid yang ditemukan</div>';
        return;
    }
    
    mosqueListElement.innerHTML = '';
    
    filteredMosques.forEach(mosque => {
        const mosqueCard = document.createElement('div');
        mosqueCard.className = 'mosque-card';
        mosqueCard.setAttribute('data-id', mosque.id);
        
        mosqueCard.innerHTML = `
            <div class="mosque-image">
                <img src="${mosque.image}" alt="${mosque.name}">
                <div class="distance-badge">${mosque.distance}</div>
            </div>
            <div class="mosque-info">
                <h3>${mosque.name}</h3>
                <div class="mosque-address">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${mosque.address}</span>
                </div>
                <div class="mosque-highlights">
                    <span><i class="fas fa-users"></i> ${mosque.capacity} orang</span>
                    <span><i class="fas fa-clock"></i> Tarawih ${mosque.tarawihDuration}</span>
                </div>
            </div>
        `;
        
        mosqueCard.addEventListener('click', () => openMosqueDetail(mosque.id));
        mosqueListElement.appendChild(mosqueCard);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', loadMosqueList);