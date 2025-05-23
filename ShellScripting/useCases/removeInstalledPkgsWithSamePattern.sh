#!bin/bash

# useful to remove packages with same pattern in package.json file
read -p "Enter the pattern to remove: " pattern

# i.e. @nextui-org/
# all of the packages with the pattern @nextui-org/ will be removed
pnpm list --depth=0 | grep $pattern | awk '{print $1}' | xargs pnpm remove

echo "All packages with the pattern $pattern have been removed."