# S3 Logs

This is a log file for S3. It contains information about the operations performed by S3. From adding policies to creating buckets and uploading files to s3.

## terraform apply of s3 bucket creation

```ts
╰─ terraform apply

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_s3_bucket.terraBucket will be created
  + resource "aws_s3_bucket" "terraBucket" {
      + acceleration_status         = (known after apply)
      + acl                         = (known after apply)
      + arn                         = (known after apply)
      + bucket                      = (known after apply)
      + bucket_domain_name          = (known after apply)
      + bucket_prefix               = (known after apply)
      + bucket_region               = (known after apply)
      + bucket_regional_domain_name = (known after apply)
      + force_destroy               = false
      + hosted_zone_id              = (known after apply)
      + id                          = (known after apply)
      + object_lock_enabled         = (known after apply)
      + policy                      = (known after apply)
      + region                      = "ap-south-1"
      + request_payer               = (known after apply)
      + tags_all                    = (known after apply)
      + website_domain              = (known after apply)
      + website_endpoint            = (known after apply)

      + cors_rule (known after apply)

      + grant (known after apply)

      + lifecycle_rule (known after apply)

      + logging (known after apply)

      + object_lock_configuration (known after apply)

      + replication_configuration (known after apply)

      + server_side_encryption_configuration (known after apply)

      + versioning (known after apply)

      + website (known after apply)
    }

  # aws_s3_object.terraData will be created
  + resource "aws_s3_object" "terraData" {
      + acl                    = (known after apply)
      + arn                    = (known after apply)
      + bucket                 = (known after apply)
      + bucket_key_enabled     = (known after apply)
      + checksum_crc32         = (known after apply)
      + checksum_crc32c        = (known after apply)
      + checksum_crc64nvme     = (known after apply)
      + checksum_sha1          = (known after apply)
      + checksum_sha256        = (known after apply)
      + content_type           = (known after apply)
      + etag                   = (known after apply)
      + force_destroy          = false
      + id                     = (known after apply)
      + key                    = "index.html"
      + kms_key_id             = (known after apply)
      + region                 = "ap-south-1"
      + server_side_encryption = (known after apply)
      + source                 = "./index.html"
      + storage_class          = (known after apply)
      + tags_all               = (known after apply)
      + version_id             = (known after apply)
    }

  # random_id.rand_id will be created
  + resource "random_id" "rand_id" {
      + b64_std     = (known after apply)
      + b64_url     = (known after apply)
      + byte_length = 8
      + dec         = (known after apply)
      + hex         = (known after apply)
      + id          = (known after apply)
    }

Plan: 3 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + terraBucket = (known after apply)

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

random_id.rand_id: Creating...
random_id.rand_id: Creation complete after 0s [id=oxRljk4dCvk]
aws_s3_bucket.terraBucket: Creating...
aws_s3_bucket.terraBucket: Creation complete after 2s [id=demo-bucket-a314658e4e1d0af9]
aws_s3_object.terraData: Creating...
aws_s3_object.terraData: Creation complete after 0s [id=index.html]

Apply complete! Resources: 3 added, 0 changed, 0 destroyed.

Outputs:

terraBucket = "demo-bucket-a314658e4e1d0af9"
```

## change public block access on s3 bucket policy off

```bash
╰─ terraform apply
random_id.rand_id: Refreshing state... [id=oxRljk4dCvk]
aws_s3_bucket.terraBucket: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_object.terraData: Refreshing state... [id=index.html]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_s3_bucket_public_access_block.demoBlock will be created
  + resource "aws_s3_bucket_public_access_block" "demoBlock" {
      + block_public_acls       = false
      + block_public_policy     = false
      + bucket                  = "demo-bucket-a314658e4e1d0af9"
      + id                      = (known after apply)
      + ignore_public_acls      = false
      + region                  = "ap-south-1"
      + restrict_public_buckets = false
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_s3_bucket_public_access_block.demoBlock: Creating...
aws_s3_bucket_public_access_block.demoBlock: Creation complete after 0s [id=demo-bucket-a314658e4e1d0af9]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

terraBucket = "demo-bucket-a314658e4e1d0af9"
```

