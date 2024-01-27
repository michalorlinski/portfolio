"""
https://leetcode.com/problems/integer-to-roman/

Integer number to Roman
  num = integer
  1 <= num <= 3999

Example:
  Input: num = 1994
 Output: "MCMXCIV"
"""

class Solution:
    def __init__(self):
        self.roman_values = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        self.roman_exc = {
            "I": 1,
            "X": 10,
            "C": 100
        }
        
    def check_valid(self, num: int) -> bool:
        assert type(num) == int, f"{num} need to be a integer !!!\n"
        assert 1 <= num <= 3999, f"{num} has invalid value: from 1 to 3999 !!!\n"

    def intToRoman(self, num: int) -> str:
        self.check_valid(num)
        roman_symbols = ""
        for i, (s, v) in enumerate(list(self.roman_values.items())[::-1]):
            rest = num // v
            if rest > 0:
                roman_symbols += rest * s
                num -= rest * v
            if i+1 != len(self.roman_values) and (list(self.roman_values.items())[::-1][i+1][1] < num < v):
                for s_exc, v_exc in list(self.roman_exc.items())[::-1]:
                    if (num > v_exc) and ((-1 * v_exc) <= (num - v) <= -1):
                        roman_symbols += (s_exc + s)
                        num -= int(num/v_exc) * v_exc
                        break
            if num == 0:
                break
        return roman_symbols

# - - - - - - - - - -