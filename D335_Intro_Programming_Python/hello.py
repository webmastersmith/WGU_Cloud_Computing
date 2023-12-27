
def add2(*args, **kwargs):
  print(locals())
print(add2(1,2,3,4, myKeyword='hello')) #


print(globals())