#!bin/bash

# read is a command that is used to take input from the user and store it in a var, here crushName is the var and -p is for prompt.
read -p "Enter your Crush Name: " crushName

echo "So your crush is $crushName"

# arguments are passed to the script using $1 from the command line while executing the script
echo "Your Crush Name is: $1

# shift keyword is used to shift the arguments to the left, so that the first argument is now the second argument, here after using the first argument rest of the arguments are shifted to variable $2
# i.e. shript.sh "Emma Watson" the most beautiful girl in the world. here "Emma Watson" is stored in $1 and "the most beautiful girl in the world." is stored in $2
shift
echo "Your Crush Name is: $2