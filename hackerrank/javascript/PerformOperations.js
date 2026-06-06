/* 

All Contests - Hack the Interview VI (U.S.) - Array-Sum Operation
https://www.hackerrank.com/contests/hack-the-interview-vi/challenges/maximum-sum-10-1/problem?isFullScreen=true

*/

function performOperations(N, op) {
  // 1. Buat array awal [1, 2, ..., N] secara manual dan hitung total jumlahnya
  let currentSum = 0;
  const elementsExist = {}; // Objek map manual untuk pencarian cepat O(1)

  for (let i = 1; i <= N; i++) {
    currentSum += i;
    elementsExist[i] = true; // Tandai angka awal ada di dalam array
  }

  let firstElement = 1;
  let lastElement = N;

  // 2. Siapkan array untuk menampung hasil akhir tiap kueri operasi
  const outputResult = [];

  // 3. Iterasi kueri operasi 'op' secara manual menggunakan loop tradisional
  for (let i = 0; i < op.length; i++) {
    let currentOp = op[i];

    if (elementsExist[currentOp] === true) {
      // KASUS 1: Jika op ADA -> Tukar elemen pertama dan terakhir
      let temp = firstElement;
      firstElement = lastElement;
      lastElement = temp;
    } else {
      // KASUS 2: Jika op TIDAK ADA -> Ganti elemen terakhir lama dengan op baru
      currentSum = currentSum - lastElement + currentOp;
      elementsExist[lastElement] = false; // Hapus elemen terakhir lama dari map
      elementsExist[currentOp] = true; // Masukkan elemen baru ke map
      lastElement = currentOp; // Perbarui penanda elemen terakhir
    }

    // Simpan hasil jumlah kueri saat ini ke dalam array output
    outputResult[i] = currentSum;
  }

  return outputResult;
}

console.log(performOperations(3, [1, 2, 3]));
