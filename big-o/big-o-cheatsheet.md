# Big O Cheatsheet

## Big Os
1. O(1) Constant - no loops
2. O(log N) Logarithmic - usually searching algorithms have log(n) if they are sorted (Binary Search). Not on hash maps though
3. O(n) Linear - for loops/while loops
4. O(n*log(n)) - Log Linear - Sorting operations usually
5. O(n^2) Quadratic - every element in a collection needs to be compared to every other element. Two nested loops
6. O(2^n) Exponential - recursive algorithms that solve a problem of size n
7. O(n!) - you are adding a loop for every element

### Note:
**Iterating through half a collection is still O(n)**
**Two separate collections: O(a + b)**

## What Can Cause Time in a Function?
1. Operations(+, -, *, /)
2. Comparisons(<, >, ==)
3. Looping(for, while)
4. Outside Function call (function())

## Rule Book
1. Rule 1: Always worst case
2. Rule 2: Remove constants
3. Rule 3: Different inputs should have different variables. O(a+b). a and b arrays nested would be O(a*b)
    - For steps in order
    - For nested steps
4. Rule 4: Drop non-dominants
