CREATE TABLE penduduk (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100),
  usia INT,
  kecamatan VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_theme (
  user_id INT PRIMARY KEY,
  theme VARCHAR(20) NOT NULL
);
