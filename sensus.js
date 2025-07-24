const usiaSlider = document.getElementById("usiaRange");
const usiaValue = document.getElementById("usiaValue");

usiaSlider.oninput = function () {
  usiaValue.textContent = this.value;
};

let gender = "";

function selectGender(jk) {
  gender = jk;
  document.getElementById("pria").classList.remove("selected");
  document.getElementById("wanita").classList.remove("selected");

  if (jk === 'L') {
    document.getElementById("pria").classList.add("selected");
  } else {
    document.getElementById("wanita").classList.add("selected");
  }
}

function mulai() {
  const kota = document.getElementById("kota").value;
  const usia = usiaSlider.value;

  if (!kota || !gender) {
    alert("Harap isi semua data dengan lengkap.");
    return;
  }

  alert(`Data Anda:\nKota: ${kota}\nUsia: ${usia} tahun\nJenis Kelamin: ${gender === 'L' ? 'Laki-laki' : 'Perempuan'}`);
    window.location.href = "tampilan.html";
}