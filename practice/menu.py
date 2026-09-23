
from tkinter import simpledialog , messagebox
burgerprice = 3
friesprice = 2
cokeprice = 1
askfood = simpledialog.askinteger("Input", "What food?67\n1.Burger\n2.Fries\n3.Coke\n4.Exit")
if askfood == 1:
    askbur = simpledialog.askinteger("Input", "How Many Burgers?")
    askbur += burgerprice
else

