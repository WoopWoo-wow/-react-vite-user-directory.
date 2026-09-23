from tkinter import simpledialog, messagebox

cart = ["Hotdog","Eggs","Oil"]
askmore = simpledialog.askstring("Input", "Add another?\nType yes,")
if askmore == "yes":
    addanother = simpledialog.askstring("Input", "What Item"),

cart.append(addanother)
print(cart)
print("Thank you for shopping with us!")
