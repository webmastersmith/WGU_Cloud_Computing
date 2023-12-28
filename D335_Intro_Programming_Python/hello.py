
num = 12345
print(str(num)[-2:])

my_str = 'hello world'
print(my_str[-2:])

a = [1,2,3,4,5]
print(a[1:4]) # [2,3,4] -inclusive, exclusive. returns list.
print(a[:4]) # [1,2,3,4] -same as 0:4, returns list.
print(a[3:]) # [4,5] -to end of string|list, returns list.
print(a[::2]) # [1,3,5] -every two, returns list.
print(a[::-1]) # [5,4,3,2,1] -backwards, returns list.
