// Data Menu Resmi Cireng Mput Menggunakan Foto Lokal Asli
const daftarMenu = [
    {
        nama: "Cikumy (Cireng Kuah Keju Creamy)",
        harga: "Rp 5.000",
        badge: "Best Seller 🧀",
        deskripsi: "Cireng kuah dengan keju creamy yang gurih nikmat. (Isi: 2 keju & 2 ayam).",
        gambar: "cikumy.jpg"
    },
    {
        nama: "PISCOKE (Pisang Coklat Keju)",
        harga: "Rp 5.000",
        badge: "Manis ✨",
        deskripsi: "Pisang berbalut kulit renyah dengan lumeran coklat dan taburan keju. (Isi: @3 pcs)",
        gambar: "piscoke.jpg"
    },
    {
        nama: "CIDUNG (Cireng Bandung)",
        harga: "Rp 5.000",
        badge: "Classic 🔥",
        deskripsi: "Cireng khas Bandung yang renyah di luar dan kenyal di dalam. (Isi: @2 pcs)",
        gambar: "Cidung.webp"
    }
];

// Nomor WhatsApp tujuan pemesanan (Silakan ganti dengan nomor Anda yang aktif)
const nomorWhatsApp = "6281234567890";

function tampilkanMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;
    
    container.innerHTML = "";

    daftarMenu.forEach(menu => {
        const pesan = encodeURIComponent(`Halo Kak, saya ingin memesan:\n\n*${menu.nama}* (${menu.harga})\n\nMetode Pembayaran: Transfer QRIS / Cash\nMohon info ketersediaannya ya!`);
        const linkWA = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;

        const card = document.createElement("div");
        card.className = "menu-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group";
        
        card.innerHTML = `
            <div class="relative overflow-hidden">
                <span class="absolute top-4 left-4 z-10 bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    ${menu.badge}
                </span>
                <img src="${menu.gambar}" alt="${menu.nama}" class="w-full h-56 object-cover group-hover:scale-105 transition duration-500">
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h4 class="font-bold text-xl text-slate-900 group-hover:text-orange-600 transition">${menu.nama}</h4>
                    <p class="text-orange-600 font-bold text-lg mt-1">${menu.harga}</p>
                    <p class="text-slate-600 text-sm mt-3 leading-relaxed">${menu.deskripsi}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100">
                    <div class="text-xs font-semibold text-slate-500 mb-2">💳 Pembayaran: QRIS / Cash</div>
                    <a href="${linkWA}" target="_blank" class="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-emerald-600/20 transition text-sm">
                        <span>Pesan via WhatsApp</span>
                    </a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", tampilkanMenu);