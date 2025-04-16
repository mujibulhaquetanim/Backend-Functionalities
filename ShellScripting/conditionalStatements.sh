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

# greater than, less than, greater than or equal to, less than or equal to

# -eq -ne -gt -ge -lt -le

# -a -o

# [[ $crushName == "Emma Watson" ]] || [[ $crushName == "Sabila Nur" ]]

# [[ $crushName == "Emma Watson" ]] && [[ $crushName == "Sabila Nur" ]]