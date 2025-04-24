#!bin/bash

# read is a command that is used to take input from the user and store it in a var, here crushName is the var and -p is for prompt.
read -p "Enter your Crush Name: " crushName

echo "So your crush is $crushName"

# arguments are passed to the script using $1, $2, $3, $4 from the command line while executing the script
echo "Your Crush Name is: $1 $2 $3 $4"