#!bin/bash

# manual loop

# manual loop using string
for crushName in "Emma Watson" "Sabila Nur" "Shraddha Kapoor"
do
    echo "My Crush is $crushName"
done

# manual loop using number
echo "Number of My Current Crushes"
for i in 1 2 3 4
do
    echo "My Crush is $i"
done

# brace expansion
listOfCrushes=("Emma Watson" "Sabila Nur" "Shraddha Kapoor")
for i in {0..2}
do
    echo "My Crush is ${listOfCrushes[$i]}"
done

# while loop with arithmetic operations
i=0
while [ $i -lt ${#listOfCrushes[*]} ]
do
    echo "My Crush is ${listOfCrushes[$i]}"
    i=$((i+1))
done