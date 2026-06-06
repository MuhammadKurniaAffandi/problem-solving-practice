/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Staircase
Link: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

*/

function staircase(n) {
  // Tahap 1: Perulangan Utama (Baris)
  for (let i = 1; i <= n; i++) {
    // Tahap 2: Inisialisasi Wadah Baris
    let baris = "";

    // Tahap 3: Perulangan Bersarang / Nested Loop (Kolom)
    for (let j = 1; j <= n; j++) {
      // Tahap 4: Percabangan Logika (If-Else)
      i + j <= n ? (baris += " ") : (baris += "#");
    }

    // Tahap 5: Cetak Baris
    console.log(baris);
  }
}

staircase(6);
