import csv
import sys
# print(help(dict.pop))
# print(help(dict.popitem))
# print(help(dict))
# print(help(slice))
# print(dir(list))
# print(help(list.insert))
# print(help(list))
# print(help(list.reverse))
# print(dir(__builtins__))
# print(help(reversed))
# print(help(str.join))
# print(help(list.sort))
# print(help(reversed))
# print(dir(csv))
# print(help(csv.reader))
print(sys.path)



# student_grades = {
#     'Andrew': [56, 79, 90, 22, 50],
#     'Nisreen': [88, 62, 68, 75, 78],
#     'Alan': [95, 88, 92, 85, 85],
#     'Chang': [76, 88, 85, 82, 90],
#     'Tricia': [99, 92, 95, 89, 99]
# }

# # Find the average score of each assignment.
# avg_scores = {}
# for name, grades in student_grades.items():
#     avg_scores[name] = sum(grades) / len(grades)
# print(avg_scores)

# # Print the name and grade percentage of the student with the highest total of points.
# highest_avg = ('None', 0)
# for name, grade in avg_scores.items():
#     if grade > highest_avg[1]:
#         highest_avg = (name, grade)
# print(highest_avg)

# # Find and apply a curve to each student's total score, such that the best student has 100% of the total points.
# curved_grades = {}
# for name, grades in student_grades.items():
#     max_grade = max(grades)
#     curve = (100 - max_grade)
#     for i, grade in enumerate(grades):
#         grades[i] = grade + curve
#     curved_grades[name] = grades

# print(curved_grades)

