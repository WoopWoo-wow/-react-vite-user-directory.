from tkinter import simpledialog, messagebox

numone = simpledialog.askinteger("Input", "Enter a number")
numtwo = simpledialog.askinteger("Input", "Enter another number")


messagebox.showinfo("Result", str(numone * numtwo))

num = int(input("Enter a number: "))
for i in range(1, 11):
     print(f"{num} x {i} = {num * i}")