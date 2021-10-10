# Interview Schedule Assignment

**Problem Statement** : Implement Interview Schedule Algorithm

Note : The algorithm has been implemented in Python 3.9 and has been tested in MacOs and Windows 10.

# Pre-requisites

You need to have python 3.9x installed in your system.

To check the version, please run the following command in your terminal :

    python3 --version
OR

    python3 -V

If the output of this command is not 3.9x, you can download the installer for your OS from : https://www.python.org/downloads/

Please check the version again once installed to make sure the system has python3.

No other 3rd party libraries are needed.

# Code Execution Details

Download the interviewScheduling.py file attached in this folder and run the file by typing the following command in your terminal :

    python3 interviewScheduling.py


# Input Format

Sequence of input required by the user :
1. Enter number of companies: You can give any arbitrary positive integer >1 for eg. 4
2. Enter number of students: Input any positive integer > 1 eg. 7
3. Enter number of time slots: Input the total number of interviews to be held on a day for eg. 10
4. Enter number of shortlisted students: Input the total number of shortlisted students assuming all companies would have a constant number throughout for eg. 5 
5. Enter priority list for company: Input the priority list of each company separated by space. eg. 1 2 3 4
6. Enter priority list for student: Input the priority list of each student separated by space. eg. 4 3 2 1

# Output
The output of the program will print the student IDs for each company based on the score calculated on priorities of both companies and students, number of shortlisted students and the number of slots given as inputs.

# Assumptions

1. We require atleast 2 companies to schedule interviews.
2. We require atleast 2 students to schedule interviews.
3. The number of shortlisted students is same for all companies.
4. t is the number of slots of interviews in a day.
5. All inputs given by the user are valid.



