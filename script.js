// Data Menu Cireng Mput (Bisa Anda tambah atau edit dengan mudah di sini)
const daftarMenu = [
    {
        nama: "Cireng Mput Original",
        harga: "Rp 15.000",
        deskripsi: "Cireng klasik dengan bumbu rujak khas yang pedas manis dan mantap.",
        gambar: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80"
    },
    {
        nama: "Cireng Mput Isi Ayam Suwir Pedas",
        harga: "Rp 20.000",
        deskripsi: "Cireng gurih berukuran jumbo dengan isian daging ayam suwir bumbu mercon yang pedasnya nampol.",
        gambar: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
    },
    {
        nama: "Cireng Mput Keju Meleleh",
        harga: "Rp 22.000",
        deskripsi: "Perpaduan cireng renyah dengan lelehan keju mozarella di dalam yang gurih dan creamy.",
        gambar: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    }
];

// Nomor WhatsApp tujuan pemesanan (Ganti dengan nomor Anda, format: 628xxxxxxxxxx)
const nomorWhatsApp = "6281234567890";

// Fungsi untuk merender/menampilkan menu ke halaman HTML secara dinamis
function tampilkanMenu() {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    daftarMenu.forEach(menu => {
        // Buat format pesan otomatis untuk WhatsApp
        const pesan = encodeURIComponent(`Halo Kak, saya ingin memesan:\n\n*${menu.nama}* (${menu.harga})\n\nMohon info ketersediaannya ya!`);
        const linkWA = `https://wa.me/${6289517164830}?text=${pesan}`;

        // Buat elemen card HTML
        const card = document.createElement("div");
        card.className = "menu-card bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between";
        
        card.innerHTML = `
            <div>
                <img src="${menu.gambar}" alt="${menu.nama}" class="w-full h-48 object-cover">
                <div class="p-5">
                    <h4 class="font-bold text-lg text-slate-900">${menu.nama}</h4>
                    <p class="text-orange-600 font-semibold mt-1">${menu.harga}</p>
                    <p class="text-slate-600 text-sm mt-3">${menu.deskripsi}</p>
                </div>
            </div>
            <div class="p-5 pt-0">
                <a href="${linkWA}" target="_blank" class="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition text-sm">
                    Pesan via WhatsApp
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", tampilkanMenu);