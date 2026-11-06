// PERTEMUAN 9 — Service Worker dan PWA
//
// Baca SOAL.md untuk urutan levelnya. File ini dites dengan cara
// "memalsukan" self, caches, dan fetch — event install/activate/fetch
// dipanggil langsung oleh test, bukan lewat browser sungguhan.

const NAMA_CACHE = 'taman-baca-v1';
const ASET_UTAMA = ['/', '/index.html', '/style.css', '/offline.html'];

function adalahAsetStatis(request) {
  return ASET_UTAMA.some((aset) => request.url === aset || request.url.endsWith(aset));
}

// Level 5 — TODO: coba ambil dari cache dulu (caches.match). Kalau ada,
// kembalikan itu. Kalau tidak ada, baru fetch() ke jaringan.
async function cacheFirst(request) {
  return fetch(request);
}

// Level 6 — TODO: coba fetch() ke jaringan dulu. Kalau berhasil,
// kembalikan hasilnya. Kalau gagal (promise-nya reject), baru coba ambil
// dari cache. Kalau di cache juga tidak ada, biarkan error itu terus
// menyebar (jangan ditangkap diam-diam dengan mengembalikan undefined).
async function networkFirst(request) {
  return fetch(request);
}

// Level 3 — TODO: daftarkan listener 'install' lewat
// self.addEventListener('install', (event) => { ... }).
//
// Level 4 — di dalam listener itu: pakai event.waitUntil(...) untuk
// membuka cache bernama NAMA_CACHE (caches.open), lalu addAll(ASET_UTAMA).

// Level 3 — TODO: daftarkan listener 'activate'.
//
// Level 9 — di dalam listener itu: pakai event.waitUntil(...) untuk
// menghapus semua cache LAMA (nama cache yang BUKAN NAMA_CACHE saat ini).
// Pakai caches.keys() untuk melihat semua nama cache yang ada, lalu
// caches.delete(nama) untuk yang sudah usang. Jangan hapus NAMA_CACHE
// yang sedang dipakai.

// Level 3 — TODO: daftarkan listener 'fetch'.
//
// Level 7 — di dalam listener itu, route permintaan ke strategi yang
// tepat: adalahAsetStatis(request) ? cacheFirst(request) :
// networkFirst(request). Panggil event.respondWith(...) dengan hasilnya.
//
// Level 8 — khusus untuk permintaan navigasi halaman
// (request.mode === 'navigate') yang gagal total (networkFirst
// menolak/reject), kembalikan caches.match('/offline.html') sebagai
// cadangan, alih-alih membiarkan halamannya gagal dimuat.
