#!bin/bash

# read is a command that is used to take input from the user and store it in a var, here crushName is the var and -p is for prompt.
read -p "Enter your Crush Name: " crushName

echo "So your crush is $crushName"

# Arguments are passed to the script using $1 from the command line while executing the script
# Shift keyword is used to shift the arguments to the left
# This makes the first argument ($1) become the second argument ($2)
echo "Your Crush Name is: $1"
shift
# Print all remaining arguments after the shift
echo "Remaining arguments are: $@"