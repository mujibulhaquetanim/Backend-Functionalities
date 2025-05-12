#!bin/bash

read -p "Enter directory name: " dirName
mkdir -p "$dirName/Documents" "$dirName/Images" "$dirName/Videos"

mv "$dirName"/*.pdf "$dirName/Documents/"
mv "$dirName"/*.jpg "$dirName/Images/"
mv "$dirName"/*.mp4 "$dirName/Videos/"

echo "$dirName organized!"