import csv

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
input_file_path = 'kp_sn_since_2016.csv'  # Replace with your input file path
output_file_path = 'kp_forecast.csv'  # Replace with your desired output file path

# Read the CSV file, modify the 3rd and 4th columns, and write to a new CSV file
with open(input_file_path, 'r') as input_file, open(output_file_path, 'w', newline='') as output_file:
    reader = csv.reader(input_file)
    writer = csv.writer(output_file)
    
    for index, row in enumerate(reader):
        if index == 0:
            # Write the header row as is
            writer.writerow(row)
        else:
            try:
                # Convert the 3rd column to float for comparison
                row_n_minus_1 = float(row[2])
                
                # Generate the value for the 4th column based on the specified logic
                row[3] = generate_value(row_n_minus_1)
                
                # Write the modified row to the output CSV file
                writer.writerow(row)
            except ValueError:
                print(f'Error: Unable to convert value to float in row {index + 1}')

print('Processing complete. Modified data saved to', output_file_path)

