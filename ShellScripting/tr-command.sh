#!bin/bash

# `tr` command is used to translate, modify, or delete characters in a string.

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
tr 'a-zA-Z' 'A-Za-z' < ./useCases/readFileUsingLoop/readFile.txt > tr-output.txt