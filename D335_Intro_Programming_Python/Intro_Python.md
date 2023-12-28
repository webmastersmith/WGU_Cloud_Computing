# D335 Introduction to Programming in Python

## Tips

- Programming in Python 3 ISBN: 979-8-203-91336-4
- [WGU How to Pass D335](https://srm--c.vf.force.com/apex/coursearticle?Id=kA00c000001DYpDCAW)
- [WGU D335 Cheat Sheet](https://srm--c.vf.force.com/apex/coursearticle?Id=kA00c000001DYibCAG)
-

## Help

- `help(math)` # show methods and descriptions of 'math' library or python function.
- `print(dir(int))` # only shows method names.

## Data Structures

- variables, list, list comprehension, set

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
my_list == my_list2 # False
b = my_list
b.append(100) # mutates my_list because 'b' is a pointer.
b = my_list.copy() # creates two copies.
my_list.append(4) # add to list.
my_list.insert(1, 'hello') # [1, 'hello', 2, 3]
my_list.remove('hello') # will error if 'hello' is not in list.
my_list.pop() # returns end item. mutates list.

# List Comprehension
[2*item for item in my_list] # [2,4,6]
[item for item in my_list if item % 2 == 0] # [2]
str = 'my string is wonderful'
def cleanWord(word):
  return word.replace('i', '').lower()
[cleanWord(word) for word in str.split() if len(cleanWord(word)) < 3] # returns array. Only words less than three chars.
# nested list comprehension
[cleanWord(word) for word in sentence.split() for sentence in str.split('.')] # returns array. Only words less than three chars.


# SET
# cannot use slice. It is like a dict.
# will only store unique items. Will not be in same order.
my_set = {1,2,3} # unique values, others will be discarded.
my_set2 = {3,2,1}
# order does not matter in equality.
my_set == my_set2 # true
my_set.add(4) # adds to set.
my_set[0] # error cannot get items from set this way.
3 in my_set # True
my_set.discard(100) # will not error if item does not exist.

# TUPLES
# cannot append or add to a tuple. Memory efficient because cannot grow.
my_tup = (1,2,3) # type(my_tup) # tuple
my_tup2 = (3,2,1) # order matters.
my_tup == my_tup2 # False
a,b,c = my_tup # a=1,b=2,c=3

# DICTIONARIES
# keys must be unique.
# order does not matter.
my_dict = { # key : value
  'num1': 1,
  'char2': 'two',
}
my_dict['num1']
my_dict['num100'] # error
my_dict.get('num100', 100) # 100 is default if doesn't exist, else will return None.
list(my_dict.keys())
list(my_dict.values())
list(my_dict.items()) # key, value pairs in a tuple. returned as an array.
if 'num100' not in my_dict:
  my_dict['num100'] = 100
for key, value in my_dict.items():
  print(key, value)
[{'letter': key, 'name': value} for key, value in my_dict.items()] # [{'letter': 'num1', 'name': 1}, {...}]
```

- operators, division, modulo, multiplication, int, float

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

- Equality Operators, Relational Operators, Logical Operators, Membership Operators, Boolean
  - **Strings** compared by ASCII value. Capitals are less than lowercase. `'F' < 'f'` # True
  - **Floating-point** types should not be compared using the equality operators.
    - `5 <= 5.0` # True, 5 will be converted to float.
  - **int and string** can be compared with equality operators.
    - string and int comparison will result in TypeError. `3 < 'hi'` # TypeError
  - **List/Tuples**
    - Lists and tuples are compared via an ordered comparison of every element in the sequence.
    - Every element between the sequences must compare as equal for an equality operator to evaluate to True.
  - **Dictionaries**
    - Dictionaries are compared only with `==` and `!=`.
    - To be equal, two dictionaries must have the same set of keys and the same corresponding value for each key.
  - **Membership** string, list, set, tuple, and dictionary(key only) can be searched with `in`.
  - **Identity** `is` compares the memory address of two objects.
    - return True only if the operands reference the same object.

| Operator of Operations | Description                                    |
| :--------------------- | :--------------------------------------------- |
| ( )                    | Items within parentheses are evaluated first   |
| `*` / % + -            | Arithmetic operators                           |
| < <= > >= == != in     | Relational, equality, and membership operators |
| not                    | not (logical NOT)                              |
| and                    | Logical AND                                    |
| or                     | Logical OR                                     |

```python
# Equality Operators: ==, <, <=, >, >=
True == True # True
# Relational Operators
4 < 5 # True
5 <= 5 # True
# Logical Operators -and, or, not
True and True # True
not True # False
num > 3 and num < 5
num < 3 or num > 5

# MEMBERSHIP -in, not in
my_bool = 'cat' in 'the cat in the hat' # True
10 in [1,2,3,4,5] # False
10 not in [1,2,3,4,5] # True
3 in {'A':1, 'B':2, 'C':3} # False, does not check value, only checks keys.

# Identity -is, is not
# Check whether two variables are the same object.
my_str = 'hello'
my_list = [1, 2, my_str, 3]
my_dict = {'A':1, 'B':2, 'C':3}
x = my_dict
print(x is my_dict) # True
print(my_str is my_list[2]) # True
print(my_str is not my_list[3]) # True

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

# INT & FLOAT
1+2 # int
1+2.0 # float
int(2.0) # 2
float(2) # 2.0
```

- if, elif, else, Loops, While, Pass, Functions, None

```python
# Control Flow
if a:
  print('a')
elif b:
  print('b')
else:
  print('?')
# ternary
expr_when_true if condition else expr_when_false
b = 'Fizz' if a%3==0 else 'Buzz' # 'b' will equal 'Fizz' or 'Buzz'.
y = 0 if x < 100 else x

# LOOPS
a = [1,2,3]
# FOR
for item in a:
  print(item) # '1\n2\n3\n'
# Find Primes
for num in range(2, 101):
  for factor in range(2, int(num ** 0.5)+1):
    if num % factor == 0:
      break
  else: # called when break statement exits loop. also used in while loops.
    print(f'{num} is prime!')

# WHILE
while a[-1] < 4:
  print('hi')
  a[-1] = a[-1]+1
while True:
  if True:
    break # exit loop. only breaks out of first loop it encounters.
  if False:
    continue # skip this iteration. can also be 'pass'.
# Pass
while True:
  pass # will do nothing. acts like a placeholder. will not error.

# Functions
# variables are function scoped.
def add(a,b=0): # default value
  print(a+b)
# KeyWords
def keyWord(a='world', b='hello'):
  print(b, a)
keyWord(b='goodbye', a='bob') # goodbye bob. order doesn't matter.
# ARGS, KEYWORD ARGS
def add2(*args, **kwargs): # any amount of args, any keyword argument.
  print(args, kwargs)
add2(1,2,3,4, myKeyword='hello') # (1, 2, 3, 4) {'myKeyword': 'hello'}
# locals()
def add(a,b,c):
  print(locals())
add(1,2,3) # {'a':1, 'b':2, 'c':3}
# globals()
print(globals()) # returns all variables in global scope.
# Lambda
(lambda x: x+3)(5) # 8. only one line.

# None -same as undefined in JS.
print(print('I\'m None')) # I'm None, None
```

- classes

```python
# Classes
# Class constructors are Uppercase.
class Dog:
  hair = 'shaggy' # static variables that can be called on 'Dog' class. print(Dog.hair) # 'shaggy'
  _collar = True # underscore tells you not to change it.
  def __init__(self, name, legs): # name, legs are attributes.
    self.name = name
    self.legs = legs
  # method
  def speak(self): # self is the object. Gives you access to all variables.
    print(self.name + 'says bark')
  def getCollar(self):
    print(self._collar)

type(Dog('rover', 4)) # 'Dog'
my_dog = Dog('rover', 4) # initialize. Creates a 'my_dog' object which is an instance of 'Dog'.
my_dog.speak() # 'rover says bark' -method call on the 'my_dog' object.
my_dog.getCollar()

# Extend Class
class Cat(Dog):
  def __inti__(self, age): # can override parent without super().
    super().__init__() # calls the parent first
    self.age = age
  def speak:
    print('meow')
  def myAppend(self):
    super().myAppend(item) # calls on the parent class.
```

- slice, string, format, multiline strings, range
  - multiline string is three backticks, or enclosed in parens.

```python
# Slice
a = [1,2,3,4,5] # will return array.
my_str = 'hello world' # will return string.
num = 12345 # convert to string, then slice.
a[1:4] # [2,3,4] -inclusive, exclusive. returns list.
a[:4] # [1,2,3,4] -same as 0:4, returns list.
a[3:] # [4,5] -to end of string|list, returns list.
a[::2] # [1,3,5] -every two, returns list.
a[::-1] # [5,4,3,2,1] -backwards, returns list.
str(num)[-2:] # 45 return last two digits.


# STRING
str = 'my string is wonderful'
str.split() # returns array. split on spaces.
str.split('g') # returns array. removes match.
def cleanWord(word):
  return word.replace('i', '').lower()
[cleanWord(word) for word in str.split() if len(cleanWord(word)) < 3] # returns array. Only words less than three chars.
# nested list comprehension
[cleanWord(word) for word in sentence.split() for sentence in str.split('.')] # returns array. Only words less than three chars.

# Format
num = 4.9999
f'my string is {num}' # my string is 4.9999
f'{num:d}' # integer. float will be dropped. # 4
f'{num:.2f}' # decimal zero two places. # 4.99
f'{num:03d}' # leading decimal fill three places. # 004

# Range
range(100) # 0-99
range(1, 101) # 1-100
```

- Import, Module, Package, Errors
  - module is simply a file with functions.
  - package is multiple modules in directory.

```python
# Import a module.
import math # imports whole module.
# import two functions from module
from decimal import Decimal, getcontext

# Module
def add(a,b):
  return a+b
# Package
__init__.py # this file is created inside directory. It is blank. Tells python this is a package.
# in main:
from directoryName.moduleName import functionName

# Errors
try:
  1/0
except Exception as e: # can have multiple 'except' errors. The first one will stop the execution.
  print(type(e)) # ZeroDivisionError
finally:
  print('this always executes')

# DECORATORS
# handle exception function
def handleException(func)
  def wrapper():
    try:
      func()
    except TypeError:
      print('TypeError')
    except ZeroDivisionError:
      print('ZeroDivisionError')
    except Exception: # catch all error.
      print('WeirdError')
  return wrapper

@handleException # links exception function to causeError
def causeError():
  return 1/0
causeError() # 'ZeroDivisionError'

# RAISE ERROR
@handleException
def raiseError():
  raise Exception()
raiseError() # 'WeirdError'
```

- threads, process

  - process: each process has own memory.
  - threads: ways to share memory with two running programs in same process.

- files

```python
# READ
f = open('path/myFile.txt', 'r') # read mode.
f.readline() # get text lines one at a time.
f.readlines() # get entire file. Returns list of strings.
for line in f.readlines():
  print(line.strip()) # remove extra '\n' from print function.

# WRITE -a=append
f = open('path/file.txt', 'w') # create/overwrite new file.
f.write('Line1\n') # will only write when buffer full or file closed.
f.write('Line2\n')
f.close() # forces buffer to write file.
# To make sure file is closed.
with open('path/file.txt', 'a') as f:
  f.write('Line1\n')
  f.write('Line2\n') # file will close when function stops.

# CSV
import csv
with open('file.csv') as f:
  reader = csv.reader(f, delimiter='\t') # delimiter is optional if comma separated.
  next(reader) # skip header
  for row in reader:
    print(row) # each line will be a list.
# CSV Dictionary
with open('file.csv') as f:
  reader = csv.DictReader(f, delimiter='\t') # delimiter is optional if comma separated.
  next(reader) # skip header
  for row in reader:
    print(row) # each line will be a dictionary. header as key, value in csv.

# JSON
import json
json.loads(jasonString) # same as JSON.parse()
json.dumps(myList) # same as JSON.stringify()
json.dumps(myList, separators=(',', ':')) # change sep
```

- pypi pip
  - PyPi -Python Package Index. Is a repository of Python packages.
  - <https://packaging.python.org/en/latest/tutorials/packaging-projects/>
  - <https://pypi.org/>

```python
# pip
# https://www.tutorialsteacher.com/python/pip-in-python

pip3 --version # print python pip version
pip list # list all packages
pip show lorem # see details about package
python3 -m pip show numpy
pip help
# upgrade
pip upgrade # package installer for python
py -m pip install --upgrade pip # admin

# Install Package
python3 -m pip install numpy
pip install somePackage
python -m pip install --upgrade SomePackage # to upgrade
pip install "project-name==2.4" # specific version
pip install "project-name~=2.4" # compatible with
# Install from requirements
# https://learnpython.com/blog/python-requirements-file/
# https://towardsdatascience.com/requirements-vs-setuptools-python-ae3ee66e28af
# https://realpython.com/lessons/using-requirement-files/
# https://realpython.com/python-modules-packages/
pip install -r requirements.txt

# Uninstall
pip uninstall lorem # uninstall package
# uninstall all packages
 pip freeze | xargs pip uninstall -y
# remove all at once then
pip uninstall -r requirements.txt -y # leave off -y to be asked to remove.

# Development Mode -get custom dev requirements
echo pytest > requirements-dev.txt
pip install -r requirements-dev.txt # install requirements, then
pytest
```
