#!/usr/bin/python3
'''A function that divs a martix with a number'''


def matrix_divided(matrix, div):
    """
    Divides all elements of a matrix by a given number, rounded to two decimal places.
    Args:
    matrix (list of lists): matrix of integers or floats
    div (int or float): number to divide matrix elements by
    Returns:
    list of lists: new matrix with divided elements
    Raises:
    TypeError: if matrix is not a list of lists of integers or floats
    TypeError: if rows of matrix are not of equal size
    TypeError: if div is not a number
    ZeroDivisionError: if div is equal to 0
    """
    # check if matrix is a list of lists of integers or floats
    if not all(isinstance(row, list) for row in matrix) or not all(isinstance(element, (int, float)) for row in matrix for element in row):
        raise TypeError('matrix must be a matrix (list of lists) of integers/floats')
    # check if rows of matrix are of equal size
    row_sizes = [len(row) for row in matrix]
    if not all(size == row_sizes[0] for size in row_sizes):
        raise TypeError('Each row of the matrix must have the same size')
    # check if div is a number
    if not isinstance(div, (int, float)):
        raise TypeError('div must be a number')
    # check if div is not equal to 0
    if div == 0:
        raise ZeroDivisionError('division by zero')
    # divide elements of matrix by div and round to two decimal places
    divided_matrix = [[round(element / div, 2) for element in row] for row in matrix]
    return divided_matrix
