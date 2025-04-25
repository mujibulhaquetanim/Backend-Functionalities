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

# only print the file name
echo -e "\n\n---This command will only print the file name---"
grep -il "sa" "${CSV_FILE}"


# to get match from different given files
echo "---This command will give match from different given files---"
# grep -i "emma" "${TXT_FILE}" "${CSV_FILE}"
# hiding the file name, useful for data fetching
grep -ih "emma" "${TXT_FILE}" "${CSV_FILE}"

# finding multiple words in a file
echo -e "\n\n---This command will find multiple words in a file---"
grep -ie "emma" -e "sabila" -e "shraddha" "${TXT_FILE}"

# alternate way of finding multiple words in a file
egrep -i "sabila|shraddha" "$TXT_FILE" "$CSV_FILE"

# ^ and $ are used to match the start and end of the line
echo -e "\n\n---This command will match the start and end of the line---"
grep -i ^S "$CSV_FILE"
grep -i a$ "$CSV_FILE"

# search a name in a directory
echo -e "\n\n---This command will search a name in a directory---"
grep -iR "Sabila" "./useCases/readFileUsingLoop"

# using grep with ls. ls will list all the files in the current directory and then grep will search for the word "grep"
echo -e "\n\n---This command will use grep with ls---"
ls | grep -i "grep"

# if i want to search but not print on the terminal. wc -l will count the number of lines
echo -e "\n\n---This command will search but not print on the terminal---"
# grep -i "Sabila" "$TXT_FILE" | wc -l
grep -iq "Sabila" "$TXT_FILE"
echo $? # to check the previous command is success or not, 0 is success and 1 is failure

