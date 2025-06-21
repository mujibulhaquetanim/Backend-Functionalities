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

#block public access off
resource "aws_s3_bucket_public_access_block" "demoBlock" {
  bucket = aws_s3_bucket.terraBucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# uploading file
resource "aws_s3_object" "terraData" {
  bucket = aws_s3_bucket.terraBucket.bucket
  source = "./index.html"
  key    = "index.html"
}

# repeat it for other files
# resource "aws_s3_object" "terraData" {
#   bucket = aws_s3_bucket.terraBucket.bucket
#   source = "./file.extension"
#   key    = "file.extension"
# }


output "terraBucket" {
  value = aws_s3_bucket.terraBucket.id
}
