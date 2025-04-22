#!/bin/bash

FILE="${PWD}/readFile.csv"

# Make CSV file
touch "$FILE"

# Write to CSV file
echo -e "Name, Age, Country" > "$FILE"
echo -e "Emma Watson, 35, England" >> "$FILE"
echo -e "Sabila Nur, 30, Bangladesh" >> "$FILE"
echo -e "Shraddha Kapoor, 33, India" >> "$FILE"

# Read from CSV file (including the header)
echo "Reading all lines, including the header:"
while IFS="," read -r name age country; do
    echo "Name: $name, Age: $age, Country: $country"
done < "$FILE"

# Read from CSV file (excluding the header)
echo -e "\nReading all lines, excluding the header:"
cat "$FILE" | awk 'NR!=1 {print}' | while IFS="," read -r name age country; do
    echo "Name: $name, Age: $age, Country: $country"
done

# read only person whose age is greater than 30 from csv file
echo -e "\nReading only person whose age is greater than 30:"
cat "$FILE" | awk -F "," '$2 > 30 {print}' | while IFS="," read -r name age country; do
    echo "Name: $name, Age: $age, Country: $country"
done