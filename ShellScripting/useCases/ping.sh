#!bin/bash

read -p "Enter IP Address: " ip

# -c is for number of pings and 1 is for one ping
ping -c 1 $ip
sleep 3

if [[ $? -eq 0 ]]; then
    echo "$ip is up"
else
    echo "$ip is down"
fi