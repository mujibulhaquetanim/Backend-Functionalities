#!bin/bash

read -p "Guess any of my crush name: " crushName

if [[ $crushName == "Emma Watson" ]];then
    echo "You are goddamn right"
elif [[ $crushName == "Sabila Nur" ]];then
    echo "You are goddamn right"
elif [[ $crushName == "Shraddha Kapoor" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

# logical operators
read -p "Guess her country: " country
# or operators
if [[ $crushName == "Emma Watson" || $country == "England" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

# and operators
if [[ $crushName == "Emma Watson" && $country == "England" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi


# Ask for age input
read -p "Guess her age: " age

# Set variables
crushName="Emma Watson"
country="England"

# First condition
if [[ $crushName == "Emma Watson" && $country == "England" && $age -gt 30 ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

# Second condition
if [[ $age -eq 34 ]] && [[ $crushName == "Emma Watson" ]] && [[ $country == "England" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

# conditional expression with && and || it is called short circuit evaluation
read -p "Guess another crush name: " crushName3

[[ $crushName3 == "Shraddha Kapoor" ]] && echo "You are goddamn right" || echo "You are wrong"

# file exists or not
FILE="${PWD}/useCases/readFileUsingLoop/readFile.txt"
DIR="${PWD}/useCases/readFileUsingLoop"

if [[ -f $FILE ]];then
    echo "File exists"
else
    echo "File does not exist"
    exit 1
fi

# directory exists or not
if [[ -d $DIR ]];then
    echo "Directory exists"
else
    echo "Directory does not exist"
    exit 1
fi