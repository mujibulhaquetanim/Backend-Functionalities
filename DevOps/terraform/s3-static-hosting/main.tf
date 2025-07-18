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

resource "aws_s3_bucket_policy" "terraBucketPolicy" {
  bucket = aws_s3_bucket.terraBucket.id
  policy = jsonencode(
    {
      Version = "2012-10-17",
      Statement = [
        {
          Sid       = "PublicReadGetObject",
          Effect    = "Allow",
          Principal = "*",
          Action = [
            "s3:GetObject"
          ],
          Resource = [
            "arn:aws:s3:::${aws_s3_bucket.terraBucket.id}/*"
          ]
        }
      ]
    }
  )
}

resource "aws_s3_bucket_website_configuration" "terraBucketWebConfig" {
  bucket = aws_s3_bucket.terraBucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

# uploading file
resource "aws_s3_object" "indexFile" {
  bucket       = aws_s3_bucket.terraBucket.bucket
  source       = "./index.html"
  key          = "index.html"
  content_type = "text/html"
}

# repeat it for other files
resource "aws_s3_object" "errorFile" {
  bucket       = aws_s3_bucket.terraBucket.bucket
  source       = "./error.html"
  key          = "error.html"
  content_type = "text/html"
}


output "terraBucket" {
  # value = aws_s3_bucket.terraBucket.id
  value = aws_s3_bucket_website_configuration.terraBucketWebConfig.website_endpoint
}
