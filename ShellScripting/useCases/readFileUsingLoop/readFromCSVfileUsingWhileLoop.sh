#!bin/bash

FILE="${PWD}/readFile.csv"

# make csv file
touch $FILE

# write to csv file
echo -e "Name, Age, Country" > $FILE
echo -e "Emma Watson, 25, England" >> $FILE
echo -e "Sabila Nur, 30, Bangladesh" >> $FILE
echo -e "Shraddha Kapoor, 33, India" >> $FILE

# read from csv file
while IFS="," read -r name age country
do
    echo "Name: $name, Age: $age, Country: $country"
done < "$FILE"