import numpy as np

# ==========================================
# STUDENT DATA
# ==========================================

students = [
    {
        "name": "Alice",
        "age": 20,
        "grades": [85, 90, 88]
    },
    {
        "name": "Bob",
        "age": 21,
        "grades": [78, 82, 80]
    },
    {
        "name": "Charlie",
        "age": 19,
        "grades": [92, 95, 90]
    }
]


# ==========================================
# DISPLAY STUDENTS
# ==========================================

def display_students():
    print("\n===== STUDENT LIST =====")

    for i, student in enumerate(students):
        print(f"\nStudent #{i + 1}")
        print("Name:", student["name"])
        print("Age:", student["age"])
        print("Grades:", student["grades"])


# ==========================================
# ADD STUDENT
# ==========================================

def add_student():
    print("\n===== ADD STUDENT =====")

    name = input("Enter name: ")
    age = int(input("Enter age: "))

    grades = []

    for i in range(3):
        grade = float(input(f"Enter grade {i + 1}: "))
        grades.append(grade)

    student = {
        "name": name,
        "age": age,
        "grades": grades
    }

    students.append(student)

    print("Student added successfully!")


# ==========================================
# CALCULATE AVERAGE USING NUMPY
# ==========================================

def calculate_average():
    print("\n===== STUDENT AVERAGES =====")

    for student in students:

        grades = np.array(student["grades"])

        average = grades.mean()

        print(
            student["name"],
            "Average:",
            round(average, 2)
        )


# ==========================================
# FIND HIGHEST AND LOWEST GRADE
# ==========================================

def grade_statistics():
    print("\n===== GRADE STATISTICS =====")

    all_grades = []

    for student in students:
        all_grades.extend(student["grades"])

    grades = np.array(all_grades)

    print("Highest grade:", grades.max())
    print("Lowest grade:", grades.min())
    print("Overall average:", round(grades.mean(), 2))
    print("Total grades:", grades.size)


# ==========================================
# FIND PASSING GRADES
# ==========================================

def passing_grades():
    print("\n===== PASSING GRADES =====")

    all_grades = []

    for student in students:
        all_grades.extend(student["grades"])

    grades = np.array(all_grades)

    passing = grades[grades >= 75]

    print("Passing grades:")
    print(passing)


# ==========================================
# SAVE STUDENTS TO FILE
# ==========================================

def save_students():
    with open("students.txt", "w") as file:

        for student in students:

            file.write("Name: " + student["name"] + "\n")
            file.write("Age: " + str(student["age"]) + "\n")
            file.write("Grades: " + str(student["grades"]) + "\n")

            grades = np.array(student["grades"])
            average = grades.mean()

            file.write(
                "Average: " + str(round(average, 2)) + "\n"
            )

            file.write("----------------------\n")

    print("Students saved to students.txt")


# ==========================================
# READ STUDENTS FROM FILE
# ==========================================

def read_file():

    print("\n===== FILE CONTENT =====")

    try:

        with open("students.txt", "r") as file:

            content = file.read()

            print(content)

    except FileNotFoundError:

        print("File does not exist yet.")


# ==========================================
# ADD EXTRA GRADE
# ==========================================

def add_grade():

    print("\n===== ADD GRADE =====")

    name = input("Enter student name: ")

    for student in students:

        if student["name"].lower() == name.lower():

            grade = float(input("Enter new grade: "))

            student["grades"].append(grade)

            print("Grade added!")

            return

    print("Student not found.")


# ==========================================
# REMOVE STUDENT
# ==========================================

def remove_student():

    print("\n===== REMOVE STUDENT =====")

    name = input("Enter student name: ")

    for student in students:

        if student["name"].lower() == name.lower():

            students.remove(student)

            print("Student removed!")

            return

    print("Student not found.")


# ==========================================
# MAIN MENU
# ==========================================

while True:

    print("\n")
    print("================================")
    print("   STUDENT MANAGEMENT SYSTEM")
    print("================================")

    print("1. Display students")
    print("2. Add student")
    print("3. Calculate averages")
    print("4. Grade statistics")
    print("5. Show passing grades")
    print("6. Add grade")
    print("7. Remove student")
    print("8. Save to file")
    print("9. Read file")
    print("10. Exit")

    choice = input("Enter choice: ")

    if choice == "1":

        display_students()

    elif choice == "2":

        add_student()

    elif choice == "3":

        calculate_average()

    elif choice == "4":

        grade_statistics()

    elif choice == "5":

        passing_grades()

    elif choice == "6":

        add_grade()

    elif choice == "7":

        remove_student()

    elif choice == "8":

        save_students()

    elif choice == "9":

        read_file()

    elif choice == "10":

        print("Goodbye!")
        break

    else:

        print("Invalid choice.")