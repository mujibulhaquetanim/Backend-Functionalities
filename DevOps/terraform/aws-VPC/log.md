# Custom VPC Creation

# Create VPC

```bash
╰─ terraform apply

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_instance.mhtServer will be created
  + resource "aws_instance" "mhtServer" {
      + ami                                  = "ami-0f918f7e67a3323f0"
      + arn                                  = (known after apply)
      + associate_public_ip_address          = (known after apply)
      + availability_zone                    = (known after apply)
      + disable_api_stop                     = (known after apply)
      + disable_api_termination              = (known after apply)
      + ebs_optimized                        = (known after apply)
      + enable_primary_ipv6                  = (known after apply)
      + get_password_data                    = false
      + host_id                              = (known after apply)
      + host_resource_group_arn              = (known after apply)
      + iam_instance_profile                 = (known after apply)
      + id                                   = (known after apply)
      + instance_initiated_shutdown_behavior = (known after apply)
      + instance_lifecycle                   = (known after apply)
      + instance_state                       = (known after apply)
      + instance_type                        = "t2.micro"
      + ipv6_address_count                   = (known after apply)
      + ipv6_addresses                       = (known after apply)
      + key_name                             = (known after apply)
      + monitoring                           = (known after apply)
      + outpost_arn                          = (known after apply)
      + password_data                        = (known after apply)
      + placement_group                      = (known after apply)
      + placement_partition_number           = (known after apply)
      + primary_network_interface_id         = (known after apply)
      + private_dns                          = (known after apply)
      + private_ip                           = (known after apply)
      + public_dns                           = (known after apply)
      + public_ip                            = (known after apply)
      + region                               = "ap-south-1"
      + secondary_private_ips                = (known after apply)
      + security_groups                      = (known after apply)
      + source_dest_check                    = true
      + spot_instance_request_id             = (known after apply)
      + subnet_id                            = (known after apply)
      + tags                                 = {
          + "Name" = "VPCServer"
        }
      + tags_all                             = {
          + "Name" = "VPCServer"
        }
      + tenancy                              = (known after apply)
      + user_data_base64                     = (known after apply)
      + user_data_replace_on_change          = false
      + vpc_security_group_ids               = (known after apply)

      + capacity_reservation_specification (known after apply)

      + cpu_options (known after apply)

      + ebs_block_device (known after apply)

      + enclave_options (known after apply)

      + ephemeral_block_device (known after apply)

      + instance_market_options (known after apply)

      + maintenance_options (known after apply)

      + metadata_options (known after apply)

      + network_interface (known after apply)

      + private_dns_name_options (known after apply)

      + root_block_device (known after apply)
    }

  # aws_internet_gateway.my-igw will be created
  + resource "aws_internet_gateway" "my-igw" {
      + arn      = (known after apply)
      + id       = (known after apply)
      + owner_id = (known after apply)
      + region   = "ap-south-1"
      + tags     = {
          + "Name" = "my-igw"
        }
      + tags_all = {
          + "Name" = "my-igw"
        }
      + vpc_id   = (known after apply)
    }

  # aws_route_table.my-rt will be created
  + resource "aws_route_table" "my-rt" {
      + arn              = (known after apply)
      + id               = (known after apply)
      + owner_id         = (known after apply)
      + propagating_vgws = (known after apply)
      + region           = "ap-south-1"
      + route            = [
          + {
              + cidr_block                 = "0.0.0.0/0"
              + gateway_id                 = (known after apply)
                # (11 unchanged attributes hidden)
            },
        ]
      + tags_all         = (known after apply)
      + vpc_id           = (known after apply)
    }

  # aws_route_table_association.public-rt-association will be created
  + resource "aws_route_table_association" "public-rt-association" {
      + id             = (known after apply)
      + region         = "ap-south-1"
      + route_table_id = (known after apply)
      + subnet_id      = (known after apply)
    }

  # aws_subnet.private-subnet will be created
  + resource "aws_subnet" "private-subnet" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = (known after apply)
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "10.0.2.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = false
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + region                                         = "ap-south-1"
      + tags                                           = {
          + "Name" = "private-subnet"
        }
      + tags_all                                       = {
          + "Name" = "private-subnet"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_subnet.public-subnet will be created
  + resource "aws_subnet" "public-subnet" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = (known after apply)
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "10.0.1.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = true
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + region                                         = "ap-south-1"
      + tags                                           = {
          + "Name" = "public-subnet"
        }
      + tags_all                                       = {
          + "Name" = "public-subnet"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_vpc.my-vpc will be created
  + resource "aws_vpc" "my-vpc" {
      + arn                                  = (known after apply)
      + cidr_block                           = "10.0.0.0/16"
      + default_network_acl_id               = (known after apply)
      + default_route_table_id               = (known after apply)
      + default_security_group_id            = (known after apply)
      + dhcp_options_id                      = (known after apply)
      + enable_dns_hostnames                 = (known after apply)
      + enable_dns_support                   = true
      + enable_network_address_usage_metrics = (known after apply)
      + id                                   = (known after apply)
      + instance_tenancy                     = "default"
      + ipv6_association_id                  = (known after apply)
      + ipv6_cidr_block                      = (known after apply)
      + ipv6_cidr_block_network_border_group = (known after apply)
      + main_route_table_id                  = (known after apply)
      + owner_id                             = (known after apply)
      + region                               = "ap-south-1"
      + tags                                 = {
          + "Name" = "my-vpc"
        }
      + tags_all                             = {
          + "Name" = "my-vpc"
        }
    }

Plan: 7 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_vpc.my-vpc: Creating...
aws_vpc.my-vpc: Creation complete after 2s [id=vpc-0d7c0109a14034ca1]
aws_internet_gateway.my-igw: Creating...
aws_subnet.public-subnet: Creating...
aws_subnet.private-subnet: Creating...
aws_internet_gateway.my-igw: Creation complete after 1s [id=igw-0a90f8bd0e63e3746]
aws_route_table.my-rt: Creating...
aws_subnet.private-subnet: Creation complete after 1s [id=subnet-043be0c8b6373ce8b]
aws_route_table.my-rt: Creation complete after 1s [id=rtb-054917ff1d8a841cc]
aws_subnet.public-subnet: Still creating... [00m10s elapsed]
aws_subnet.public-subnet: Creation complete after 11s [id=subnet-016e626ce31aadde4]
aws_route_table_association.public-rt-association: Creating...
aws_instance.mhtServer: Creating...
aws_route_table_association.public-rt-association: Creation complete after 1s [id=rtbassoc-0daa9cab6022b1c15]
aws_instance.mhtServer: Still creating... [00m10s elapsed]
aws_instance.mhtServer: Creation complete after 13s [id=i-0d2129ff8200e74fb]

Apply complete! Resources: 7 added, 0 changed, 0 destroyed.
```

