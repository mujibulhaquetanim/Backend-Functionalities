#!/bin/bash

# Define the FILE variable
FILE="${PWD}/readFile.txt"

# Create the file
touch "$FILE"

# Write to the file
echo -e "Emma Watson\nShraddha Kapoor\nSabila Nur" > "$FILE"
