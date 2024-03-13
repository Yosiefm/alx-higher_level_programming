#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

# Extracting the last digit of the number
last_digit = abs(number) % 10

# Determining the message based on the last digit
if last_digit > 5:
    message = "and is greater than 5"
elif last_digit == 0:
    message = "and is 0"
else:
    message = "and is less than 6 and not 0"

# Printing the result
print("The string Last digit of", number, "is", last_digit, message)
