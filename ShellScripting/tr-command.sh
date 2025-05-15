#!bin/bash

# `tr` command is used to translate, modify, or delete characters in a string.
# tr [options] SET1 [SET2]

# remove , from string
echo "Emma, Watson" | tr -d ','

# replacing string
echo "Emma,Watson" | tr ',' ' '

# delete string also delete any letter that in the string like a in the watson.
echo "Emma Watson" | tr -d 'Emma'

# make string lowercase
echo "emma watson" | tr 'a-z' 'A-Z'

# compress multiple repeated spaces or letters.
echo "Emma Watson!!!" | tr -s 'a  !'

# filter out non-alphabetic characters
echo "Emma Watson483784718" | tr -cd 'a-zA-Z'

echo -e "\n"

# convert spaces into new line
echo "Emma Watson" | tr ' ' '\n'


# make lowercase to uppercase and uppercase to lowercase
echo "Emma Watson" | tr 'a-zA-Z' 'A-Za-z'

# use tr command with files
# tr 'a-zA-Z' 'A-Za-z' < ./useCases/readFileUsingLoop/readFile.txt > tr-output.txt

# replace ',' with ' ' in csv file
# tr ',' ' ' < ./useCases/readFileUsingLoop/readFile.csv > tr-output.txt
# remove double quotes
cat tr-output.txt | tr -d '"'
# remove extra spaces
cat tr-output.txt | tr -s ' '
# stripping numbers, -c flag is a complement 
echo "Phone: +880-1234-5678" | tr -cd '0-9'