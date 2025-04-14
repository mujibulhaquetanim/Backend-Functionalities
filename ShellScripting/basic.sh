#!/bin/bash

# we can run this using `bash basic.sh` or making it executable using `chmod +x basic.sh` then run `./basic.sh`
echo "Hello From Bash Script"

# Use of variables
name="Emma Watson"
feature="beauty"
# variable to store output of command
hostname=$(hostname)
echo "i am $hostname, My Crush is $name and she is natural $feature"