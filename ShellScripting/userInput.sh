#!bin/bash

# check if no arguments are provided, exit 1 is for error and exit 0 is for success. $# is the number of arguments
if [[ $# -eq 0 ]]; then
    echo "No arguments provided"
    exit 1
fi

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

# use shift keyword in a while loop for displaying the arguments
while [[ $1 != "" ]]; do
    echo "Your Crush Name is: $1"
    shift # discard the first argument and move to the next
done