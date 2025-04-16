#!bin/bash

read -p "Guess my crush name: " crushName

if [[ $crushName == "Emma Watson" ]];then
    echo "You are goddamn right"
else
    echo "You are wrong"
fi