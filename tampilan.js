window.addEventListener("load", () => {
  // Ubah teks dan warna loading saat halaman dimuat
  document.querySelector(".loading-text").textContent = "LOADING...";
  document.querySelector(".loading-text").style.color = "blue";

  // Setelah 3 detik, hilangkan loading dan tampilkan selamat datang
  setTimeout(() => {
    document.querySelector(".loading-container").style.display = "none";

    // Buat elemen h1 secara dinamis
    const welcome = document.createElement("h1");
    welcome.textContent = "Selamat datang di Sistem BPS";
    welcome.style.textAlign = "center";
    welcome.style.marginTop = "50px"; // Geser dari tengah ke atas
    welcome.style.color = "blue";

    // Tambahkan elemen ke atas body
    document.body.insertBefore(welcome, document.body.firstChild);

    // Styling body
    document.body.style.backgroundColor = "white";
    document.body.style.textAlign = "center";
  }, 3000);
});

// Slider usia
const usiaSlider = document.getElementById("usiaRange");
const usiaValue = document.getElementById("usiaValue");

usiaSlider.oninput = function () {
  usiaValue.textContent = this.value;
};
