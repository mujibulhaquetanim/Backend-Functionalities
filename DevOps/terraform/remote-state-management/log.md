# Remote backup log in s3

this is info of terraform.tfstate inside s3, file name is remote-state/terraform.tfstate.

```json
{
  "version": 4,
  "terraform_version": "1.12.2",
  "serial": 1,
  "lineage": "835663ef-0d48-2a7b-0ba2-5c686462cd10",
  "outputs": {},
  "resources": [
    {
      "mode": "managed",
      "type": "aws_instance",
      "name": "demoServer",
      "provider": "provider[\"registry.terraform.io/hashicorp/aws\"]",
      "instances": [
        {
          "schema_version": 2,
          "attributes": {
            "ami": "ami-0b09627181c8d5778",
            "arn": "arn:aws:ec2:ap-south-1:137756268028:instance/i-0f5455640cce9b769",
            "associate_public_ip_address": true,
            "availability_zone": "ap-south-1b",
            "capacity_reservation_specification": [
              {
                "capacity_reservation_preference": "open",
                "capacity_reservation_target": []
              }
            ],
            "cpu_options": [
              {
                "amd_sev_snp": "",
                "core_count": 1,
                "threads_per_core": 1
              }
            ],
            "credit_specification": [
              {
                "cpu_credits": "standard"
              }
            ],
            "disable_api_stop": false,
            "disable_api_termination": false,
            "ebs_block_device": [],
            "ebs_optimized": false,
            "enable_primary_ipv6": null,
            "enclave_options": [
              {
                "enabled": false
              }
            ],
            "ephemeral_block_device": [],
            "get_password_data": false,
            "hibernation": false,
            "host_id": "",
            "host_resource_group_arn": null,
            "iam_instance_profile": "",
            "id": "i-0f5455640cce9b769",
            "instance_initiated_shutdown_behavior": "stop",
            "instance_lifecycle": "",
            "instance_market_options": [],
            "instance_state": "running",
            "instance_type": "t2.micro",
            "ipv6_address_count": 0,
            "ipv6_addresses": [],
            "key_name": "",
            "launch_template": [],
            "maintenance_options": [
              {
                "auto_recovery": "default"
              }
            ],
            "metadata_options": [
              {
                "http_endpoint": "enabled",
                "http_protocol_ipv6": "disabled",
                "http_put_response_hop_limit": 2,
                "http_tokens": "required",
                "instance_metadata_tags": "disabled"
              }
            ],
            "monitoring": false,
            "network_interface": [],
            "outpost_arn": "",
            "password_data": "",
            "placement_group": "",
            "placement_partition_number": 0,
            "primary_network_interface_id": "eni-09d10c76b10c63658",
            "private_dns": "ip-172-31-12-173.ap-south-1.compute.internal",
            "private_dns_name_options": [
              {
                "enable_resource_name_dns_a_record": false,
                "enable_resource_name_dns_aaaa_record": false,
                "hostname_type": "ip-name"
              }
            ],
            "private_ip": "172.31.12.173",
            "public_dns": "ec2-43-204-130-170.ap-south-1.compute.amazonaws.com",
            "public_ip": "43.204.130.170",
            "region": "ap-south-1",
            "root_block_device": [
              {
                "delete_on_termination": true,
                "device_name": "/dev/xvda",
                "encrypted": false,
                "iops": 3000,
                "kms_key_id": "",
                "tags": {},
                "tags_all": {},
                "throughput": 125,
                "volume_id": "vol-08876b37e7eb9e075",
                "volume_size": 8,
                "volume_type": "gp3"
              }
            ],
            "secondary_private_ips": [],
            "security_groups": ["default"],
            "source_dest_check": true,
            "spot_instance_request_id": "",
            "subnet_id": "subnet-03de31122f0bbb4cc",
            "tags": {
              "Name": "demoServer-659bc031ba23c257"
            },
            "tags_all": {
              "Name": "demoServer-659bc031ba23c257"
            },
            "tenancy": "default",
            "timeouts": null,
            "user_data": null,
            "user_data_base64": null,
            "user_data_replace_on_change": false,
            "volume_tags": null,
            "vpc_security_group_ids": ["sg-0fcf027a853f88653"]
          },
          "sensitive_attributes": [],
          "identity_schema_version": 0,
          "private": "eyJlMmJmYjczMC1lY2FhLTExZTYtOGY4OC0zNDM2M2JjN2M0YzAiOnsiY3JlYXRlIjo2MDAwMDAwMDAwMDAsImRlbGV0ZSI6MTIwMDAwMDAwMDAwMCwicmVhZCI6OTAwMDAwMDAwMDAwLCJ1cGRhdGUiOjYwMDAwMDAwMDAwMH0sInNjaGVtYV92ZXJzaW9uIjoiMiJ9",
          "dependencies": ["random_id.rand_id"]
        }
      ]
    },
    {
      "mode": "managed",
      "type": "random_id",
      "name": "rand_id",
      "provider": "provider[\"registry.terraform.io/hashicorp/random\"]",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "b64_std": "ZZvAMbojwlc=",
            "b64_url": "ZZvAMbojwlc",
            "byte_length": 8,
            "dec": "7321656939029709399",
            "hex": "659bc031ba23c257",
            "id": "ZZvAMbojwlc",
            "keepers": null,
            "prefix": null
          },
          "sensitive_attributes": [],
          "identity_schema_version": 0
        }
      ]
    }
  ],
  "check_results": null
}
```

