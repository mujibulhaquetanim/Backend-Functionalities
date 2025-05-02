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

# convert spaces into new line
echo "Emma Watson" | tr ' ' '\n'