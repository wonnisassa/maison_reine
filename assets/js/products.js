// Maison Reine product catalog (shared by detail.html and keranjang.html)
window.MAISON_WA = '62882007282358';
window.MAISON_PRODUCTS = [
  { slug: "noir-elegance-dress", name: "Noir Elegance Dress", price: 3650000, collection: "signature", image: "assets/images/prod-noir-elegance.jpg", desc: "Gaun hitam klasik dengan siluet anggun yang memanjangkan tubuh. Pilihan tepat untuk acara malam formal." },
  { slug: "midnight-grace-dress", name: "Midnight Grace Dress", price: 2450000, collection: "signature", image: "assets/images/prod-midnight-grace.png", desc: "Gaun biru gelap yang lembut dan tenang, nyaman dipakai seharian namun tetap terlihat istimewa." },
  { slug: "luna-flow-skirt", name: "Luna Flow Skirt", price: 1850000, collection: "signature", image: "assets/images/prod-luna-flow.jpg", desc: "Rok flowy yang bergerak lembut mengikuti langkah. Mudah dipadukan dengan atasan polos maupun blazer." },
  { slug: "crystal-muse-heels", name: "Crystal Muse Heels", price: 2250000, collection: "signature", image: "assets/images/prod-crystal-muse.jpg", desc: "Heels dengan sentuhan berkilau yang manis, memberi kesan tinggi tanpa mengorbankan kenyamanan." },
  { slug: "crimson-empress-cheongsam-set", name: "Crimson Empress Cheongsam Set", price: 3850000, collection: "exclusive", image: "assets/images/prod-crimson-empress.jpg", desc: "Set cheongsam merah dengan detail brokat, memadukan anggunnya busana Timur klasik dengan potongan modern." },
  { slug: "blossom-pearl-qipao-dress", name: "Blossom Pearl Qipao Dress", price: 3250000, collection: "exclusive", image: "assets/images/prod-blossom-pearl.jpg", desc: "Qipao lembut dengan aksen mutiara, manis untuk acara keluarga maupun perayaan." },
  { slug: "ivory-brocade-wrap-skirt", name: "Ivory Brocade Wrap Skirt", price: 2150000, collection: "exclusive", image: "assets/images/prod-ivory-brocade.jpg", desc: "Rok lilit warna gading bermotif brokat, memberi kesan bersih dan mewah di setiap kesempatan." },
  { slug: "midnight-siren-gown", name: "Midnight Siren Gown", price: 4950000, collection: "exclusive", image: "assets/images/prod-midnight-siren.jpg", desc: "Gaun malam panjang yang dramatis namun tetap elegan, untuk momen yang tak terlupakan." },
  { slug: "rose-pearl-evening-gown", name: "Rose Pearl Evening Gown", price: 4250000, collection: "japanese", image: "assets/images/prod-rose-pearl.png", desc: "Gaun malam dengan nuansa mawar dan mutiara, lembut sekaligus memukau di bawah cahaya." },
  { slug: "noir-dame-harness-dress", name: "Noir Dame Harness Dress", price: 2950000, collection: "japanese", image: "assets/images/prod-noir-dame.png", desc: "Gaun hitam dengan detail harness yang berani, untuk tampilan malam yang berbeda dan percaya diri." },
  { slug: "crimson-peony-hanfu", name: "Crimson Peony Hanfu", price: 3350000, collection: "japanese", image: "assets/images/prod-crimson-peony.png", desc: "Hanfu merah peony yang mengalir anggun, perpaduan budaya klasik dan kenyamanan modern." },
  { slug: "winter-rose-cape-dress", name: "Winter Rose Cape Dress", price: 3850000, collection: "japanese", image: "assets/images/prod-winter-rose.jpg", desc: "Gaun dengan cape yang hangat dan anggun, cocok untuk malam yang dingin namun tetap ingin tampil istimewa." },
];
window.formatRp = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };
window.findProduct = function (slug) { return window.MAISON_PRODUCTS.find(function (p) { return p.slug === slug; }); };
window.findProductByName = function (name) { return window.MAISON_PRODUCTS.find(function (p) { return p.name === name; }); };
