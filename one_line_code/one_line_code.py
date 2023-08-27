"""
### One line code challenge ###
"""
# 1 - Product of all element from the list
lis = [1, 2, 3, 4, 5]
fac = lambda n: n[-1] * fac(n[:-1]) if (len(n) > 1) else 1
def fun(n): return 1 if len(n) < 1 else n[0] * fun(n[1:])
# 
from functools import reduce
def fac(n):return reduce(lambda x,y: x*y, n)
# 
import operator
def fac(n):return reduce(operator.mul, n)


# 2 - check if number is happy, e.g. happy(31) = True -> (3*3 + 1*1) -> 9 + 1 -> 10 -> 1*1 + 0*0 -> 1 -> happy
def happy(n): n0 = n; lr = lambda n: (n%10)**2 + lr(int(n/10)) if n > 9 else n**2; return True if lr(n) == 1 else (False if n == n0 else happy(lr(n)))
lr = lambda n: (n%10)**2 + lr(int(n/10)) if n > 9 else n**2


# 3 - highest common factor, e.g. hcf(8, 12) = 4; hcf(20, 30) = 10
def hcf(x, y): return hcf(y, x%y) if y else x


# 4 - splitting camel case, e.g. split("MyNameIsRocky") -> ["My", "Name", "Is", "Rocky"]
split = lambda w: "".join([f" {c}" if c.isupper() else c for c in w]).strip().split(" ")
