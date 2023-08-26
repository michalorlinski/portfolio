"""
https://leetcode.com/problems/maximum-length-of-pair-chain/

Maximum Length of Pair Chain
    You are given an array of n pairs pairs where
      pairs[i] = [left_i, right_i] and left_i < right_i.
    A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c.
    A chain of pairs can be formed in this fashion.
    Return the length longest chain which can be formed.

Example:
  Input: pairs = [[1,2],[2,3],[3,4]]
 Output: 2
"""

from typing import List


class Solution:

    def _check_valid(self, strs: List[str]) -> str:
        assert strs, f"{strs}"
        assert 1 <= len(strs) <= 200, f"{num} has invalid value: from 1 to 3999 !!!\n"

    def longestCommonPrefix(self, strs: List[str]) -> str: