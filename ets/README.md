# Catatan Keuangan Freelancer

- Nama: [isi nama]
- NRP: 5053251032
- Persona: Pekerja lepas (freelancer)

Aku freelancer yang dibayar per proyek. Masalahnya, klien sering telat
membayar, jadi uang yang sebenarnya sudah menjadi hakku belum bisa dipakai
dan sulit dilacak siapa yang masih berutang.

## Fitur yang selesai

- W1–W6: tambah transaksi, daftar dinamis (terbaru di atas, format Rupiah),
  hapus dengan konfirmasi, data persisten di localStorage, ringkasan otomatis,
  validasi form dengan pesan di halaman.
- Fitur khas: tagihan ke klien berstatus "belum dibayar" / "lunas". Tagihan
  yang ditandai lunas otomatis masuk ke daftar transaksi sebagai pemasukan, dan
  total piutang (jumlah tagihan belum dibayar) tampil di ringkasan.
- Bonus: edit transaksi, filter (jenis, kategori, rentang tanggal) plus
  pencarian catatan, tampilan responsif sampai 360px.

## Belum selesai

- Budget per kategori.
- Ekspor dan impor JSON.
- Tanggal pemasukan dari tagihan lunas memakai tanggal tagihan, bukan tanggal
  pembayaran.
