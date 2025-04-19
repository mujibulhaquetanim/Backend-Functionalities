#!/bin/bash

# Define the FILE variable
FILE="${PWD}/readFile.txt"

# Create the file
touch "$FILE"

# Write to the file
echo -e "Emma Watson\nShraddha Kapoor\nSabila Nur" > "$FILE"

# Read the file line by line using for loop
for line in $(cat $FILE); do
    echo "My Crush Name is: $line"
done