## add s3 bucket policy

```bash
╰─ terraform apply
random_id.rand_id: Refreshing state... [id=oxRljk4dCvk]
aws_s3_bucket.terraBucket: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_public_access_block.demoBlock: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_object.terraData: Refreshing state... [id=index.html]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_s3_bucket_policy.terraBucketPolicy will be created
  + resource "aws_s3_bucket_policy" "terraBucketPolicy" {
      + bucket = "demo-bucket-a314658e4e1d0af9"
      + id     = (known after apply)
      + policy = jsonencode(
            {
              + Statement = [
                  + {
                      + Action    = [
                          + "s3:GetObject",
                        ]
                      + Effect    = "Allow"
                      + Principal = "*"
                      + Resource  = [
                          + "arn:aws:s3:::demo-bucket-a314658e4e1d0af9/*",
                        ]
                      + Sid       = "PublicReadGetObject"
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + region = "ap-south-1"
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_s3_bucket_policy.terraBucketPolicy: Creating...
aws_s3_bucket_policy.terraBucketPolicy: Creation complete after 1s [id=demo-bucket-a314658e4e1d0af9]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

terraBucket = "demo-bucket-a314658e4e1d0af9"
```

## rename index.html resource and add error.html resource

```bash
╰─ terraform apply
random_id.rand_id: Refreshing state... [id=oxRljk4dCvk]
aws_s3_object.terraData: Refreshing state... [id=index.html]
aws_s3_bucket.terraBucket: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_public_access_block.demoBlock: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_policy.terraBucketPolicy: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
  - destroy

Terraform will perform the following actions:

  # aws_s3_object.errorFile will be created
  + resource "aws_s3_object" "errorFile" {
      + acl                    = (known after apply)
      + arn                    = (known after apply)
      + bucket                 = "demo-bucket-a314658e4e1d0af9"
      + bucket_key_enabled     = (known after apply)
      + checksum_crc32         = (known after apply)
      + checksum_crc32c        = (known after apply)
      + checksum_crc64nvme     = (known after apply)
      + checksum_sha1          = (known after apply)
      + checksum_sha256        = (known after apply)
      + content_type           = (known after apply)
      + etag                   = (known after apply)
      + force_destroy          = false
      + id                     = (known after apply)
      + key                    = "error.html"
      + kms_key_id             = (known after apply)
      + region                 = "ap-south-1"
      + server_side_encryption = (known after apply)
      + source                 = "./error.html"
      + storage_class          = (known after apply)
      + tags_all               = (known after apply)
      + version_id             = (known after apply)
    }

  # aws_s3_object.indexFile will be created
  + resource "aws_s3_object" "indexFile" {
      + acl                    = (known after apply)
      + arn                    = (known after apply)
      + bucket                 = "demo-bucket-a314658e4e1d0af9"
      + bucket_key_enabled     = (known after apply)
      + checksum_crc32         = (known after apply)
      + checksum_crc32c        = (known after apply)
      + checksum_crc64nvme     = (known after apply)
      + checksum_sha1          = (known after apply)
      + checksum_sha256        = (known after apply)
      + content_type           = (known after apply)
      + etag                   = (known after apply)
      + force_destroy          = false
      + id                     = (known after apply)
      + key                    = "index.html"
      + kms_key_id             = (known after apply)
      + region                 = "ap-south-1"
      + server_side_encryption = (known after apply)
      + source                 = "./index.html"
      + storage_class          = (known after apply)
      + tags_all               = (known after apply)
      + version_id             = (known after apply)
    }

  # aws_s3_object.terraData will be destroyed
  # (because aws_s3_object.terraData is not in configuration)
  - resource "aws_s3_object" "terraData" {
      - arn                           = "arn:aws:s3:::demo-bucket-a314658e4e1d0af9/index.html" -> null
      - bucket                        = "demo-bucket-a314658e4e1d0af9" -> null
      - bucket_key_enabled            = false -> null
      - content_type                  = "application/octet-stream" -> null
      - etag                          = "4f71798bd71dcc5c7d1ca96f61915226" -> null
      - force_destroy                 = false -> null
      - id                            = "index.html" -> null
      - key                           = "index.html" -> null
      - metadata                      = {} -> null
      - region                        = "ap-south-1" -> null
      - server_side_encryption        = "AES256" -> null
      - source                        = "./index.html" -> null
      - storage_class                 = "STANDARD" -> null
      - tags                          = {} -> null
      - tags_all                      = {} -> null
        # (14 unchanged attributes hidden)
    }

Plan: 2 to add, 0 to change, 1 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_s3_object.terraData: Destroying... [id=index.html]
aws_s3_object.errorFile: Creating...
aws_s3_object.indexFile: Creating...
aws_s3_object.terraData: Destruction complete after 1s
aws_s3_object.errorFile: Creation complete after 1s [id=error.html]
aws_s3_object.indexFile: Creation complete after 1s [id=index.html]

Apply complete! Resources: 2 added, 0 changed, 1 destroyed.

Outputs:

terraBucket = "demo-bucket-a314658e4e1d0af9"
```

