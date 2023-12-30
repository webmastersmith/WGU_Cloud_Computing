# Python Functions

## Leap Year

```python
year = 1954
is_leap_year = False
''' Type your code here. '''
if year % 4 == 0:
    if str(year).endswith('00'):
        if year % 400 == 0:
            is_leap_year = True
    else:
        is_leap_year = True
msg = 'leap year' if is_leap_year else 'not a leap year'
print(f'{year} - {msg}')
```

## SORT

- does not return. mutates in place.
- better to use `sorted()` works with any iterable.
  - <https://docs.python.org/3/howto/sorting.html>

```python
my_list = [3,7,1,6,2,9]
print(sorted(my_list)) # [1, 2, 3, 6, 7, 9]. does not mutate original.
my_list.sort()
print(my_list) # [1, 2, 3, 6, 7, 9]
```
