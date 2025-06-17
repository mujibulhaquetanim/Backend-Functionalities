terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "6.0.0-beta3"
    }
  }
}

provider "aws" {
  # Configuration options
  region = "ap-south-1"
}

resource "aws_instance" "mhtServer" {
    # ami = "ami-0f918f7e67a3323f0"
    # using aws linux ami
    ami = "ami-0b09627181c8d5778"
    instance_type = "t2.micro"
    tags = {
        Name = "mhtModifiedServer"
    }
  
}