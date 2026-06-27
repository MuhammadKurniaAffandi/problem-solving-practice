"""

Platform Pratice: Hackerrank
Practice Skills: Algorithms
Implementation: Number Line Jumps
Link: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

"""

def kangaroo(x1, v1, x2, v2):
    if v1 == v2:
        return "YES" if x1 == x2 else "NO"
    
    # Calculate the number of jumps needed for both kangaroos to meet
    jumps = (x2 - x1) / (v1 - v2)
    
    # Check if the number of jumps is a non-negative integer
    if jumps >= 0 and jumps.is_integer():
        return "YES"
    else:
        return "NO"

print(kangaroo(0, 2, 5, 3))  # Example usage