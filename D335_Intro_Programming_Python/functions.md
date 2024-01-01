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
