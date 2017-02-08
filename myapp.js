//Aplikasi bot chat sederhana

var Chat = function(nama, pertanyaan) {
  this.nama          = nama;
  this.pertanyaan    = pertanyaan; 
  
  this.introduction   = function(othernama) {
    console.log(admin.nama + ': Hai ' + othernama + ', perkenalkan saya ' + this.nama);
    console.log(admin.nama + ': Silahkan pilih menu untuk memulai pertanyaan');
  }
  
}

var pelanggan = new Chat('Rizal', 3);
var admin = new Chat('Sifa');
var pilpertanyaan = ['Cara order', ' Cara transaksi', 'Batal'];

admin.introduction(pelanggan.nama);

for (var i=0; i<pilpertanyaan.length; i++) {
  console.log(i + ' - ' + pilpertanyaan[i]);
}



if(pelanggan.pertanyaan == 0) {
  console.log(pelanggan.nama + ': memilih No.' + pelanggan.pertanyaan);
  console.log(admin.nama + ': Baik ' + pelanggan.nama + ' anda telah memilih pertanyaan No. ' + pelanggan.pertanyaan);
  console.log(admin.nama + ': Untuk melakukan order '+ pelanggan.nama +' hanya perlu klik tombol pemesanan dan isi form pemesanan dengan lengkap ya.');  
}
else if (pelanggan.pertanyaan==1){
  console.log(pelanggan.nama + ':  memilih No.' + pelanggan.pertanyaan);
  console.log(admin.nama + ': Baik ' + pelanggan.nama + ' anda telah memilih pertanyaan No. ' + pelanggan.pertanyaan);

  console.log(admin.nama + ': Untuk melakukan transaksi '+ pelanggan.nama +' bisa transfer ke rekening BCA kami. Berikut Rekeningnya: Bank BCA - 078xxx876 - A/N. Adul Suradul');
}
else if(pelanggan.pertanyaan == 2){
  console.log(admin.nama + ': Baik ' + pelanggan.nama + ' terimakasih');
}

else {
  console.log(admin.nama + ': Maaf pilihan pertanyaan tidak tersedia');
}