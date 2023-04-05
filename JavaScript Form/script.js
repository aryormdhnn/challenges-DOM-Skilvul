function validasiForm() {
    var nama = document.forms[0]["nama"].value;
    var email = document.forms[0]["email"].value;
    var password = document.forms[0]["password"].value;

    if (nama == "") {
      alert("Nama harus diisi.");
      return false;
    }

    if (email == "") {
      alert("Email harus diisi.");
      return false;
    }

    if (password == "") {
      alert("Password harus diisi.");
      return false;
    }

    if (password.length < 8) {
      alert("Password harus terdiri dari minimal 8 karakter.");
      return false;
    }

    return true;
  }