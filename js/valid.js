// Fungsi untuk memeriksa input kosong pada form pertama
function validateFirstForm() {
  const fullName = document.getElementById("full_name").value.trim();
  const phoneNumber = document.getElementById("phone_number").value.trim();

  if (!fullName || !phoneNumber) {
    Swal.fire({
      icon: "warning",
      title: "Form tidak lengkap",
      text: "Nama dan Nomor Telepon harus diisi!",
    });
    return false; // Menghentikan proses jika ada field yang kosong
  }

  // Tambahkan validasi untuk memastikan nomor telepon hanya angka
  if (!/^\d+$/.test(phoneNumber)) {
    Swal.fire({
      icon: "warning",
      title: "Input tidak valid",
      text: "Nomor Telepon harus terdiri dari angka saja!",
    });
    return false; // Menghentikan proses jika nomor tidak valid
  }

  return true; // Lanjut ke langkah berikutnya jika semua field terisi
}

// Fungsi untuk memeriksa input kosong pada form kedua
function validateSecondForm() {
  const otp = document.getElementById("otp").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!otp || !password) {
    Swal.fire({
      icon: "warning",
      title: "Form tidak lengkap",
      text: "OTP dan Kata Sandi harus diisi!",
    });
    return false; // Menghentikan proses jika ada field yang kosong
  }

  // Tambahkan validasi untuk memastikan OTP hanya angka
  if (!/^\d+$/.test(otp)) {
    Swal.fire({
      icon: "warning",
      title: "Input tidak valid",
      text: "OTP harus terdiri dari angka saja!",
    });
    return false; // Menghentikan proses jika OTP tidak valid
  }

  return true; // Lanjut ke langkah berikutnya jika semua field terisi
}

// Fungsi untuk memeriksa input kosong pada form ketiga
function validateThirdForm() {
  const password = document.getElementById("password").value.trim();

  if (!password) {
    Swal.fire({
      icon: "warning",
      title: "Form tidak lengkap",
      text: "Kata Sandi harus diisi!",
    });
    return false; // Menghentikan proses jika ada field yang kosong
  }

  return true; // Lanjut ke langkah berikutnya jika semua field terisi
}
