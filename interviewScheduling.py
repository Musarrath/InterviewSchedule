# The solution is based on task scheduling problem -- Greedy strategy

from collections import defaultdict

# input number of companies
m = int(input("\nEnter number of companies: "))
print("")

if(m <= 1):
    print("Number of companies should be atleast 2!")
    exit()

# input number of students
n = int(input("\nEnter number of students: "))
print("")

if(n <= 1):
    print("\nNumber of students should be atleast 2!")
    
    exit()

# input number of interviews in a day
t = int(input("\nEnter number of time slots: "))
print("")

# input number of shortlisted students -- for simplicity have kept it same for all companies
s = int(input("\nEnter number of shortlisted students: "))
print("")

if(s > n):
    print("\nNumber of shortlisted students cannot be greater than total students!")
    exit()

companyPriority = defaultdict(list)
studentPriority = defaultdict(list)

# initializing a n*n array based on input
scoreArray = [[0 for col in range(m)] for row in range(n)]
i = 0
j = 0

# taking inputs of priority list of each company
while i < m:
    msg = input("\nEnter priority list for company #" + str(i+1) + " : ")
    data = [int(x) for x in msg.split()]
    companyPriority[i] = data
    i += 1

# taking inputs of priority list of each student
while j < n:
    msg = input("\nEnter priority list for student #" + str(j+1) + " : ")
    data = [int(x) for x in msg.split()]
    studentPriority[j] = data
    j += 1

# making a 2d array in which if both company and student priority matches, score is given as 2, else 1 -- by default 0
# row : company, column : student
for key in companyPriority:
  for student, company in companyPriority.items():
    if(key in studentPriority[student]):
    	scoreArray[key][student] = 2
    else:
      scoreArray[key][student] = 1

# based on number of shortlisted students s, select max score against each company and schedule interviews till the number of slots are available
for key, val in enumerate(scoreArray):
    print("\nSchedule for Company", (key+1))
    k = 0
    for i in range(s):
        if(k < t):
            index = scoreArray[key].index(max(scoreArray[key]))
            print("Student", (index+1))
            scoreArray[key][index] = 0
            i += 1
