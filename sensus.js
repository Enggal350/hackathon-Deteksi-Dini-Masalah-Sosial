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
