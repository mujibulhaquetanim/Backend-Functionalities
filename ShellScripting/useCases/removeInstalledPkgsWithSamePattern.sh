#!bin/bash

# useful to remove packages with same pattern in package.json file
read -p "Enter the pattern to remove: " pattern

# i.e. @nextui-org/
# all of the packages with the pattern @nextui-org/ will be removed
pnpm list --depth=0 | grep $pattern | awk '{print $1}' | xargs pnpm remove

# $? is the exit status of the previous command if it is 0 then it is success and if it is 1 then it is failure
if [ $? -eq 0 ]; then
    echo "Packages removed successfully."
else
    echo "Failed to remove packages."
fi