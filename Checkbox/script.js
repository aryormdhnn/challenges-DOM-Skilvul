function cekCheckbox() {
    var checkbox = document.getElementById("setuju");
    if (checkbox.checked) {
      alert("Anda telah menyetujui syarat dan ketentuan.");
    } else {
      alert("Silakan setujui syarat dan ketentuan terlebih dahulu.");
    }
  }