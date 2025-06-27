terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.0.0-beta3"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

# Create a VPC
resource "aws_vpc" "my-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "my-vpc"
  }
}

# Create a new VPC
resource "aws_vpc" "my-vpc1" {
  cidr_block = "192.0.0.0/16"
  tags = {
    Name = "my-vpc1"
  }
}

# Create a public subnet
resource "aws_subnet" "public-subnet" {
  cidr_block              = "10.0.1.0/24"
  vpc_id                  = aws_vpc.my-vpc.id
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet"
  }
}

# Create a private subnet
resource "aws_subnet" "private-subnet" {
  cidr_block              = "10.0.2.0/24"
  vpc_id                  = aws_vpc.my-vpc.id
  map_public_ip_on_launch = false

  tags = {
    Name = "private-subnet"
  }
}

# Create a public subnet for my-vpc1
resource "aws_subnet" "public-subnet1" {
  cidr_block              = "192.0.1.0/24"
  vpc_id                  = aws_vpc.my-vpc1.id
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet1"
  }
}

# Create an internet gateway
resource "aws_internet_gateway" "my-igw" {
  vpc_id = aws_vpc.my-vpc.id

  tags = {
    Name = "my-igw"
  }
}

# create an internet gateway for my-vpc1
resource "aws_internet_gateway" "my-igw1" {
  vpc_id = aws_vpc.my-vpc1.id

  tags = {
    Name = "my-igw1"
  }
}

# Create a route table
resource "aws_route_table" "my-rt" {
  vpc_id = aws_vpc.my-vpc.id

  route {
    cidr_block = "0.0.0.0/0" # route all outbound traffic to the internet gateway
    gateway_id = aws_internet_gateway.my-igw.id
  }
}

# Create a route table for my-vpc1
resource "aws_route_table" "my-rt1" {
  vpc_id = aws_vpc.my-vpc1.id

  route {
    cidr_block = "0.0.0.0/0" # route all outbound traffic to the internet gateway
    gateway_id = aws_internet_gateway.my-igw1.id
  }
}

# Associate the route table with the public subnet
resource "aws_route_table_association" "public-rt-association" {
  route_table_id = aws_route_table.my-rt.id
  subnet_id      = aws_subnet.public-subnet.id
}

# Associate the route table with my-vpc1 public subnet
resource "aws_route_table_association" "public-rt-association1" {
  route_table_id = aws_route_table.my-rt1.id
  subnet_id      = aws_subnet.public-subnet1.id
}

# Create a security group for the EC2 instance
resource "aws_security_group" "mhtServer-sg" {
  name        = "mhtServer-sg"
  description = "Security group for the EC2 instance"
  vpc_id      = aws_vpc.my-vpc.id

  # Inbound Rules for SSH access from anywhere
  ingress {
    from_port   = 22 # default port for SSH
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow SSH access from anywhere"
  }

  # Inbound Rules for HTTP access from anywhere
  ingress {
    from_port   = 80 # default port for HTTP
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow HTTP access from anywhere"
  }

  # Outbound Rules for all traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1" # all protocols
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow all outbound traffic"
  }

  tags = {
    Name = "mhtServer-sg"
  }
}

# Create peerings
resource "aws_vpc_peering_connection" "pingMyVPCtoMyVPC1" {
  peer_vpc_id = aws_vpc.my-vpc1.id
  vpc_id      = aws_vpc.my-vpc.id

  tags = {
    Name = "pingMyVPCtoMyVPC1"
  }
}

# # Create a EC2 instance
# resource "aws_instance" "mhtServer" {
#   ami                    = "ami-0f918f7e67a3323f0"
#   instance_type          = "t2.micro"
#   subnet_id              = aws_subnet.public-subnet.id
#   vpc_security_group_ids = [aws_security_group.mhtServer-sg.id]
#   tags = {
#     Name = "VPCServer"
#   }
# }

