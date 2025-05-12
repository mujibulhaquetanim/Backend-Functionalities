#!bin/bash

# generating secure password
password=$(openssl rand -base64 32)
echo $password