/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Mini-Max Sum
Link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

*/

function miniMaxSum(arr) {
  //   1. Inisialisasi variabel untuk menyimpan total jumlah, angka terkecil, dan angka terbesar
  let total_jumlah = 0;
  let angka_terkecil = arr[0];
  let angka_terbesar = arr[0];
  let jumlah_minimum, jumlah_maksimum;

  //   2. Iterasi melalui array untuk menghitung total jumlah, menemukan angka terkecil dan terbesar
  for (let i = 0; i < arr.length; i++) {
    // 3. Tambahkan setiap elemen ke total jumlah
    total_jumlah += arr[i];
    // 4. Periksa apakah elemen saat ini lebih kecil dari angka terkecil yang ditemukan sejauh ini
    if (arr[i] < angka_terkecil) {
      angka_terkecil = arr[i];
    }
    // 5. Periksa apakah elemen saat ini lebih besar dari angka terbesar yang ditemukan sejauh ini
    if (arr[i] > angka_terbesar) {
      angka_terbesar = arr[i];
    }
  }
  //   6. Hitung jumlah minimum dengan mengurangi angka terbesar dari total jumlah
  jumlah_minimum = total_jumlah - angka_terbesar;

  //   7. Hitung jumlah maksimum dengan mengurangi angka terkecil dari total jumlah
  jumlah_maksimum = total_jumlah - angka_terkecil;
  console.log(jumlah_minimum + " " + jumlah_maksimum);
}

miniMaxSum([1, 2, 3, 4, 5]);
