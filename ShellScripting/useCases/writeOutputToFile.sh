#!bin/bash

# >> will append the output to the end of the file
echo "Hello World" >> writeOutputToFile.txt

# redirecting the output to a file, > will overwrite the file
echo "Hello World (overwritten)" > writeOutputToFile.txt

# printing all of the content of the a directory
echo "printing all of the content of the a directory"
(echo "Listing all of the content of the a directory:"; ls ..) >> writeOutputToFile.txt