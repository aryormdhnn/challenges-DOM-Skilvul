// Membuat elemen HTML baru
const newElement = document.createElement("p");
newElement.textContent = "Ini adalah teks dalam elemen baru."; // Menambahkan teks ke dalam elemen baru
newElement.classList.add("new-class"); // Menambahkan kelas CSS ke elemen baru
newElement.id = "new-id"; // Menetapkan ID elemen baru

// Menambahkan elemen baru ke dalam dokumen
const parent = document.getElementById("parent-element");
parent.appendChild(newElement);
