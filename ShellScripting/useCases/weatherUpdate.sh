#!bin/bash

echo "---Welcome to Weather Update---"
echo -e "\nFor simpler weather update, press 1"
echo "For advanced weather update, press 2"

read option

if [[ $option -eq 1 ]]; then
    curl "https://wttr.in/?format=3"
elif [[ $option -eq 2 ]]; then
    echo "Enter the city name: "
    read city
    curl "https://wttr.in/$city"
else
    echo "Invalid option"
fi