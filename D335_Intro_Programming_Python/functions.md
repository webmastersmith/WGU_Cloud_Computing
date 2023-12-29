# Python Functions

## Date

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
