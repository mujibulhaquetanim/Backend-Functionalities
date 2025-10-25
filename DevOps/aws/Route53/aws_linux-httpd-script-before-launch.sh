#!/bin/bash

sudo yum update -y

# Install Apache web server (httpd)
sudo yum install -y httpd
sudo systemctl start httpd
sudo systemctl enable httpd

# create a simple HTML file to verify web server is running
echo "<html><h1>Welcome to mhtprojects.site from Route R53  Via httpd</h1></html>" > /var/www/html/index.html