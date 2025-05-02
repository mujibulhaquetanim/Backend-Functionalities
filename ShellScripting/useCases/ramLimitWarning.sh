#!bin/bash

FREE_MEM=$(free -mt | grep "Total" | awk '{print $4}')
MEM_LIMIT=7000

if [[ $FREE_MEM -lt $MEM_LIMIT ]]; then
    echo "Free Memory is less than 7GB and it is $FREE_MEM MB";
else
    echo "Free Memory is more than 7GB";
fi