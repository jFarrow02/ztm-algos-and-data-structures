# Hash Tables

"Hash Table" is a synonym for :
    - Hash Map
    - Dictionary
    - Object

## Hash Tables Intro
Collection of key-value pairs:

1. Key is hashed via a hash function: hashed key becomes a location in memory
2. Value is stored at the generated location

| Key   |   Value   |
|-------|-----------|
| 708   |   true    |
| 729   |  "grapes" |
| 815   |  10,000   |
| ...   |   ...     |

## Hash Functions
A **hash function** generates a value of fixed length for each input it receives.

Multiple types:
1. MD5
2. SHA-256 etc...

Hash functions are **one-way** and **idempotent**:
    a. Cannot generate the INPUT given the HASHED OUTPUT
    b. Will give the SAME RESULT no matter how many times it is run, given the same input

## Hash Collisions

Big O Results for hash tables:

| Operation  | Big O  |
|------------|--------|
| Find       | O(1)   |
| Append     | O(1)   |
| Insert     | O(1)   |
| Delete     | O(1)   |

It's possible for hash functions to generate the **same address output** for different inputs (no guarantee that addresses will be UNIQUE).

When this happens, you get a **hash collision**. With enough data and limited memory, hash collisions are **unavoidable**.

__Hint:__ This problem can be worked around using __Linked Lists__.

## Hash Tables in Different Languages
