#!bin/bash

echo "---Find Beautiful Woman---"
echo "Provide option:"
echo "A for England "
echo "B for India" "
echo "C for Bangladesh"

read option

case $option in
    H) echo "Emma Watson is from England"
    ;;
    B) echo "Shraddha Kapoor is from India"
    ;;
    D) echo "Sabila Nur is from Bangladesh"
    ;;
    *) echo "Invalid Option"
    ;;
esac