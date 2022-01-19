# reverse a string

from ast import Str
from tokenize import String


def reverse_string(string):
    # if input not a string
    if isinstance(string, str) == False:
        return False

    # if string is empty or length = 1, return string
    length = len(string)

    if length < 2:
        return string
    
    counter = length -1
    reversed = ""
    while counter >= 0:
        reversed+= string[counter]
        counter-= 1
    return reversed

quote = "The quick brown fox jumped over the lazy dog."

print(reverse_string(quote))
print(reverse_string(True))