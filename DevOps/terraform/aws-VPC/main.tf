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

# Create an internet gateway
resource "aws_internet_gateway" "my-igw" {
  vpc_id = aws_vpc.my-vpc.id

  tags = {
    Name = "my-igw"
  }
}

# Create a route table
resource "aws_route_table" "my-rt" {
    vpc_id = aws_vpc.my-vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.my-igw.id
    }
  
}

# Associate the route table with the public subnet
resource "aws_route_table_association" "public-rt-association" {
  route_table_id = aws_route_table.my-rt.id
  subnet_id = aws_subnet.public-subnet.id
}

# Create a EC2 instance
resource "aws_instance" "mhtServer" {
    ami = "ami-0f918f7e67a3323f0"
    instance_type = "t2.micro"
    subnet_id = aws_subnet.public-subnet.id
    tags = {
        Name = "VPCServer"
    }
  
}

