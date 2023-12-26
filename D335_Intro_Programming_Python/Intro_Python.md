# D335 Introduction to Programming in Python

## Tips

- Programming in Python 3 ISBN: 979-8-203-91336-4
- [WGU How to Pass D335](https://srm--c.vf.force.com/apex/coursearticle?Id=kA00c000001DYpDCAW)
- [WGU D335 Cheat Sheet](https://srm--c.vf.force.com/apex/coursearticle?Id=kA00c000001DYibCAG)
-

## Data Structures

- variables, list, set

```python
# VARIABLES
my_num = 1 # type(my_num) # int
my_string = 'hello' # type(my_string) # string
my_float = 1.2 # type(my_float) # float

# LIST
# https://docs.python.org/3/tutorial/datastructures.html
my_list = [1,2,3] # len(my_list) # 3
my_list2 = [3,2,1]
# Order matters in list
my_list == my_list2 # false
my_list.append(4) # add to list.

# SET
my_set = {1,2,3} # unique values, others will be discarded.
my_set2 = {3,2,1}
# order does not matter in equality.
my_set == my_set2 # true

# TUPLES
# cannot append or add to a tuple. Memory efficient because cannot grow.
my_tup = (1,2,3) # type(my_tup) # tuple
my_tup2 = (3,2,1) # order matters.
my_tup == my_tup2 # false

# DICTIONARIES
# keys must be unique.
# order does not matter.
my_dict = { # key : value
  'num1': 1,
  'char2': 'two'
}
my_dict['num1']
```

- operators, division, modulo, multiplication

```python
# Operators
n = 1 + 1 # 2
n += 1 # 3
str = 'STRING1' + 'string2' # STRING1string2 -concate
1-1 # 0

# DIVISION
1/2 # 0.5 always returns float
4/2 # 2.0 always returns float
1//2 # 0 -forces int.

# MODULO
5%2 # 1

# multiplication
2*2 # 4
str = 'STR1' * 3 # 'STR1STR1STR1'
```

- comparison, logical, membership operators, boolean

```python
# COMPARISON ==, <, <=, >, >=,
True == True # True
4 < 5 # True

# LOGICAL -and or not
True and True # True
not True # False

# MEMBERSHIP -in,
10 in [1,2,3,4,5] # False
10 not in [1,2,3,4,5] # True
my_bool = 'cat' in 'the cat in the hat' # True

# BOOLEAN
# True
bool(1) # True
bool('hi') # True
# False
bool(0) # False
bool(0.0) # False
bool('') # False
bool([]) # False
bool({}) # False
bool(None) # False
```

- if, elif, else, Loops, While, Functions, None

```python
# Control Flow
if a:
  print('a')
elif b:
  print('b')
else:
  print('?')

# LOOPS
a = [1,2,3]
for item in a:
  print(item) # '1\n2\n3\n'
# while
while a[-1] < 4:
  print('hi')
  a[-1] = a[-1]+1

# Functions
def add(a,b):
  print(a+b)

# None -same as undefined in JS.
print(print('I\'m None')) # I'm None, None

```

- classes

```python
# Classes
# Class constructors are Uppercase.
class Dog:
  def __init__(self, name, legs): # name, legs are attributes.
    self.name = name
    self.legs = legs
  # method
  def speak(self): # self gives you access to all variables.
    print(self.name + 'says bark')
type(Dog('rover', 4)) # 'Dog'
my_dog = Dog('rover', 4) # initialize. Creates a 'my_dog' object which is an instance of 'Dog'.
my_dog.speak() # 'rover says bark' -method call on the 'my_dog' object.
```

- slice

```python
a = [1,2,3,4,5]
str = 'hello world'
print(a[1:4]) # [2,3,4] -inclusive, exclusive. returns list.

```

- import

```python
# Import a module.
from decimal import Decimal, getcontext

```
