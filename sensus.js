// Grafik Statistik
window.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('pendudukChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2010', '2015', '2020', '2025'],
      datasets: [{
        label: 'Jumlah Penduduk (juta)',
        data: [237.6, 255.5, 270.2, 285.3],
        backgroundColor: '#006699'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

// Formulir Sensus
document.getElementById('formSensus').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Terima kasih, data Anda telah dikirim!";
  this.reset();
});

// Login Petugas
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  if (username === "admin" && password === "sensus2025") {
    document.getElementById('loginMessage').textContent = "Login berhasil. Selamat datang!";
  } else {
    document.getElementById('loginMessage').textContent = "Login gagal. Coba lagi.";
  }
  if (username === "admin" && password === "sensus2025") {
  window.location.href = "admin.html";
} else {
  document.getElementById('loginMessage').textContent = "Login gagal. Coba lagi.";
}
    this.reset();
});
// Formulir Sensus (dengan simpan ke localStorage)
document.getElementById('formSensus').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const dataBaru = {
    nama: inputs[0].value,
    usia: inputs[1].value,
    kecamatan: inputs[2].value
  };

  // Ambil data lama
  const dataLama = JSON.parse(localStorage.getItem('sensusData')) || [];
  dataLama.push(dataBaru);

  localStorage.setItem('sensusData', JSON.stringify(dataLama));

  document.getElementById('formMessage').textContent = "Terima kasih, data Anda telah dikirim!";
  this.reset();
});

// Inisialisasi peta
var map = L.map('map').setView([-7.3274, 109.2542], 11); // contoh koordinat Purbalingga

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Data wilayah belum didata
var belumDidata = [
    { nama: "Desa A", koordinat: [-7.3200, 109.2400] },
    { nama: "Desa B", koordinat: [-7.3400, 109.2600] }
];

// Marker wilayah belum didata
belumDidata.forEach(function(desa) {
    L.marker(desa.koordinat, {
        icon: L.icon({
            iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        })
    }).addTo(map)
    .bindPopup(`<b>${desa.nama}</b><br>Belum didata oleh petugas sensus`);
});
