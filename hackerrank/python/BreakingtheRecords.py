"""

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Implementation: Breaking the Records
Link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

"""

def breakingRecords(scores):
    # inisialisasi variabel untuk menyimpan jumlah rekor tertinggi dan terendah yang dipecahkan
    max_record = scores[0]
    min_record = scores[0]
    count_max = 0
    count_min = 0

    # Iterasi Menggunakan Slicing
    for score in scores[1:]:
        # Pengecekan Kondisi
        if score > max_record:
            max_record = score
            count_max +=1
        elif score < min_record:
            min_record = score
            count_min += 1
    # Mengembalikan Hasil
    return [count_max, count_min]

print(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))  # Example usage