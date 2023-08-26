"""
https://leetcode.com/problems/longest-common-prefix/

Maximum Length of Pair Chain
    You are given an array of n pairs pairs where
      pairs[i] = [left_i, right_i] and left_i < right_i.
    A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c.
    A chain of pairs can be formed in this fashion.
    Return the length longest chain which can be formed.

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example:
  Input: strs = ["flower","flow","flight"]
 Output: "fl"
"""

from typing import List
import re


class Solution:

    def __check_valid(self, strs: List[str]) -> str:
        # check if input is a list with length from 1 to 200
        assert type(strs) == list, f"{strs} is NOT a list !!!\n"
        assert 1 <= len(strs) <= 200, f"{len(strs)} has invalid value: from 1 to 200 !!!\n"
        
        # check if each element of input list has length from 0 to 200
        for i_str in strs:
            assert 0 <= len(i_str) <= 200, f"{i_str} length has invalid value: \
                                            0 <= single_string <= 200 !!!\n"

        # check if all strings consists of only lowercase English letters 
        eng_lowercase = re.compile("[a-z]+")
        assert all(eng_lowercase.fullmatch(i_str) for i_str in strs if i_str), \
            f"{strs} list should consists of only lowercase English letters"
        

    def longestCommonPrefix(self, strs: List[str]) -> str:
        self.__check_valid(strs)
        