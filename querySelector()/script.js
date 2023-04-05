var pertamaBuah = document.querySelector(".buah");
console.log(pertamaBuah.textContent);

var semuaSayuran = document.querySelectorAll(".sayuran");
semuaSayuran.forEach(function(sayuran) {
  console.log(sayuran.textContent);
});
