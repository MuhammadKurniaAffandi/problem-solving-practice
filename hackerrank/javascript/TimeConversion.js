/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Time Conversion
Link: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

*/

function timeConversion(s) {
  // 1. Pisahkan string input menjadi komponen jam, menit, detik, dan indikator AM/PM
  let [jam, menit, detik] = s.slice(0, 8).split(":");
  let indikator = s.slice(8);

  // 2. Konversi jam, menit, dan detik dari string ke angka
  jam = parseInt(jam);
  menit = parseInt(menit);
  detik = parseInt(detik);
  // 3. Periksa indikator AM/PM untuk menentukan konversi jam
  if (indikator === "AM") {
    // 4. Jika indikator adalah AM dan jam adalah 12, set jam ke 0 (midnight)
    if (jam === 12) {
      jam = 0;
    }
  } else {
    // 5. Jika indikator adalah PM dan jam kurang dari 12, tambahkan 12 ke jam
    if (jam < 12) {
      jam += 12;
    }
  }
  // 6. Format jam, menit, dan detik kembali ke string dengan format HH:MM:SS
  let jam_str = jam.toString().padStart(2, "0");
  let menit_str = menit.toString().padStart(2, "0");
  let detik_str = detik.toString().padStart(2, "0");
  return `${jam_str}:${menit_str}:${detik_str}`;
}

console.log(timeConversion("07:05:45PM"));
