/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Apple And Orange
Link: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // 1. Inisialisasi variabel untuk menghitung jumlah apel dan jeruk yang jatuh di rumah
  let jumlah_apel = 0;
  let jumlah_jeruk = 0;

  //   2. Loop melalui setiap jarak yang ditempuh oleh apel dan hitung posisi jatuhnya
  for (let i = 0; i < apples.length; i++) {
    // 3. Hitung posisi jatuhnya apel dengan menambahkan jarak ke posisi pohon apel
    let posisi_apel = a + apples[i];
    // 4. Cek apakah posisi jatuhnya apel berada di antara s dan t (termasuk s dan t)
    // 5. Jika ya, tambahkan 1 ke jumlah_apel
    if (posisi_apel >= s && posisi_apel <= t) jumlah_apel++;
  }

  //   6. Loop melalui setiap jarak yang ditempuh oleh jeruk dan hitung posisi jatuhnya
  for (let i = 0; i < oranges.length; i++) {
    // 7. Hitung posisi jatuhnya jeruk dengan menambahkan jarak ke posisi pohon jeruk
    let posisi_jeruk = b + oranges[i];
    // 8. Cek apakah posisi jatuhnya jeruk berada di antara s dan t (termasuk s dan t)
    // 9. Jika ya, tambahkan 1 ke jumlah_jeruk
    if (posisi_jeruk >= s && posisi_jeruk <= t) jumlah_jeruk++;
  }
  //
  console.log(jumlah_apel);
  console.log(jumlah_jeruk);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
