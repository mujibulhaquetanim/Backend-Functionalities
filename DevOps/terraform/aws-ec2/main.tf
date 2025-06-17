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
    ami = "ami-0f918f7e67a3323f0"
    instance_type = "t2.micro"
    tags = {
        Name = "mhtServer"
    }
  
}