## Destroy log

```bash
terraform destroy
random_id.rand_id: Refreshing state... [id=ZZvAMbojwlc]
aws_instance.demoServer: Refreshing state... [id=i-0f5455640cce9b769]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  - destroy

Terraform will perform the following actions:

  # aws_instance.demoServer will be destroyed
  - resource "aws_instance" "demoServer" {
      - ami                                  = "ami-0b09627181c8d5778" -> null
      - arn                                  = "arn:aws:ec2:ap-south-1:137756268028:instance/i-0f5455640cce9b769" -> null
      - associate_public_ip_address          = true -> null
      - availability_zone                    = "ap-south-1b" -> null
      - disable_api_stop                     = false -> null
      - disable_api_termination              = false -> null
      - ebs_optimized                        = false -> null
      - get_password_data                    = false -> null
      - hibernation                          = false -> null
      - id                                   = "i-0f5455640cce9b769" -> null
      - instance_initiated_shutdown_behavior = "stop" -> null
      - instance_state                       = "running" -> null
      - instance_type                        = "t2.micro" -> null
      - ipv6_address_count                   = 0 -> null
      - ipv6_addresses                       = [] -> null
      - monitoring                           = false -> null
      - placement_partition_number           = 0 -> null
      - primary_network_interface_id         = "eni-09d10c76b10c63658" -> null
      - private_dns                          = "ip-172-31-12-173.ap-south-1.compute.internal" -> null
      - private_ip                           = "172.31.12.173" -> null
      - public_dns                           = "ec2-43-204-130-170.ap-south-1.compute.amazonaws.com" -> null
      - public_ip                            = "43.204.130.170" -> null
      - region                               = "ap-south-1" -> null
      - secondary_private_ips                = [] -> null
      - security_groups                      = [
          - "default",
        ] -> null
      - source_dest_check                    = true -> null
      - subnet_id                            = "subnet-03de31122f0bbb4cc" -> null
      - tags                                 = {
          - "Name" = "demoServer-659bc031ba23c257"
        } -> null
      - tags_all                             = {
          - "Name" = "demoServer-659bc031ba23c257"
        } -> null
      - tenancy                              = "default" -> null
      - user_data_replace_on_change          = false -> null
      - vpc_security_group_ids               = [
          - "sg-0fcf027a853f88653",
        ] -> null
        # (8 unchanged attributes hidden)

      - capacity_reservation_specification {
          - capacity_reservation_preference = "open" -> null
        }

      - cpu_options {
          - core_count       = 1 -> null
          - threads_per_core = 1 -> null
            # (1 unchanged attribute hidden)
        }

      - credit_specification {
          - cpu_credits = "standard" -> null
        }

      - enclave_options {
          - enabled = false -> null
        }

      - maintenance_options {
          - auto_recovery = "default" -> null
        }

      - metadata_options {
          - http_endpoint               = "enabled" -> null
          - http_protocol_ipv6          = "disabled" -> null
          - http_put_response_hop_limit = 2 -> null
          - http_tokens                 = "required" -> null
          - instance_metadata_tags      = "disabled" -> null
        }

      - private_dns_name_options {
          - enable_resource_name_dns_a_record    = false -> null
          - enable_resource_name_dns_aaaa_record = false -> null
          - hostname_type                        = "ip-name" -> null
        }

      - root_block_device {
          - delete_on_termination = true -> null
          - device_name           = "/dev/xvda" -> null
          - encrypted             = false -> null
          - iops                  = 3000 -> null
          - tags                  = {} -> null
          - tags_all              = {} -> null
          - throughput            = 125 -> null
          - volume_id             = "vol-08876b37e7eb9e075" -> null
          - volume_size           = 8 -> null
          - volume_type           = "gp3" -> null
            # (1 unchanged attribute hidden)
        }
    }

  # random_id.rand_id will be destroyed
  - resource "random_id" "rand_id" {
      - b64_std     = "ZZvAMbojwlc=" -> null
      - b64_url     = "ZZvAMbojwlc" -> null
      - byte_length = 8 -> null
      - dec         = "7321656939029709399" -> null
      - hex         = "659bc031ba23c257" -> null
      - id          = "ZZvAMbojwlc" -> null
    }

Plan: 0 to add, 0 to change, 2 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes

aws_instance.demoServer: Destroying... [id=i-0f5455640cce9b769]
aws_instance.demoServer: Still destroying... [id=i-0f5455640cce9b769, 00m10s elapsed]
aws_instance.demoServer: Still destroying... [id=i-0f5455640cce9b769, 00m22s elapsed]
aws_instance.demoServer: Still destroying... [id=i-0f5455640cce9b769, 00m32s elapsed]
aws_instance.demoServer: Still destroying... [id=i-0f5455640cce9b769, 00m42s elapsed]
aws_instance.demoServer: Still destroying... [id=i-0f5455640cce9b769, 00m55s elapsed]
aws_instance.demoServer: Destruction complete after 56s
random_id.rand_id: Destroying... [id=ZZvAMbojwlc]
random_id.rand_id: Destruction complete after 0s

Destroy complete! Resources: 2 destroyed.
```

## log after destroy

```json
{
  "version": 4,
  "terraform_version": "1.12.2",
  "serial": 2,
  "lineage": "835663ef-0d48-2a7b-0ba2-5c686462cd10",
  "outputs": {},
  "resources": [],
  "check_results": null
}
```
