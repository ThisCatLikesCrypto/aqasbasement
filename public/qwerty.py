def sum_of_numbers(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# Sample test cases (one of these might be invalid, erroneous, normal, or boundary data)
print(sum_of_numbers([1, 2, 3]))  # Normal data
print(sum_of_numbers([-1, 0, 1]))  # Boundary data (negatives and zero), doesn't cause an error
                                    # but might cause unexpected results
print(sum_of_numbers(['a', 2, 3]))  # Erroneous data (non-integer) causes an error
print(sum_of_numbers([]))  # Empty list (Invalid case), causes return 0

def sum_of_numbers(numbers):
    total = 0
    for num in numbers:
        # Check if each element is an integer or float, otherwise raise an error
        if not isinstance(num, (int, float)):
            raise ValueError(f"Invalid data type: {num}. All elements must be numbers.")
        if num < 0:
            raise ValueError(f"Negative number: {num}. All numbers must be positive.")
        total += num
    return total

# Test cases
def run_tests():
    test_cases = [
        ([1, 2, 3], "Normal Data"),          # Normal data
        ([-1, 0, 1], "Boundary Data"),       # Boundary data (negatives and zero)
        (['a', 2, 3], "Erroneous Data"),     # Erroneous data (non-integer)
        ([], "Empty List (Boundary Case)"),  # Boundary case (empty list)
        ([float('inf'), 2], "Boundary Data (Infinity)")  # Edge case with infinity
    ]
    
    for data, description in test_cases:
        try:
            result = sum_of_numbers(data)
            print(f"{description}: Success! Sum = {result}")
        except ValueError as ve:
            print(f"{description}: Error - {ve}")
        except Exception as e:
            print(f"{description}: Unexpected Error - {e}")

run_tests() 