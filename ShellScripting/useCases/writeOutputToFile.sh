#!bin/bash

# debugging using set -x
set -x

# printing the name of the script using $0
echo "Name of the script: ${0}"

# >> will append the output to the end of the file
echo "Hello World" >> writeOutputToFile.txt

# redirecting the output to a file, > will overwrite the file
echo "Hello World (overwritten)" > writeOutputToFile.txt

# printing all of the content of the a directory
echo "printing all of the content of the a directory"
(echo "Listing all of the content of the a directory:"; ls ..) >> writeOutputToFile.txt

# logger command will store the output in /var/log/syslog
logger "hello from ${0}"

