const element = document.getElementById("element-id");

// Menetapkan konten HTML baru
const newHtml = "<p>Ini adalah konten HTML baru.</p>";
element.innerHTML = newHtml;

// Mengambil konten HTML dalam elemen
const html = element.innerHTML;
console.log(html);
