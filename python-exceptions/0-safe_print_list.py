#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    count = 0
    for each in range(x):
        try:
            print(f"{my_list[each]}", end="")
            count += 1
        except:
            break
    print()
    return (count)
