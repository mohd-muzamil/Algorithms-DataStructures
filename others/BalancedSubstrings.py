'''
Method to return the number of ways in which a string can be split such that both substrings have equal number 
of opening and closing backets i.e. '(', ')', '[', ']'
'?' can be used to replace as any of the bracket.
'''
from collections import Counter
from copy import copy

def check(count):
  paran = count['('] == count[')']
  squar = count['['] == count[']']

  if not(paran) and count['?'] >= abs(count['('] - count[')']):
    count['?'] -= abs(count['('] - count[')'])
    count['('] = max(count['('] , count[')'])
    count[')'] = max(count['('] , count[')'])
    
    if not(squar) and count['?'] >= abs(count['['] - count[']']):
        count['?'] -= abs(count['['] - count[']'])
        count['('] = max(count['['] , count[']'])
        count[')'] = max(count['['] , count[']'])
    
    return (count['('] == count[')']) and (count['['] == count[']']) and (count['?']%2 == 0)


def fillMissingBrackets(s):
  left_count = Counter()
  right_count = Counter(s)
  ret = 0
  
  for i in s[:-1]:
    left_count[i] += 1
    right_count[i] += 1
    if check(copy(left_count)) and check(copy(right_count)):
        ret += 1
  
  return ret  
  
