#!bin/bash

function printCrushName(){
    # $1, $2, $3, $4 are arguments
    echo "Crush Names: $1 $2 $3 $4"
}

# Calling the function and passing arguments
printCrushName "Emma" "Sabila" "Shraddha" "LaLisa"

# addition of two numbers
function addition(){
    # local keyword is used to declare local variables
    local num1=$1
    local num2=$2
    local sum=$((num1 + num2))
    #return keyword does not work, use echo
    echo $sum
}
result=$(addition 10 20)
echo "Addition of 10 and 20 is: " $result