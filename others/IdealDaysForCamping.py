'''
A day is ideal if the amount of rainfall has been decreasing for the prios k days from the current day,
and will be increasing for the for the following k days.

return the array of ideal days in ascending order. it is guranteed that there is atleast one ideal day.
'''

def predictDays(day, k):
  left_counts = [0]
  right_counts = []
  count = 0
  for prev, curr in zip(day, day[1:]):
    if prev >= curr:
      count += 1
    else:
      count = 0
    left_counts.append(count)
  
  count = 0
  for curr, next_ in list(zip(day, day[1:]))[::-1]:
    if curr <= next_:
      count += 1
    else:
      count = 0
    right_counts.append(count)
  right_counts = right_counts[::-1]
  right_counts.append(0)
  
  ret = []
  for i, (left, right) in enumerate(zip(left_counts, right_counts)):
    if left >= k and right >= k:
      ret.append(i+1)
  
  return ret
  

if __name__ == "__main__":
    day = [3,2,2,2,3,4]
    k = 2
    print('Ideal days for camping are:')
    print(['day'+str(x) for x in predictDays(day, k)])

