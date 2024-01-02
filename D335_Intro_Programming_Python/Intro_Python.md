# D335 Introduction to Programming in Python

## Tips

- Programming in Python 3 ISBN: 979-8-203-91336-4
- [WGU How to Pass D335](https://srm--c.vf.force.com/apex/coursearticle?Id=kA00c000001DYpDCAW)
- [WGU D335 Cheat Sheet](https://srm--c.vf.force.com/apex/coursearticle?Id=kA00c000001DYibCAG)
- study 3-13.
- lessons 14-18 not as important
- lessons 19-30 labs -important

## Help

- `print(help(math))` # show methods and descriptions of 'math' library or python function.
- `print(dir(int))` # only shows method names.

## Data Structures

- operators, division, modulo, multiplication, int, float

```python
# int
num = 6745
# SLICE NOTATION
str(num)[-2:] # '45' return copy of last two digits as string.

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
  - **Floating-point** types should not be compared using the **equality** operators.
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
# Comparison Operators (also called Relational Operators)
True == True # True (also called Equality Operators: ==, !=)
True != True # False
4 < 5 # True
5 <= 5 # True

# Logical Operators -and, or, not
True and True # True
True or False # True
not True # False
num = 4
num > 3 and num < 5 # True
num <= 3 or num >= 5 # False

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

- print, string, format, multiline strings, range
  - multiline string is three backticks, or enclosed in parens.

```python
# PRINT
print(f'some string', end='') # no newline on end. default is '\n'

# STRING
s = 'hello ' + 'world' # hello world
s  += '!' # hello world!
weird = '.'.join([1,2,3]) # 1.2.3 -Joins with whatever char is passed to it. Returns new string.
r = 'r' * 3 # 'rrr'
s.split() # returns array. Default split on spaces, \t. s.split(' ') # split only on spaces.
list(s) # split on each char.
s.split('g') # returns array. removes match.

# SLICE NOTATION [start(inclusive):stop(exclusive):step]
# https://docs.python.org/3/library/functions.html#slice
# returns copy. does not mutate. If it's a list, will return copy of items in a list.
s = 'hello world' # will return string.
num = 12345 # convert to string, then slice.
s[6] # 'w'
a = s[:] # shallow copy object. Same as a.copy()
a[-1]      # last item in the array
a[-2:]     # last two items in the array
a[:-2]     # everything except the last two items
a[::-1]    # all items in the array, reversed
a[1::-1]   # the first two items, reversed
a[:-3:-1]  # the last two items, reversed
a[-3::-1]  # everything except the last two items, reversed

# STRING Format
num = 4.9999
f'my string is {num}' # my string is 4.9999
f'{num:d}' # integer. float will be dropped. # 4
f'{num:.2f}' # round to two decimal places. Default fill is zero's. # 5.00
f'{num:9.1f}' #       5.0 -Take up 9 spaces total.
f'{num:03d}' # leading decimal fill three places. # 004
f'{f_name:16}{l_name:8}' # f_name will take 16 spaces, even if name is shorter. Padded with 'space' char.
# left-aligned, middle aligned, right aligned. Default padding is 'space' char.
f'{'John':.<8}{'F':?^8}{'Ken':.>8}' # John....???F????.....Ken

# https://docs.python.org/3/library/stdtypes.html#string-methods
# CAPITALIZE
s.capitalize() # Hello world. All other chars will be lowercased.
# COUNT
s.count('l') # 3
s.count('ll') # 1
# FIND
s.find('y', start, end) # -1
s.rfind('y', start, end) # -1 -Starts looking at end of string. Same options as find.
# IN
m = 'rld' in s # True
# REPLACE
S = s.replace('h', 'H').replace('w', 'W') # Returns Copy -Hello World

# STRING LIST COMPREHENSION
def cleanWord(word):
  return word.replace('i', '').lower()
[cleanWord(word) for word in s.split() if len(cleanWord(word)) < 3] # returns array. Only words less than three chars.
# nested list comprehension
[cleanWord(word) for word in sentence.split() for sentence in str.split('.')] # returns array. Only words less than three chars.

# Range
range(100) # 0-99
range(1, 101) # 1-100
range(1, 101, 2) # 1,3,5,7,9..99
```

- if, elif, else, Loops, While, Pass, Functions, None
  - **Functions**: with no return are called 'void function'. returns **None**.
    - A function is also an object in Python, having a type, identity, and value.
    - all variables are function scoped.
    - **Namespace**: maps names to objects. Namespace is actually just a normal Python dictionary whose keys are the names and whose values are the objects and pointers to the memory location.
    - **Scope**: where a name is visible.
      - **Built-in** scope – Contains all of the built-in names of Python, such as int(), str(), list(), range(), etc.
      - **Global** scope – Contains all globally defined names outside of any functions.
      - **Local** scope – Usually refers to scope within the currently executing function, but is the same as global scope if no function is executing.
    - **Scope Resolution**: The process of searching for a name in the available namespaces is called scope resolution.
      - Local scope's namespace is the first checked, followed by the global scope, and finally the built-in scope. If the name cannot be found in any namespace, the interpreter generates a **NameError**.

```python
# Control Flow -Branches
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
      break # exit first loop you come to.
  else: # executes only if the loop terminates normally and doesn't use a break statement.
    print(f'{num} is prime!')
    continue # stop here and go to next iteration.
# FOR Loop Index
for i in range(len(a)):
  v = a[i]  # Retrieve value of element in list.
  print(f'Element {i}: {v}')
for v in a:
  i = a.index(v)  # Retrieve index of value in list
  print(f'Element {i}: {v}')
for (i, v) in enumerate(a):
  print(f'Element {i}: {v}')

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
# Pass
def add(a,b):
  pass # nothing happens.

# KEYWORDS -keyword arguments come last.
def book(author, publisher, year, num_pages=0):
  pass
# positional arguments must be first. Keyword arguments come last.
keyWord('bob', 'good-books', num_pages=400, year=2023)
# Can mix
def lots(a=1, b=2, c=3):
  pass
lots(c=5, a=4) # can mix with defaults any order.

# Default values. if you make a parameter list/dict a default value, each time the function is called, it will append to the same list/dict that was created when function was loaded.
def year_list( year, l=[]): # list gets created when function loads.
  l.append(year)
year_list(2023) # [2023]
year_list(2022) # [2023, 2022]
# Fix
def year_list(year, l=None):
  if l == None:
    l = []
  l.append(year)
year_list(2023) # [2023]
year_list(2022) # [2022]

# ARGS, KEYWORD ARGS
def add2(one, two, *args, **kwargs): # any amount of args, any keyword argument.
  print(one, two, args, kwargs)
add2(1,2,3,4, myKeyword='hello') # 1 2 (3, 4) {'myKeyword': 'hello'}
# locals()
def add(a,b,c):
  print(locals())
add(1,2,3) # {'a':1, 'b':2, 'c':3}
# globals()
print(globals()) # returns all variables in global scope.
# change global variable inside function
# Modification of mutable global variables, such as list or dict containers, does not require a global statement.
# This is called 'side effects'. -Avoid
my_var = ''
def change_global_var():
  global my_var # if not called, 'my_var' will not be changed outside function call.
  my_var = 'hi'
# Lambda
(lambda x: x+3)(5) # 8. only one line.

# None -same as undefined in JS.
print(print('I\'m None')) # I'm None, None
```

- variables, list, list comprehension, sort, set

```python
# VARIABLES
my_num = 1 # type(my_num) # int
my_string = 'hello' # type(my_string) # string
my_float = 1.2 # type(my_float) # float

# LIST SLICE NOTATION
# https://docs.python.org/3/library/functions.html#slice
# returns copy. does not mutate. If it's a list, will return copy of items in a list.
a = [1,2,3,4,5]
num = 12345 # convert to string, then slice.
b = a[:] # shallow copy object. Same as a.copy()
a[1:4] # [2,3,4] -inclusive, exclusive. returns list.
a[:4] # [1,2,3,4] -same as 0:4, returns list.
a[3:] # [4,5] -to end of string|list, returns list.
a[::2] # [1,3,5] -every two, returns list.
a[::-1] # [5,4,3,2,1] -reverse string or list. returns copy of item.

# LIST
# https://docs.python.org/3/tutorial/datastructures.html
my_list = [1,2,3] # len(my_list) # 3
my_list2 = [3,2,1]
# Order matters in list
my_list == my_list2 # False. In comparison, each item is compared.
b = my_list
b.append(100) # mutates my_list because 'b' is a pointer.
b = my_list.copy() # creates two copies.
my_list.append(4) # add to list.
my_list.insert(1, 'hello') # [1, 'hello', 2, 3]
my_list.remove('hello') # will error if 'hello' is not in list.
my_list.pop() # returns end item. mutates list.
my_list.pop(list_index) # mutates list by index.
my_list[-1] = 'bob' # change end item in list by index.
my_list[1:3] = ["a", "b"] # does not insert list, but the items. [1, 'a', 'b']

# CONCAT LIST
my_list + my_list2 # [1,2,3,3,2,1]
for x in my_list2:
  my_list.append(x)
[j for i in [my_list, my_list2] for j in i]
my_list.extend(my-list2)
l = [*my_list, *my_list2] # spread operator.

# INDEX -List
for i, item in enumerate(range(11)): # has optional start value, enumerate(range(11), start=100)
for i in range(len(my_list)):
  print(my_list[i])

# Int List Methods
all(my_list) # True if every element in list != 0.
any(my_list) # True if any element is True == 0.
max(my_list) # return max value
min(my_list) # return min value
sum(my_list) # add all values.

# List Comprehension
# Nested if
[variable for variable in string/list/dict(key) if condition True if condition2 True] # nested if
# if else
["Even" if n%2 ==0 else "Odd" for n in range(11)]
# Nested for
a = [[1,2],[3,4],[5,6],[7,8]]
[[row[i] for row in a] for i in range(2)] # [[1,2,3,4], [5,6,7,8]]
# like map.
a = list(map(lambda x: x ** 2, my_list)) # lambda x:
a = list(map(int, my_list)) # Turn each item into int.
a = [(i + 10) for i in range(11)]
a = [sum(i) for i in range(11)]
[2*item for item in my_list] # [2,4,6]
[item for item in my_list if item % 2 == 0] # [2]
str = 'my string is wonderful'
def cleanWord(word):
  return word.replace('i', '').lower()
[cleanWord(word) for word in str.split() if len(cleanWord(word)) < 3] # returns array. Only words less than three chars.
# nested list comprehension
[cleanWord(word) for word in sentence.split() for sentence in str.split('.')] # return words less than three chars.

# SORT -default lowest to highest.
# https://docs.python.org/3/howto/sorting.html
# in place, returns nothing.
a.sort()
a.sort(key=str.lower, reverse=False) # applies function to each item in list 'before' comparing. Does not mutate items.
b = sorted(a, key=str.capitalize) # returns copy of array, sorted.

# SET
# No Index, No Order. CanNOT use SLICE NOTATION. Looks similar to Dict.
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
# No Mutation. Cannot append or add to a tuple. Memory efficient because cannot grow.
my_tup = (1,2,3) # type(my_tup) # tuple
my_tup2 = (3,2,1) # order matters.
my_tup == my_tup2 # False
a,b,c = my_tup # a=1,b=2,c=3

# DICTIONARIES -iterable keys
# keys must be unique.
# After 3.7 elements maintain their insertion order.
my_dict = { # key : value
  'num1': 1,
  'char2': 'two',
}
d = dict('Bob'='999-999-0001', 'John'='999-999-0000') # these are the same.
d = dict([('Bob', '999-999-0001'), ('John', '999-999-0000')]) # list of tuples
my_dict['num1']
my_dict['num100'] # error
my_dict.get('num100', 100) # 100 is default if doesn't exist, else will return None.
# keys(), values(), items() are 'view objects'. Read only.
list(my_dict.keys())
list(my_dict.values())
list(my_dict.items()) # key, value pairs in a tuple. returned as an array.
if 'num100' not in my_dict:
  my_dict['num100'] = 100
for key in my_dict: # only keys will be iterated.
    print(key, my_dict[key])
for key, value in my_dict.items(): # returned in tuple. Can be unpacked.
  print(key, value)
[{'letter': key, 'name': value} for key, value in my_dict.items()] # [{'letter': 'num1', 'name': 1}, {...}]
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

- Import, Module, Package, Errors
  - module is simply a file with functions that ends in '.py'.
    - dependency: any code that is imported.
  - package is multiple modules in directory.
    - directory must include a file called `__init__.py`.
  - built-in modules: pre-installed with python. ex.. sys, time, math...
    - sys.path: list of directories to look for files.

```python
# IMPORT
# Custom Import
import myFileName # same directory as the executing script. If in different directory, must be package.
# x = myFileName.func1()
# or
from myFileName import func1, func2
# x = func1()

# Python Module.
import math # imports whole module.
# import two functions from 'decimal' module
from decimal import Decimal, getcontext
a = math.pow(x,y)

# Module the name of module will be the file name unless called directly.
def add(a,b):
  return a+b

# This means the file was called directly(entry point). Typically used for code testing.
if __name__ == '__main__':
  # This code will run if the file was called directly.
  # You want to write code that executes only when the script is run as a main program and not when it is imported as a module.
  # You want to include test routines that run independently to validate functions defined in the file.
  # You want to include demonstration code that will not execute upon module import.
else:
  # This code will run if code was imported.

# Package
__init__.py # this file is created inside directory. It is blank. Tells python this is a package.
# in main:
from directoryName.moduleName import functionName

# ERRORS
try:
  1/0
except Exception as e: # can have multiple 'except' errors. The first one will stop the execution.
  print(type(e)) # ZeroDivisionError
finally:
  print('this always executes')

# DECORATORS
# handle exception function
# https://docs.python.org/3/library/exceptions.html
# EOFError input() hits an end-of-file condition (EOF) without reading any input
# KeyError A dictionary key is not found in the set of keys
# ZeroDivisionError Divide by zero error
# ValueError Invalid value (Ex: Input mismatch)
# IndexError Index out of bounds
def handleException(func): # on error, returns 'None'
  def wrapper():
    try:
      return func()
    except (TypeError, KeyError): # will stop on first True except. multiple types.
      print('TypeError')
    except ZeroDivisionError:
      print('ZeroDivisionError')
    except CustomError as custom_error:
      print(custom_error)
    except: # catch all error.
      print('WeirdError')
  return wrapper

@handleException # wraps causeError function in 'handleException'.
def causeError():
  return 1/0
causeError() # 'ZeroDivisionError'

# RAISE ERROR
@handleException
def raiseError():
  raise TypeError() # built-in
  # or
  raise CustomError('Custom Message.') # creates a new exception of type CustomError with a string argument.
  # or
  raise Exception()
raiseError() # 'WeirdError'
```

- cmd line args, threads, process

  - process: each process has own memory.
  - threads: ways to share memory with two running programs in same process.

```python
# CMD LINE ARGS
# python myText.py "arg1" "arg2"
# arg is a list of strings. -always check len(). If did not add args, will get an 'IndexError'
print(sys.arg) # ['myText.py', 'arg1', 'arg2']
sys.arg[0] myText.py
sys.arg[1] arg1
sys.arg[2] arg2
```

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

- Date
  - <https://docs.python.org/3/library/datetime.html>
  - focus on: date, datetime, timedelta

```python
from datetime import datetime, date, timedelta
# current day
datetime.now() # 2023-12-28 13:35:39.021978 -Focus on date and time.
date.today() # 2023-12-28 -Focus on just date.
# custom day -all int
datetime(year, month, day)
# convert date to day-of-year.
datetime.now().timetuple().tm_yday

# MONTH
month_number = datetime.strptime(month_name, '%b').month # 4
# Month Name
# To get just the month name, %b gives abbrevated form, %B gives full month name
# %b => Jan
# %B => January
datetime.strftime(datetime.now(), '%a %b %d, %Y') # 'Thu Aug 10, 2017'
datetime.strftime(datetime_object, '%B') # August

# Timedelta
today = date.today() # 2023-12-29
# 'timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
# returns object with methods: days', 'max', 'microseconds', 'min', 'resolution', 'seconds', 'total_seconds'
one_month = timedelta(days=30)
print(one_month.)
print(today + one_month) # 2024-01-28
print(today - one_month) # 2023-11-29

# RelativeDelta -Fixes uneven days in months: 28,30,31
# pip install python-dateutil
from datetime import date
from dateutil.relativedelta import relativedelta
date(2023, 12, 31) + relativedelta(months=+6) # 2024-06-30
date(2023, 12, 31)+relativedelta(months=+2) # 2024-02-29
date(2023, 12, 31) + relativedelta(months=-6) # 2023-06-30
```

- pypi pip
  - PyPi -Python Package Index. Is a repository of Python packages.
  - <https://packaging.python.org/en/latest/tutorials/packaging-projects/>
  - <https://pypi.org/>
  - pip is the package manager.

```python
# PIP
# https://www.tutorialsteacher.com/python/pip-in-python
# https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/
# Windows: py
# Unix/MAC: python3
py -m pip install --upgrade pip # windows. for unix/mac replace 'py' with 'python3'
py -m pip --version # windows version
# Package Info
py -m pip list # list all packages
py -m pip show numpy # package info
py -m pip help # show help

# Virtual Environment
py -m venv .venv # windows. You can also install multiple environments. .venv, .vdev, .vprod...
# Activating a virtual environment will put the virtual environment-specific python and pip executables into your shell’s PATH.
# Windows
.venv\Scripts\activate # adds .venv to path, local only.
where python # to verify
# Unix/MAC
source .venv/bin/activate #
which python # to verify
# Deactivate
deactivate # shell command or just close shell.

# Install Package
# https://pip.pypa.io/en/stable/cli/pip_install/
py -m pip install SomePackage            # latest version
py -m install "SomePackage==2.4" # specific version
py -m install "SomePackage~=2.4" # compatible with
py -m pip install 'SomePackage>=1.0.4'   # minimum version
# Upgrade package
py -m pip list --outdated # list what can be upgraded.
py -m pip install --upgrade SomePackage # to upgrade. py -m pip install -U PackageName
# Uninstall
py -m pip uninstall lorem # uninstall package
# uninstall all packages
python3 -m pip freeze | xargs pip uninstall -y # unix/mac
# remove all at once then
py -m pip uninstall -r requirements.txt -y # leave off -y to be asked to remove.

# Requirements.txt
# Install from requirements
# https://learnpython.com/blog/python-requirements-file/
# https://towardsdatascience.com/requirements-vs-setuptools-python-ae3ee66e28af
# https://realpython.com/lessons/using-requirement-files/
# https://realpython.com/python-modules-packages/
py -m pip freeze > requirements.txt # produces requirements.txt file with list of all dependencies.
# install from requirements.txt
py -m pip install -r requirements.txt

# Development Mode -set up dev, prod files.
# First create requirements.txt
py -m pip freeze > requirements.txt
# Dev
py -m pip freeze > requirements-dev.txt # will begin with '-r requirements.txt'
# Prod
py -m pip freeze > requirements-prod.txt # will begin with '-r requirements.txt'

```
