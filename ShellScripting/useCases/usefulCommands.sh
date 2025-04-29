#!bin/bash

# uid of current user, UID of a root user always will be 0, it would be useful to check whether the user is root user or not
echo "Your UID is: " $UID

# example of checking whether the user is root or not
if [ $UID -eq 0 ]; then
    echo "You are root user"
else
    echo "You are not root user"
fi

# random
echo "Random Number is: " $RANDOM

# example of generating random between 1 to 6
echo "Random Number between 1 to 6 is: " $(($RANDOM % 6 + 1))

