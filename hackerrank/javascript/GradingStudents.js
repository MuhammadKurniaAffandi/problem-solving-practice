/* 

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Warmup: Grading Students
Link: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

*/

function gradingStudents(grades) {
  // 1. Buat array kosong untuk menyimpan nilai akhir
  let finalGrades = [];
  // 2. Loop melalui setiap nilai dalam array grades
  for (let i = 0; i < grades.length; i++) {
    // 3. Simpan nilai saat ini dalam variabel nilai_sekarang
    let nilai_sekarang = grades[i];
    // 4. Jika nilai_sekarang kurang dari 38, tambahkan nilai_sekarang ke finalGrades tanpa perubahan
    if (grades[i] < 38) {
      finalGrades.push(nilai_sekarang);
    } else {
      // 5. Jika nilai_sekarang lebih besar atau sama dengan 38, hitung sisa pembagian nilai_sekarang dengan 5
      let sisa = nilai_sekarang % 5;
      // 6. Jika sisa lebih besar atau sama dengan 3, tambahkan (5 - sisa) ke nilai_sekarang dan tambahkan nilai baru ke finalGrades
      if (sisa >= 3) {
        // 7. Hitung nilai baru dengan menambahkan (5 - sisa) ke nilai_sekarang
        let nilai_baru = nilai_sekarang + (5 - sisa);
        // 8. Tambahkan nilai_baru ke finalGrades
        finalGrades.push(nilai_baru);
      } else {
        // Jika sisa kurang dari 3, tambahkan nilai_sekarang ke finalGrades tanpa perubahan
        finalGrades.push(nilai_sekarang);
      }
    }
  }
  // 9. Kembalikan array finalGrades sebagai hasil akhir
  return finalGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));
