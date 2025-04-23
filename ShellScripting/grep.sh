#!bin/bash
CSV_FILE="${PWD}/useCases/readFileUsingLoop/readFile.csv"
TXT_FILE="${PWD}/useCases/readFileUsingLoop/readFile.txt"

# grep is a command that is used to search for a pattern in a file and print the lines that contain the pattern.
# -i is a flag that is used to ignore case sensitivity in the search.
grep -i "30" "./useCases/readFileUsingLoop/readFile.csv"

# this command will give any result that has a word that starts with "s"
echo "---This command will give any result that has a word that starts with 's'---"
# grep -i "s" "./useCases/readFileUsingLoop/readFile.csv"
grep -i "s" "$TXT_FILE"

# to get exact match of the word use -w flag
echo "---This command will give exact match of the word 's'---"
grep -iw "s" "${CSV_FILE}"

# to get the line number of the match use -n flag
echo "---This command will give the line number of the match---"
grep -in "sa" "${CSV_FILE}"

# to get match from different given files
echo "---This command will give match from different given files---"
grep -i "emma" "${TXT_FILE}" "${CSV_FILE}"
