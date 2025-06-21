# S3 Logs

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
