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
listOfCrushes+=("LaLisa")
echo "Updated List of Crushes ${listOfCrushes[*]}"

# key value pair in array
declare -A crushesDetails
crushesDetails["perfectGirl"]=${listOfCrushes[0]}
crushesDetails["hottest"]=${listOfCrushes[1]}
crushesDetails["bestLook"]=${listOfCrushes[2]}
echo "Best feature of each crush is: perfectGirl ${crushesDetails["perfectGirl"]} 😍, hottest ${crushesDetails["hottest"]} 🔥, bestLook ${crushesDetails["bestLook"]} 😘"
# another way of declaring an array
crushesDetails=(["perfectGirl"]=${listOfCrushes[0]} ["hottest"]=${listOfCrushes[1]} ["bestLook"]=${listOfCrushes[2]})
echo "Best feature of each crush is: perfectGirl ${crushesDetails["perfectGirl"]} 😍, hottest ${crushesDetails["hottest"]} 🔥, bestLook ${crushesDetails["bestLook"]} 😘"

# string operations:
# length of the string, # is used for number of characters
echo "Length of the string is ${#name}"
# uppercase of the string using ^^
echo "Uppercase of the string is ${name^^}"
# lowercase of the string using ,,
echo "Lowercase of the string is ${name,,}"
# substring of the string, from index 5 to index 8
echo "Substring of the string is ${name:5:3}"
# replace substring of the string
echo "We can get another beauty if we replace the Last Name: ${name/Watson/Myers}"
<<comment
replace substring of the string, first one is variable name and second one is what we want to replace and third one is what we want to replace it with
comment