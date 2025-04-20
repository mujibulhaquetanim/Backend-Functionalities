#!/bin/bash

# Define the FILE variable
FILE="${PWD}/readFile.txt"

# Create the file
touch "$FILE"

# Write to the file
echo -e "\"Emma Watson\"\n\"Sabila Nur\"\n\"Shraddha Kapoor\"" > "$FILE"

echo -e "----------------------------------\nUsing For Loop:"
# Read the file line by line using for loop
for line in $(cat $FILE); do
    echo "My Crush Name is: $line"
done

echo -e "----------------------------------\nUsing While Loop:"
# split the file content into new line using while loop
while IFS= read -r line; do
    echo "My Crush Name is: $line"
done < "$FILE"
