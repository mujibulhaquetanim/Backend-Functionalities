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

# until loop
a=12
until [[ $a -eq 7 ]]; do
    echo "count is $a"
    a=$((a-1))
    # let a--
done

# # infinite loop, useful for constantly running process like backup process, monitoring process etc
# time=0
# while true
# do
#     echo "Infinite Loop Running for $((++time)) seconds"
#     sleep 1s
# done

# infinite loop using for loop
for (( ; ; ))
do
    echo "Infinite Loop Running using for loop"
    sleep 1s
done