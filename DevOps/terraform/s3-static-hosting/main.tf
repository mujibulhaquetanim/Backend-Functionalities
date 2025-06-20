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
}

provider "aws" {
  # Configuration options
  region = "ap-south-1"
}

# Generate a random id
resource "random_id" "rand_id" {
  byte_length = 8
}

# using generated random id to create bucket
resource "aws_s3_bucket" "terraBucket" {
  bucket = "demo-bucket-${random_id.rand_id.hex}"
}

# uploading file
resource "aws_s3_object" "terraData" {
  bucket = aws_s3_bucket.terraBucket.bucket
  source = "./index.html"
  key    = "index.html"
}

output "terraBucket" {
  value = aws_s3_bucket.terraBucket.id
}
