'''
  Reverse a string
  :type s: str
  :rtype: str
'''
def reverseString(s):
  return s[::-1]
# s = 'hello'
# print('reverse string: ' + s + '. Result is: ' + reverseString(s))
'''
  Iterate through a string and replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz'
  and multiples of 3 and 5 with 'FizzBuzz
'''
def fizzBuzz(n):
  '''
  :type n: int
  :rtype: List[str]
  '''
  a = []
  for x in range(1, n+1):
      if x % 3 == 0 and x % 5 == 0:
          a.append('FizzBuzz')
      elif x % 3 == 0:
          a.append('Fizz')
      elif x % 5 == 0:
          a.append('Buzz')
      else:
          a.append(str(x))
  return a
        



