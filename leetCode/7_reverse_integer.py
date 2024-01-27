"""
https://leetcode.com/problems/roman-to-integer/

Reverse Integer
  Given a signed 32-bit integer x, return x with its digits reversed.
  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
  then return 0.

Example:
  Input: x = 123
  Output: 321
"""

class Solution: 
    #
    def reverse(self, x: int) -> int:
        if not (-2)**31 <= x <= 2**31 - 1:
            return 0
        r_int = str(x)[::-1].lstrip("0")
        if r_int[-1] == "-": r_int = r_int[-1] + r_int[:-1]
        return int(r_int)
