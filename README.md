# Tugas-Responsi-PWEB
## Yudhistira Rizky Ramadhan (G1A024079)
## Penjelasan
Program ini merupakan sebuah halaman web interaktif yang dibuat menggunakan HTML, CSS, dan JavaScript untuk menentukan “persona digital” berdasarkan input pengguna. Secara umum, struktur program dimulai dari deklarasi <!DOCTYPE html> yang menandakan bahwa dokumen ini menggunakan HTML5, kemudian diikuti dengan tag <html> yang membungkus seluruh isi halaman.

Pada bagian <head>, terdapat beberapa elemen penting seperti <meta charset="UTF-8"> yang berfungsi agar teks dapat ditampilkan dengan baik (termasuk simbol dan emoji), serta <meta name="viewport"> agar tampilan responsif di berbagai perangkat. Tag <title> digunakan untuk memberi nama halaman yang muncul di tab browser. Selain itu, di dalam <style> terdapat seluruh pengaturan tampilan menggunakan CSS.

Bagian CSS mengatur keseluruhan visual halaman. Selector body digunakan untuk menentukan font, warna teks, dan overflow agar halaman tidak bisa scroll ke samping. Background utama dibuat menggunakan body::before yang mengambil gambar GIF sebagai latar, lalu diberi efek blur() supaya terlihat halus. Kemudian body::after digunakan sebagai lapisan tambahan berupa warna hitam transparan agar teks tetap mudah dibaca. Elemen .container menggunakan flexbox (display: flex) untuk menyusun card agar rapi dan berada di tengah. Sementara itu, .card berfungsi sebagai kotak utama yang berisi konten, dengan tambahan efek shadow dan hover agar terlihat lebih modern.

Form input seperti <input> dan <select> digunakan untuk menerima data dari pengguna, yaitu nama, hobi, dan angka keberuntungan. Semua elemen input ini dihubungkan dengan JavaScript melalui atribut id, sehingga nilainya bisa diambil menggunakan document.getElementById(). Tombol <button> digunakan untuk menjalankan fungsi seperti generate persona dan random angka.

Fitur musik dibuat menggunakan elemen <audio> yang memiliki atribut loop, sehingga lagu akan diputar terus menerus. Sumber lagu ditentukan melalui <source src="...">. Kontrol musik dilakukan melalui fungsi JavaScript toggleMusic(), yang bekerja dengan cara mengecek kondisi boolean isPlaying. Jika musik sedang berjalan, maka fungsi akan memanggil pause(), dan jika tidak, maka akan memanggil play(). Selain itu, isi dari elemen seperti tombol dan teks lagu diubah menggunakan innerHTML untuk memberikan feedback ke pengguna.

Fungsi randomAngka() digunakan untuk menghasilkan angka acak dengan rumus Math.floor(Math.random() * 10) + 1, yang memastikan hasil berada di antara 1 sampai 10. Angka ini kemudian langsung dimasukkan ke dalam input field sehingga pengguna tidak perlu mengetik secara manual.

Bagian utama dari program ini ada pada fungsi generatePersona(). Fungsi ini mengambil nilai dari input nama, hobi, dan angka, lalu melakukan validasi sederhana untuk memastikan semua data telah diisi. Data persona disimpan dalam bentuk objek personaList yang berisi beberapa array berdasarkan kategori hobi. Pemilihan persona dilakukan dengan cara mengakses array menggunakan indeks angka - 1, karena array dimulai dari indeks 0. Hasil akhirnya kemudian ditampilkan ke dalam elemen hasil menggunakan template string (${}), sehingga teks bisa digabung dengan variabel secara dinamis.

Pada bagian profil, gambar ditampilkan menggunakan tag <img> dan diberi efek animasi menggunakan @keyframes sehingga terlihat bergerak naik turun (floating). Ketika gambar diklik, fungsi openModal() akan dijalankan untuk menampilkan gambar dalam ukuran besar. Modal ini dibuat menggunakan <div> yang disembunyikan secara default (display: none) dan akan diubah menjadi flex saat dibuka. Fungsi closeModal() digunakan untuk menutup kembali tampilan tersebut.

Selain itu, terdapat juga bagian link sosial media yang menggunakan tag <a> dengan atribut target="_blank" agar terbuka di tab baru. Ini berguna agar pengguna tetap berada di halaman utama saat membuka link eksternal.
