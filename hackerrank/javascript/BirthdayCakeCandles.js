/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Birthday Cake Candles
Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

*/

function birthdayCakeCandles(candles) {
  // 1. Inisialisasi variabel untuk menyimpan tinggi maksimal dan jumlah lilin yang tertinggi
  let tinggi_maksimal = candles[0];
  let jumlah_lilin = 1;

  //   2. Iterasi melalui array untuk menemukan tinggi maksimal dan menghitung jumlah lilin yang memiliki tinggi tersebut
  for (let i = 1; i < candles.length; i++) {
    // 3. Periksa apakah elemen saat ini lebih tinggi dari tinggi maksimal yang ditemukan sejauh ini
    if (candles[i] > tinggi_maksimal) {
      tinggi_maksimal = candles[i];
      jumlah_lilin = 1;
      // 4. Periksa apakah elemen saat ini memiliki tinggi yang sama dengan tinggi maksimal yang ditemukan sejauh ini
    } else if (candles[i] === tinggi_maksimal) {
      jumlah_lilin++;
    }
  }
  //   5. Kembalikan jumlah lilin yang memiliki tinggi maksimal

  return jumlah_lilin;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
