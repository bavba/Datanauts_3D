import csv
from collections import defaultdict

def generate_value(row_n_minus_1):
    if row_n_minus_1 > 0 and row_n_minus_1 < 2:
        return 'NOAA Scale -> G0 : Quiet'
    elif row_n_minus_1 >= 2 and row_n_minus_1 < 4:
        return 'NOAA Scale -> G0 : Unsettled'
    elif row_n_minus_1 >= 4 and row_n_minus_1 < 5:
        return 'NOAA Scale -> G0 : Active'
    elif row_n_minus_1 >= 5 and row_n_minus_1 < 6:
        return 'NOAA Scale -> G1 : Minor Storm'
    elif row_n_minus_1 >= 6 and row_n_minus_1 < 7:
        return 'NOAA Scale -> G2 : Moderate Storm'
    elif row_n_minus_1 >= 7 and row_n_minus_1 < 8:
        return 'NOAA Scale -> G3 : Strong Storm'
    elif row_n_minus_1 >= 8 and row_n_minus_1 < 9:
        return 'NOAA Scale -> G4 : Severe Storm'
    elif row_n_minus_1 >= 9:
        return 'NOAA Scale -> G5 : Extreme Storm'

# Input and output file paths
input_file_path = 'input.csv'  # Replace with your input file path
output_file_path = 'output.csv'  # Replace with your desired output file path

# Dictionary to store the maximum value of column 3 for each date in column 1
max_values = {}

# Read the CSV file and find the maximum value for each date
with open(input_file_path, 'r') as input_file:
    reader = csv.reader(input_file)
    next(reader)  # Skip header row
    for row in reader:
        try:
            date = row[0]
            value = float(row[2])
            if date not in max_values or value > max_values[date]:
                max_values[date] = value
        except ValueError:
            print(f'Error: Unable to convert value to float in row {reader.line_num}')

# Read the CSV file again and write the rows with the maximum value for each date
with open(input_file_path, 'r') as input_file, open(output_file_path, 'w', newline='') as output_file:
    reader = csv.reader(input_file)
    writer = csv.writer(output_file)

    # Write the header row as is
    writer.writerow(next(reader))

    for row in reader:
        try:
            date = row[0]
            value = float(row[2])
            if value == max_values[date]:
                # Use the existing logic to generate the value for the 4th column
                row[3] = generate_value(value)
                # Write the modified row to the output CSV file
                writer.writerow(row)
        except ValueError:
            print(f'Error: Unable to convert value to float in row {reader.line_num}')

print('Processing complete. Modified data saved to', output_file_path)