## s3 web hosting configuration done

```bash
╰─ terraform apply
random_id.rand_id: Refreshing state... [id=oxRljk4dCvk]
aws_s3_bucket.terraBucket: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_public_access_block.demoBlock: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_policy.terraBucketPolicy: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_object.indexFile: Refreshing state... [id=index.html]
aws_s3_object.errorFile: Refreshing state... [id=error.html]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_s3_bucket_website_configuration.terraBucketWebConfig will be created
  + resource "aws_s3_bucket_website_configuration" "terraBucketWebConfig" {
      + bucket           = "demo-bucket-a314658e4e1d0af9"
      + id               = (known after apply)
      + region           = "ap-south-1"
      + routing_rules    = (known after apply)
      + website_domain   = (known after apply)
      + website_endpoint = (known after apply)

      + error_document {
          + key = "error.html"
        }

      + index_document {
          + suffix = "index.html"
        }

      + routing_rule (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_s3_bucket_website_configuration.terraBucketWebConfig: Creating...
aws_s3_bucket_website_configuration.terraBucketWebConfig: Creation complete after 1s [id=demo-bucket-a314658e4e1d0af9]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

terraBucket = "demo-bucket-a314658e4e1d0af9.s3-website.ap-south-1.amazonaws.com"
```

## add content-type to resource upload

```bash
╰─ terraform apply
random_id.rand_id: Refreshing state... [id=oxRljk4dCvk]
aws_s3_bucket.terraBucket: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_policy.terraBucketPolicy: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_public_access_block.demoBlock: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_bucket_website_configuration.terraBucketWebConfig: Refreshing state... [id=demo-bucket-a314658e4e1d0af9]
aws_s3_object.errorFile: Refreshing state... [id=error.html]
aws_s3_object.indexFile: Refreshing state... [id=index.html]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  ~ update in-place

Terraform will perform the following actions:

  # aws_s3_object.errorFile will be updated in-place
  ~ resource "aws_s3_object" "errorFile" {
      ~ content_type                  = "application/octet-stream" -> "text/css"
        id                            = "error.html"
        tags                          = {}
      + version_id                    = (known after apply)
        # (25 unchanged attributes hidden)
    }

  # aws_s3_object.indexFile will be updated in-place
  ~ resource "aws_s3_object" "indexFile" {
      ~ content_type                  = "application/octet-stream" -> "text/html"
        id                            = "index.html"
        tags                          = {}
      + version_id                    = (known after apply)
        # (25 unchanged attributes hidden)
    }

Plan: 0 to add, 2 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_s3_object.errorFile: Modifying... [id=error.html]
aws_s3_object.indexFile: Modifying... [id=index.html]
aws_s3_object.errorFile: Modifications complete after 1s [id=error.html]
aws_s3_object.indexFile: Modifications complete after 1s [id=index.html]

Apply complete! Resources: 0 added, 2 changed, 0 destroyed.

Outputs:

terraBucket = "demo-bucket-a314658e4e1d0af9.s3-website.ap-south-1.amazonaws.com"
```
