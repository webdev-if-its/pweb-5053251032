# PROSES

## Persona dan masalahnya
Freelancer dengan pemasukan per proyek; klien sering terlambat membayar,
sehingga perlu mencatat tagihan dan melihat total piutang.

## Rancangan struktur data
state = { transaksi: [], tagihan: [], editId, hapusId, filter }.
- transaksi: { id, tanggal, jenis, kategori, nominal, catatan }
- tagihan: { id, tanggal, klien, nominal, status: "belum dibayar" | "lunas" }
Disimpan dua kunci localStorage (transaksi dan tagihan) sebagai JSON array.
Tagihan lunas membuat satu objek baru di transaksi, jadi fitur khas memakai
data yang sama dengan ringkasan dan daftar.

## Keputusan desain
Semua tampilan lewat satu fungsi render() yang membaca state. Setiap aksi
mengubah state, menyimpan, lalu memanggil render(), jadi ringkasan dan daftar
selalu sinkron.

## Kendala
1. Date.now() dan confirm() belum diajarkan. id dibuat dari id terbesar + 1
   lewat loop (buatId), dan konfirmasi hapus memakai state.hapusId: tombol
   Hapus mengubah baris menjadi "Hapus transaksi ini? Ya / Batal".
2. Tanpa new Date(), tanggal pembayaran tagihan tidak bisa diambil otomatis.
   Pemasukan hasil tagihan lunas memakai tanggal tagihan.