## add security group

added security group and refreshed state of resources. now ec2 instance can be reached from internet using public ip and ssh and http can be reached from outside.

```bash
╰─ terraform apply
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_instance.mhtServer: Refreshing state... [id=i-0d2129ff8200e74fb]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
  ~ update in-place

Terraform will perform the following actions:

  # aws_instance.mhtServer will be updated in-place
  ~ resource "aws_instance" "mhtServer" {
        id                                   = "i-0d2129ff8200e74fb"
        tags                                 = {
            "Name" = "VPCServer"
        }
      ~ vpc_security_group_ids               = [
          - "sg-0d0ad8d990550b5e1",
        ] -> (known after apply)
        # (37 unchanged attributes hidden)

        # (8 unchanged blocks hidden)
    }

  # aws_security_group.mhtServer-sg will be created
  + resource "aws_security_group" "mhtServer-sg" {
      + arn                    = (known after apply)
      + description            = "Security group for the EC2 instance"
      + egress                 = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = "Allow all outbound traffic"
              + from_port        = 0
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "-1"
              + security_groups  = []
              + self             = false
              + to_port          = 0
            },
        ]
      + id                     = (known after apply)
      + ingress                = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = "Allow HTTP access from anywhere"
              + from_port        = 80
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 80
            },
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = "Allow SSH access from anywhere"
              + from_port        = 22
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 22
            },
        ]
      + name                   = "mhtServer-sg"
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + region                 = "ap-south-1"
      + revoke_rules_on_delete = false
      + tags                   = {
          + "Name" = "mhtServer-sg"
        }
      + tags_all               = {
          + "Name" = "mhtServer-sg"
        }
      + vpc_id                 = "vpc-0d7c0109a14034ca1"
    }

Plan: 1 to add, 1 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_security_group.mhtServer-sg: Creating...
aws_security_group.mhtServer-sg: Creation complete after 3s [id=sg-034037d0effc17190]
aws_instance.mhtServer: Modifying... [id=i-0d2129ff8200e74fb]
aws_instance.mhtServer: Modifications complete after 3s [id=i-0d2129ff8200e74fb]

Apply complete! Resources: 1 added, 1 changed, 0 destroyed.
```

