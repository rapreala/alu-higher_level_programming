#!/usr/bin/python3
'''a function that adds 2 integers.'''


def add_integer(a, b=98):
    """
    This function adds two integers.
    Parameters:
    a (int or float): The first integer to add. Must be an integer or float.
    b (int or float): The second integer to add. Must be an integer or float.
    Default value is 98.
    Returns:
    int: The sum of the two integers.
    Raises:
    TypeError: If a or b is not an integer.
    """
    # Check if a and b are integers or floats
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")
    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")
    # Cast a and b to integers if they are floats
    if isinstance(a, float):
        a = int(a)
    if isinstance(b, float):
        b = int(b)
    # Return the sum of the two integers
    return a + b
