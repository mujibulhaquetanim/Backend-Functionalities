#!bin/bash

# grep is a command that is used to search for a pattern in a file and print the lines that contain the pattern.
# -i is a flag that is used to ignore case sensitivity in the search.
grep -i "30" "./useCases/readFileUsingLoop/readFile.csv"

# this command will give any result that has a word that starts with "s"
echo "---This command will give any result that has a word that starts with 's'---"
grep -i "s" "./useCases/readFileUsingLoop/readFile.csv"

# to get exact match of the word use -w flag
echo "---This command will give exact match of the word 's'---"
grep -iw "s" "./useCases/readFileUsingLoop/readFile.csv"

# to get the line number of the match use -n flag
echo "---This command will give the line number of the match---"
grep -in "sa" "./useCases/readFileUsingLoop/readFile.csv"
