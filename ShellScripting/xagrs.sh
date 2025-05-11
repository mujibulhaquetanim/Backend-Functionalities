#!bin/bash

#When you need to pass multiple arguments to a command but the original command doesn't handle multiple inputs well, xargs steps in to process them efficiently.

# xargs taking hello as input and passing it to echo
echo "Hello" | xargs echo

# word counting using xargs, wc returns # of lines, words, and bytes in a file and file name is passed to xargs. i.e. 3 6 45 ./tr-output.txt
find . -type f -name "tr-output.txt" | xargs wc