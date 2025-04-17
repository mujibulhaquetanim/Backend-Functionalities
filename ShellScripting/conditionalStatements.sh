#!bin/bash

read -p "Guess any of my crush name: " crushName

if [[ $crushName == "Emma Watson" ]];then
    echo "You are goddamn right"
elif [[ $crushName == "Sabila Nur" ]];then
    echo "You are goddamn right"
elif [[ $crushName == "Shraddha Kapoor" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

# logical operators
read -p "Guess her country: " country
# or operators
if [[ $crushName == "Emma Watson" || $country == "England" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

# and operators
if [[ $crushName == "Emma Watson" && $country == "England" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi

