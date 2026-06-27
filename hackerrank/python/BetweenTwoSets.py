"""

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Implementation: Between Two Sets
Link: https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

"""

def getTotalX(a, b):
    # variabel untuk menghitung jumlah integer yang memenuhi kondisi
    count = 0
    # iterasi melalui setiap integer antara nilai maksimum dari a dan nilai minimum dari b
    for x in range(max(a), min(b) + 1):
        # periksa apakah x adalah kelipatan dari semua elemen di a dan pembagi dari semua elemen di b
        if all(x % num == 0 for num in a) and all(num % x == 0 for num in b):
            # jika kondisi terpenuhi, tambahkan 1 ke count
            count += 1
    # kembalikan jumlah integer yang memenuhi kondisi        
    return count
print(getTotalX([2, 4], [16, 32, 96]))  # Example usage