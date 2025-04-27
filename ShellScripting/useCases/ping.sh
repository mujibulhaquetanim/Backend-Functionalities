#!bin/bash

read -p "Enter IP Address: " ip

# -c is for number of pings and 1 is for one ping
ping -c 1 $ip
# if ping is not successful then if/else will show result for sleep command as $? gives result of last command and it always return 0, that is why removing it by commenting
# sleep 3

if [[ $? -eq 0 ]]; then
    echo "$ip is up"
else
    echo "$ip is down"
fi