## Missing required argument

```bash
╰─ terraform apply
╷
│ Error: Missing required argument
│ 
│   with aws_subnet.public-subnet1,
│   on main.tf line 56, in resource "aws_subnet" "public-subnet1":
│   56:   map_customer_owned_ip_on_launch = true
│ 
│ "map_customer_owned_ip_on_launch": all of `customer_owned_ipv4_pool,map_customer_owned_ip_on_launch,outpost_arn` must be specified
```

## new vpc creation with 1 public subnet, 1 igw, 1 route table, 1 route table association

```bash
╰─ terraform apply
aws_instance.mhtServer: Refreshing state... [id=i-0d2129ff8200e74fb]
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_security_group.mhtServer-sg: Refreshing state... [id=sg-034037d0effc17190]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_internet_gateway.my-igw1 will be created
  + resource "aws_internet_gateway" "my-igw1" {
      + arn      = (known after apply)
      + id       = (known after apply)
      + owner_id = (known after apply)
      + region   = "ap-south-1"
      + tags     = {
          + "Name" = "my-igw1"
        }
      + tags_all = {
          + "Name" = "my-igw1"
        }
      + vpc_id   = (known after apply)
    }

  # aws_route_table.my-rt1 will be created
  + resource "aws_route_table" "my-rt1" {
      + arn              = (known after apply)
      + id               = (known after apply)
      + owner_id         = (known after apply)
      + propagating_vgws = (known after apply)
      + region           = "ap-south-1"
      + route            = [
          + {
              + cidr_block                 = "0.0.0.0/0"
              + gateway_id                 = (known after apply)
                # (11 unchanged attributes hidden)
            },
        ]
      + tags_all         = (known after apply)
      + vpc_id           = (known after apply)
    }

  # aws_route_table_association.public-rt-association1 will be created
  + resource "aws_route_table_association" "public-rt-association1" {
      + id             = (known after apply)
      + region         = "ap-south-1"
      + route_table_id = (known after apply)
      + subnet_id      = (known after apply)
    }

  # aws_subnet.public-subnet1 will be created
  + resource "aws_subnet" "public-subnet1" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = (known after apply)
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "192.0.1.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = true
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + region                                         = "ap-south-1"
      + tags                                           = {
          + "Name" = "public-subnet1"
        }
      + tags_all                                       = {
          + "Name" = "public-subnet1"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_vpc.my-vpc1 will be created
  + resource "aws_vpc" "my-vpc1" {
      + arn                                  = (known after apply)
      + cidr_block                           = "192.0.0.0/16"
      + default_network_acl_id               = (known after apply)
      + default_route_table_id               = (known after apply)
      + default_security_group_id            = (known after apply)
      + dhcp_options_id                      = (known after apply)
      + enable_dns_hostnames                 = (known after apply)
      + enable_dns_support                   = true
      + enable_network_address_usage_metrics = (known after apply)
      + id                                   = (known after apply)
      + instance_tenancy                     = "default"
      + ipv6_association_id                  = (known after apply)
      + ipv6_cidr_block                      = (known after apply)
      + ipv6_cidr_block_network_border_group = (known after apply)
      + main_route_table_id                  = (known after apply)
      + owner_id                             = (known after apply)
      + region                               = "ap-south-1"
      + tags                                 = {
          + "Name" = "my-vpc1"
        }
      + tags_all                             = {
          + "Name" = "my-vpc1"
        }
    }

Plan: 5 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_vpc.my-vpc1: Creating...
aws_vpc.my-vpc1: Creation complete after 1s [id=vpc-0a02201b892f113d9]
aws_internet_gateway.my-igw1: Creating...
aws_subnet.public-subnet1: Creating...
aws_internet_gateway.my-igw1: Creation complete after 1s [id=igw-056c3492c7cc77042]
aws_route_table.my-rt1: Creating...
aws_route_table.my-rt1: Creation complete after 1s [id=rtb-00b23249d92a23504]
aws_subnet.public-subnet1: Still creating... [00m10s elapsed]
aws_subnet.public-subnet1: Creation complete after 11s [id=subnet-01a5bf7cbfe3ecf9a]
aws_route_table_association.public-rt-association1: Creating...
aws_route_table_association.public-rt-association1: Creation complete after 1s [id=rtbassoc-03d695d60d508ebbc]

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.
```


