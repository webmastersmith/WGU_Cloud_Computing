from datetime import datetime, timedelta, date
from dateutil.relativedelta import relativedelta

m = timedelta(days=31)
print(date(2023, 12, 31) - m)
