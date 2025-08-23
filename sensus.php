<?php
// --- Koneksi Database ---
$host = "localhost";
$user = "root";  // ganti sesuai konfigurasi
$pass = "";      // ganti sesuai konfigurasi
$db   = "sensus2025";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}

// --- Simpan data sensus ---
$msg = "";
if (isset($_POST['submit_sensus'])) {
  $nama = $_POST['nama'];
  $usia = $_POST['usia'];
  $kecamatan = $_POST['kecamatan'];
  $sql = "INSERT INTO penduduk (nama, usia, kecamatan) VALUES ('$nama', '$usia', '$kecamatan')";
  if ($conn->query($sql) === TRUE) {
    $msg = "Data sensus berhasil disimpan!";
  } else {
    $msg = "Error: " . $conn->error;
  }
}

// --- Simpan tema user (contoh user_id = 1) ---
if (isset($_POST['save_theme'])) {
  $theme = $_POST['theme'];
  $conn->query("INSERT INTO user_theme (user_id, theme) VALUES (1, '$theme') 
                ON DUPLICATE KEY UPDATE theme='$theme'");
  echo "OK"; exit;
}

// --- Ambil tema user (default light) ---
$res = $conn->query("SELECT theme FROM user_theme WHERE user_id=1");
$themeDB = "light";
if ($res && $res->num_rows > 0) {
  $row = $res->fetch_assoc();
  $themeDB = $row['theme'];
}
?>
<!DOCTYPE html>
<html lang="id" data-theme="<?php echo $themeDB; ?>">
<head>
  <meta charset="UTF-8">
  <title>Sensus Penduduk 2025</title>
  <style>
    body { font-family: Arial, sans-serif; margin:20px; }
    [data-theme="light"] { background:#f9f9f9; color:#222; }
    [data-theme="dark"] { background:#222; color:#f9f9f9; }
    .container { max-width:500px; margin:auto; padding:20px; border-radius:10px; }
    button { padding:8px 14px; margin-top:10px; cursor:pointer; }
    input { width:100%; padding:8px; margin:5px 0; }
    .msg { margin-top:10px; font-weight:bold; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Formulir Sensus Penduduk 2025</h2>
    <form method="post">
      <input type="text" name="nama" placeholder="Nama Lengkap" required />
      <input type="number" name="usia" placeholder="Usia" required />
      <input type="text" name="kecamatan" placeholder="Kecamatan" required />
      <button type="submit" name="submit_sensus">Kirim Data</button>
    </form>
    <p class="msg"><?php echo $msg; ?></p>

    <hr>
    <button id="themeToggle">Ganti Tema</button>
  </div>

<script>
// --- Tema toggle dengan localStorage + simpan ke DB ---
const toggle = document.getElementById('themeToggle');
const applyTheme = (t)=>{document.documentElement.setAttribute('data-theme', t)};
const saved = localStorage.getItem('theme');

// Ambil tema dari localStorage jika ada
if(saved){applyTheme(saved)}

toggle?.addEventListener('click', ()=>{
  const current = document.documentElement.getAttribute('data-theme');
  const now = current === 'light' ? 'dark' : 'light';

  applyTheme(now);
  localStorage.setItem('theme', now);

  // Kirim ke database pakai fetch
  fetch("", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: "save_theme=1&theme=" + now
  });
});
</script>
</body>
</html>
