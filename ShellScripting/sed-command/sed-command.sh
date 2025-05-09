#!bin/bash

# to see hidden character in a file, -n ensures only explicitly specified output is printed ans l is to list unambiguous representation of line meaning hidden characters.
echo "---to see hidden character in a file---"
sed -n 'l' "../useCases/readFileUsingLoop/readFile.txt" 

# wrap line, after every 12 characters new line will be added
echo -e "\n---wrap line---"
sed -n 'l 12' "../useCases/readFileUsingLoop/readFile.txt"

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

# delete a line from a file
echo -e "\n---delete a line from a file---"
# delete the line that contains Emma
echo -e "\n---delete the line that contains Emma---"
sed '/Emma/d' "../useCases/readFileUsingLoop/readFile.csv"
# delete the first line
echo -e "\n---delete the first line---"
sed '1d' "../useCases/readFileUsingLoop/readFile.csv"
# delete the last line
echo -e "\n---delete the last line---"
sed '$d' "../useCases/readFileUsingLoop/readFile.csv"
# delete the line in a given range
echo -e "\n---delete the line in a given range---"
sed '2,3d' "../useCases/readFileUsingLoop/readFile.csv"
# delete white spaces
echo -e "\n---delete white spaces---"
sed -i '/^$/d' "../useCases/readFileUsingLoop/readFile.csv"

# add certain word from a file in a different file, w is for write
echo -e "\n---add certain word from a file in a different file---"
sed '/England/ w EnglandCrushes.csv' "../useCases/readFileUsingLoop/readFile.csv"

# add line after a given line number, a is for append, we can use any pattern like name instead of line number.
echo -e "\n---add line after a given line number---"
# sed -i '3 a La Lisa, 28, Thailand' "../useCases/readFileUsingLoop/readFile.csv"
# add line after a given name
sed '/Sabila Nur/ a La Lisa, 28, Thailand' "../useCases/readFileUsingLoop/readFile.csv"
# change line, c is for change
echo -e "\n---change line---"
sed -i '/lolita/ c Alyla Browne, 15, Australia' "../useCases/readFileUsingLoop/readFile.csv"
# insert line at the beginning, i is for insert
echo -e "\n---insert line---"
sed '1 i Crush Names' "../useCases/readFileUsingLoop/readFile.csv"

# insert another file data after a given line number of another file using r is for read
echo -e "\n---insert another file data after a given line number of another file---"
sed -i '3r EnglandCrushes.csv' "../useCases/readFileUsingLoop/readFile.txt"