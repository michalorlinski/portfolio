"""
https://leetcode.com/problems/roman-to-integer/

Roman number to Integer
  s = string with Roman symbols (chars)
  1 <= s.length <= 15
  s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
  it is guaranteed that s is a valid roman numeral in the range [1, 3999]

Example:
  Input: s = "MCMXCIV"
 Output: 1994
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
        
    def validation(self, s: str) -> bool:
        assert type(s) == str, f"{s} need to be a string !!!\n"
        # check if s contain only valid characters
        for c in s:
            assert c in self.roman_values.keys(), f"{c} in {s} is invalid Roman numerals !!!\n"
        # check length
        assert 1 <= len(s) <= 15, f"{s} has invalid length !!!\n"
        
    def roman_to_int(self, s: str) -> int:
        self.validation(s)
        value = self.roman_values.get(s[0])
        if len(s) > 1:
            for i, c in enumerate(s[1:]):
                if self.roman_values.get(s[i]) >= self.roman_values.get(c):
                    value += self.roman_values.get(c)
                else:
                    value += (self.roman_values.get(c) - 2 * self.roman_values.get(s[i]))
        return value

# - - - - - - - - - -