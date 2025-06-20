terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.0.0-beta3"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.7.2"
    }
  }
  # remote state for backup
  backend "s3" {
    bucket = "demo-bucket-a314658e4e1d0af9"
    key    = "remote-state/terraform.tfstate"
    region = "ap-south-1"
  }
}

provider "aws" {
  # Configuration options
  region = "ap-south-1"
}

# Generate a random id
resource "random_id" "rand_id" {
  byte_length = 8
}

resource "aws_instance" "demoServer" {
  # ami = "ami-0f918f7e67a3323f0"
  # using aws linux ami
  ami           = "ami-0b09627181c8d5778"
  instance_type = "t2.micro"
  tags = {
    Name = "demoServer-${random_id.rand_id.hex}"
  }

}
