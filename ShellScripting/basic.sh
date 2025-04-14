#!/bin/bash

# we can run this using `bash basic.sh` or making it executable using `chmod +x basic.sh` then run `./basic.sh`
echo "Hello From Bash Script"

# Use of variables
name="Emma Watson"
feature="beauty"
# variable to store output of command
hostname=$(hostname)
echo "i am $hostname, My Crush is $name and she is natural $feature"
# constant variable
readonly rating=10
echo "She is my crush, i rate her $rating/10 😊"

# Use of arrays
# declare -a names=("Emma" "Emma" "Emma")
listOfCrushes=("EmmaWatsom" "SabilaNur" "ShraddhaKapoor")
echo "My Crushes are ${listOfCrushes[0]}, ${listOfCrushes[1]}, ${listOfCrushes[2]}"
# printing the whole array
echo "Load of Crushes ${listOfCrushes[*]}"
# length of the array
echo "Number of Crushes ${#listOfCrushes[*]}"
# slicing the array
echo "Slicing of Crushes ${listOfCrushes[@]:1:2}"
# adding an element to the array
listOfCrushes+=("Millie Bobby Brown")
