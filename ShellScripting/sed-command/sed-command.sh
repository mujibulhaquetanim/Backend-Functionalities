#!bin/bash

# read a specific line (1st line) from a file
echo "---read a specific line (1st line) from a file---"
sed -n '1p' "../useCases/readFileUsingLoop/readFile.txt"

# read the last line from a file
echo -e "\n---read the last line from a file---"
sed -n '$p' "../useCases/readFileUsingLoop/readFile.txt"

# show line in a given range
echo -e "\n---show line in a given range (2nd and 3rd line)---"
sed -n '2,3p' "../useCases/readFileUsingLoop/readFile.txt"

# read certain word from a file
echo -e "\n---read certain word from a file---"
sed -n '/Bangladesh/p' "../useCases/readFileUsingLoop/readFile.csv"

# replace a word in a file, s is for substitute and g is for global.
echo -e "\n---replace a word in a file---"
sed 's/Bangladesh/Chattogram/' "../useCases/readFileUsingLoop/readFile.csv"
sed 's/Bangladesh/Chattogram/g' "../useCases/readFileUsingLoop/readFile.csv"
# to make change on file use -i flag
sed -i 's/Bangladesh/Chattogram/g' "../useCases/readFileUsingLoop/readFile.csv"
# to substitute a word (GB) that related to a word(Emma) in a file.
sed '/Emma/ s/England/GB/g' "../useCases/readFileUsingLoop/readFile.csv"

# writing multiple expressions using sed
echo -e "\n---writing multiple expressions using sed---"
sed -ne "/Bangladesh/p" -e "/India/p" "../useCases/readFileUsingLoop/readFile.csv"

# read more two lines after a given line number
echo -e "\n---read more two lines after a given line number---"
sed -n '2,+2p' "../useCases/readFileUsingLoop/readFile.csv"

# read every second line from a file
echo -e "\n---read every second line from a file---"
sed -n '2~2p' "../useCases/readFileUsingLoop/readFile.csv"

# read expression from a file
echo -e "\n---read expression from a file---"
sed -n -f "./file-expression.txt" "../useCases/readFileUsingLoop/readFile.csv"
