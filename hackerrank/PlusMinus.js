/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Plus Minus
Link: https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

*/

function plusMinus(arr) {
  // 1. Dapatkan total panjang array dan siapkan counter
  let n = arr.length;
  let jumlah_positif = 0;
  let jumlah_negatif = 0;
  let jumlah_nol = 0;

  // 2. Lakukan looping untuk menghitung masing-masing
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      jumlah_positif++;
    } else if (arr[i] < 0) {
      jumlah_negatif++;
    } else {
      jumlah_nol++;
    }
  }

  // 3. Hitung rasio
  let rasio_positif = jumlah_positif / n;
  let rasio_negatif = jumlah_negatif / n;
  let rasio_nol = jumlah_nol / n;

  // 4. Cetak hasil dengan 6 desimal
  console.log(rasio_positif.toFixed(6));
  console.log(rasio_negatif.toFixed(6));
  console.log(rasio_nol.toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
