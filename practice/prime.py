num = 65

if num > 1:
    for i in range(2, num):
        if num % i == 0:
            print(f"{num} is NOT a Prime number")
            break
    else:
        print(f"{num} is a Prime number")
else:
    print(f"{num} is NOT a Prime number")