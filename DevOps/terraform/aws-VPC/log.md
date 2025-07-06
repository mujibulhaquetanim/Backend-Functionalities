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

## add ingres for peered vpc

```bash
╰─ terraform apply
aws_vpc.my-vpc1: Refreshing state... [id=vpc-0a02201b892f113d9]
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_internet_gateway.my-igw1: Refreshing state... [id=igw-056c3492c7cc77042]
aws_subnet.public-subnet1: Refreshing state... [id=subnet-01a5bf7cbfe3ecf9a]
aws_security_group.mhtServer-sg: Refreshing state... [id=sg-034037d0effc17190]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_route_table.my-rt1: Refreshing state... [id=rtb-00b23249d92a23504]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]
aws_route_table_association.public-rt-association1: Refreshing state... [id=rtbassoc-03d695d60d508ebbc]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
  ~ update in-place

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
      + subnet_id                            = "subnet-016e626ce31aadde4"
      + tags                                 = {
          + "Name" = "VPCServer"
        }
      + tags_all                             = {
          + "Name" = "VPCServer"
        }
      + tenancy                              = (known after apply)
      + user_data_base64                     = (known after apply)
      + user_data_replace_on_change          = false
      + vpc_security_group_ids               = [
          + "sg-034037d0effc17190",
        ]

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

  # aws_instance.mhtServer1 will be created
  + resource "aws_instance" "mhtServer1" {
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
      + subnet_id                            = "subnet-01a5bf7cbfe3ecf9a"
      + tags                                 = {
          + "Name" = "VPCServer1"
        }
      + tags_all                             = {
          + "Name" = "VPCServer1"
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

  # aws_route_table.my-rt will be updated in-place
  ~ resource "aws_route_table" "my-rt" {
        id               = "rtb-054917ff1d8a841cc"
      ~ route            = [
          - {
              - cidr_block                 = "0.0.0.0/0"
              - gateway_id                 = "igw-0a90f8bd0e63e3746"
                # (11 unchanged attributes hidden)
            },
          + {
              + cidr_block                 = "192.0.0.0/16"
              + vpc_peering_connection_id  = (known after apply)
                # (11 unchanged attributes hidden)
            },
          + {
              + cidr_block = "0.0.0.0/0"
              + gateway_id = "igw-0a90f8bd0e63e3746"
            },
        ]
        tags             = {}
        # (6 unchanged attributes hidden)
    }

  # aws_route_table.my-rt1 will be updated in-place
  ~ resource "aws_route_table" "my-rt1" {
        id               = "rtb-00b23249d92a23504"
      ~ route            = [
          - {
              - cidr_block                 = "0.0.0.0/0"
              - gateway_id                 = "igw-056c3492c7cc77042"
                # (11 unchanged attributes hidden)
            },
          + {
              + cidr_block                 = "10.0.0.0/16"
              + vpc_peering_connection_id  = (known after apply)
                # (11 unchanged attributes hidden)
            },
          + {
              + cidr_block = "0.0.0.0/0"
              + gateway_id = "igw-056c3492c7cc77042"
            },
        ]
        tags             = {}
        # (6 unchanged attributes hidden)
    }

  # aws_security_group.mhtServer-sg will be updated in-place
  ~ resource "aws_security_group" "mhtServer-sg" {
        id                     = "sg-034037d0effc17190"
      ~ ingress                = [
          - {
              - cidr_blocks      = [
                  - "0.0.0.0/0",
                ]
              - description      = "allow 3000 port req"
              - from_port        = 3000
              - ipv6_cidr_blocks = []
              - prefix_list_ids  = []
              - protocol         = "tcp"
              - security_groups  = []
              - self             = false
              - to_port          = 3000
            },
          + {
              + cidr_blocks      = [
                  + "192.0.0.0/16",
                ]
              + description      = "Allow traffic from the peered VPC (my-vpc1)"
              + from_port        = 0
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "-1"
              + security_groups  = []
              + self             = false
              + to_port          = 0
            },
            # (2 unchanged elements hidden)
        ]
        name                   = "mhtServer-sg"
        tags                   = {
            "Name" = "mhtServer-sg"
        }
        # (9 unchanged attributes hidden)
    }

  # aws_security_group.mhtServer-sg1 will be created
  + resource "aws_security_group" "mhtServer-sg1" {
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
          + {
              + cidr_blocks      = [
                  + "10.0.0.0/16",
                ]
              + description      = "Allow traffic from the peered VPC (my-vpc)"
              + from_port        = 0
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "-1"
              + security_groups  = []
              + self             = false
              + to_port          = 0
            },
        ]
      + name                   = "mhtServer-sg"
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + region                 = "ap-south-1"
      + revoke_rules_on_delete = false
      + tags                   = {
          + "Name" = "mhtServer-sg1"
        }
      + tags_all               = {
          + "Name" = "mhtServer-sg1"
        }
      + vpc_id                 = "vpc-0a02201b892f113d9"
    }

  # aws_vpc_peering_connection.pingMyVPCtoMyVPC1 will be created
  + resource "aws_vpc_peering_connection" "pingMyVPCtoMyVPC1" {
      + accept_status = (known after apply)
      + id            = (known after apply)
      + peer_owner_id = (known after apply)
      + peer_region   = (known after apply)
      + peer_vpc_id   = "vpc-0a02201b892f113d9"
      + region        = "ap-south-1"
      + tags          = {
          + "Name" = "pingMyVPCtoMyVPC1"
        }
      + tags_all      = {
          + "Name" = "pingMyVPCtoMyVPC1"
        }
      + vpc_id        = "vpc-0d7c0109a14034ca1"

      + accepter (known after apply)

      + requester (known after apply)
    }

Plan: 4 to add, 3 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_vpc_peering_connection.pingMyVPCtoMyVPC1: Creating...
aws_security_group.mhtServer-sg1: Creating...
aws_security_group.mhtServer-sg: Modifying... [id=sg-034037d0effc17190]
aws_vpc_peering_connection.pingMyVPCtoMyVPC1: Creation complete after 1s [id=pcx-043eea92231b6e322]
aws_route_table.my-rt: Modifying... [id=rtb-054917ff1d8a841cc]
aws_route_table.my-rt1: Modifying... [id=rtb-00b23249d92a23504]
aws_security_group.mhtServer-sg: Modifications complete after 1s [id=sg-034037d0effc17190]
aws_instance.mhtServer: Creating...
aws_route_table.my-rt1: Modifications complete after 0s [id=rtb-00b23249d92a23504]
aws_route_table.my-rt: Modifications complete after 0s [id=rtb-054917ff1d8a841cc]
aws_security_group.mhtServer-sg1: Creation complete after 2s [id=sg-047e8e229893a779f]
aws_instance.mhtServer1: Creating...
aws_instance.mhtServer: Still creating... [00m13s elapsed]
aws_instance.mhtServer1: Still creating... [00m13s elapsed]
aws_instance.mhtServer: Still creating... [00m23s elapsed]
aws_instance.mhtServer1: Still creating... [00m23s elapsed]
aws_instance.mhtServer: Still creating... [00m33s elapsed]
aws_instance.mhtServer1: Still creating... [00m33s elapsed]
aws_instance.mhtServer: Creation complete after 35s [id=i-0227d24c2175da675]
aws_instance.mhtServer1: Creation complete after 35s [id=i-0d912338ff1f97204]

Apply complete! Resources: 4 added, 3 changed, 0 destroyed.
```

## add tags to route table

```bash
╰─ terraform apply
aws_vpc.my-vpc1: Refreshing state... [id=vpc-0a02201b892f113d9]
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_internet_gateway.my-igw1: Refreshing state... [id=igw-056c3492c7cc77042]
aws_vpc_peering_connection.pingMyVPCtoMyVPC1: Refreshing state... [id=pcx-043eea92231b6e322]
aws_subnet.public-subnet1: Refreshing state... [id=subnet-01a5bf7cbfe3ecf9a]
aws_security_group.mhtServer-sg: Refreshing state... [id=sg-034037d0effc17190]
aws_security_group.mhtServer-sg1: Refreshing state... [id=sg-047e8e229893a779f]
aws_route_table.my-rt1: Refreshing state... [id=rtb-00b23249d92a23504]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_instance.mhtServer: Refreshing state... [id=i-0227d24c2175da675]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]
aws_route_table_association.public-rt-association1: Refreshing state... [id=rtbassoc-03d695d60d508ebbc]
aws_instance.mhtServer1: Refreshing state... [id=i-0d912338ff1f97204]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  ~ update in-place

Terraform will perform the following actions:

  # aws_route_table.my-rt will be updated in-place
  ~ resource "aws_route_table" "my-rt" {
        id               = "rtb-054917ff1d8a841cc"
      ~ tags             = {
          + "Name" = "my-rt-my-vpc"
        }
      ~ tags_all         = {
          + "Name" = "my-rt-my-vpc"
        }
        # (6 unchanged attributes hidden)
    }

  # aws_route_table.my-rt1 will be updated in-place
  ~ resource "aws_route_table" "my-rt1" {
        id               = "rtb-00b23249d92a23504"
      ~ tags             = {
          + "Name" = "my-rt1-my-vpc1"
        }
      ~ tags_all         = {
          + "Name" = "my-rt1-my-vpc1"
        }
        # (6 unchanged attributes hidden)
    }

Plan: 0 to add, 2 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_route_table.my-rt1: Modifying... [id=rtb-00b23249d92a23504]
aws_route_table.my-rt: Modifying... [id=rtb-054917ff1d8a841cc]
aws_route_table.my-rt: Modifications complete after 1s [id=rtb-054917ff1d8a841cc]
aws_route_table.my-rt1: Modifications complete after 1s [id=rtb-00b23249d92a23504]

Apply complete! Resources: 0 added, 2 changed, 0 destroyed.
```

## elastic ip for nat gateway in my-vpc

```bash
╰─ terraform apply
aws_vpc.my-vpc1: Refreshing state... [id=vpc-0a02201b892f113d9]
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_internet_gateway.my-igw1: Refreshing state... [id=igw-056c3492c7cc77042]
aws_vpc_peering_connection.pingMyVPCtoMyVPC1: Refreshing state... [id=pcx-043eea92231b6e322]
aws_subnet.public-subnet1: Refreshing state... [id=subnet-01a5bf7cbfe3ecf9a]
aws_security_group.mhtServer-sg: Refreshing state... [id=sg-034037d0effc17190]
aws_security_group.mhtServer-sg1: Refreshing state... [id=sg-047e8e229893a779f]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_route_table.my-rt1: Refreshing state... [id=rtb-00b23249d92a23504]
aws_instance.mhtServer1: Refreshing state... [id=i-0d912338ff1f97204]
aws_instance.mhtServer: Refreshing state... [id=i-0227d24c2175da675]
aws_route_table_association.public-rt-association1: Refreshing state... [id=rtbassoc-03d695d60d508ebbc]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_eip.nat-gateway-eip will be created
  + resource "aws_eip" "nat-gateway-eip" {
      + allocation_id        = (known after apply)
      + arn                  = (known after apply)
      + association_id       = (known after apply)
      + carrier_ip           = (known after apply)
      + customer_owned_ip    = (known after apply)
      + domain               = (known after apply)
      + id                   = (known after apply)
      + instance             = (known after apply)
      + ipam_pool_id         = (known after apply)
      + network_border_group = (known after apply)
      + network_interface    = (known after apply)
      + private_dns          = (known after apply)
      + private_ip           = (known after apply)
      + ptr_record           = (known after apply)
      + public_dns           = (known after apply)
      + public_ip            = (known after apply)
      + public_ipv4_pool     = (known after apply)
      + region               = "ap-south-1"
      + tags                 = {
          + "Name" = "my-vpc-nat-gateway-eip"
        }
      + tags_all             = {
          + "Name" = "my-vpc-nat-gateway-eip"
        }
    }

  # aws_nat_gateway.my-vpc-nat-gateway will be created
  + resource "aws_nat_gateway" "my-vpc-nat-gateway" {
      + allocation_id                      = (known after apply)
      + association_id                     = (known after apply)
      + connectivity_type                  = "public"
      + id                                 = (known after apply)
      + network_interface_id               = (known after apply)
      + private_ip                         = (known after apply)
      + public_ip                          = (known after apply)
      + region                             = "ap-south-1"
      + secondary_private_ip_address_count = (known after apply)
      + secondary_private_ip_addresses     = (known after apply)
      + subnet_id                          = "subnet-016e626ce31aadde4"
      + tags                               = {
          + "Name" = "my-vpc-nat-gateway"
        }
      + tags_all                           = {
          + "Name" = "my-vpc-nat-gateway"
        }
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_eip.nat-gateway-eip: Creating...
aws_eip.nat-gateway-eip: Creation complete after 1s [id=eipalloc-04fcabb5c6fd8e015]
aws_nat_gateway.my-vpc-nat-gateway: Creating...
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m10s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m23s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m33s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m43s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m53s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m06s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m16s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m26s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m38s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Creation complete after 1m43s [id=nat-0b7f19746eb8d4061]

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
```

## Dedicated route table and association for private subnet of my-vpc

```bash
╰─ terraform apply
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_vpc.my-vpc1: Refreshing state... [id=vpc-0a02201b892f113d9]
aws_eip.nat-gateway-eip: Refreshing state... [id=eipalloc-04fcabb5c6fd8e015]
aws_internet_gateway.my-igw1: Refreshing state... [id=igw-056c3492c7cc77042]
aws_subnet.public-subnet1: Refreshing state... [id=subnet-01a5bf7cbfe3ecf9a]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_vpc_peering_connection.pingMyVPCtoMyVPC1: Refreshing state... [id=pcx-043eea92231b6e322]
aws_security_group.mhtServer-sg1: Refreshing state... [id=sg-047e8e229893a779f]
aws_security_group.mhtServer-sg: Refreshing state... [id=sg-034037d0effc17190]
aws_nat_gateway.my-vpc-nat-gateway: Refreshing state... [id=nat-0b7f19746eb8d4061]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_route_table.my-rt1: Refreshing state... [id=rtb-00b23249d92a23504]
aws_instance.mhtServer1: Refreshing state... [id=i-0d912338ff1f97204]
aws_instance.mhtServer: Refreshing state... [id=i-0227d24c2175da675]
aws_route_table_association.public-rt-association1: Refreshing state... [id=rtbassoc-03d695d60d508ebbc]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_route_table.private-rt-my-vpc will be created
  + resource "aws_route_table" "private-rt-my-vpc" {
      + arn              = (known after apply)
      + id               = (known after apply)
      + owner_id         = (known after apply)
      + propagating_vgws = (known after apply)
      + region           = "ap-south-1"
      + route            = [
          + {
              + cidr_block                 = "0.0.0.0/0"
              + nat_gateway_id             = "nat-0b7f19746eb8d4061"
                # (11 unchanged attributes hidden)
            },
        ]
      + tags             = {
          + "Name" = "private-rt-my-vpc"
        }
      + tags_all         = {
          + "Name" = "private-rt-my-vpc"
        }
      + vpc_id           = "vpc-0d7c0109a14034ca1"
    }

  # aws_route_table_association.private-rt-association will be created
  + resource "aws_route_table_association" "private-rt-association" {
      + id             = (known after apply)
      + region         = "ap-south-1"
      + route_table_id = (known after apply)
      + subnet_id      = "subnet-043be0c8b6373ce8b"
    }

Plan: 2 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_route_table.private-rt-my-vpc: Creating...
aws_route_table.private-rt-my-vpc: Creation complete after 1s [id=rtb-083a254645f98e239]
aws_route_table_association.private-rt-association: Creating...
aws_route_table_association.private-rt-association: Creation complete after 1s [id=rtbassoc-02ae8a14a329b5afb]

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
```

## add peering connection and ec2 instance for private vpc

```bash
╰─ terraform apply
aws_eip.nat-gateway-eip: Refreshing state... [id=eipalloc-04fcabb5c6fd8e015]
aws_vpc.my-vpc: Refreshing state... [id=vpc-0d7c0109a14034ca1]
aws_vpc.my-vpc1: Refreshing state... [id=vpc-0a02201b892f113d9]
aws_instance.mhtServer: Refreshing state... [id=i-0227d24c2175da675]
aws_internet_gateway.my-igw1: Refreshing state... [id=igw-056c3492c7cc77042]
aws_subnet.public-subnet1: Refreshing state... [id=subnet-01a5bf7cbfe3ecf9a]
aws_vpc_peering_connection.pingMyVPCtoMyVPC1: Refreshing state... [id=pcx-043eea92231b6e322]
aws_internet_gateway.my-igw: Refreshing state... [id=igw-0a90f8bd0e63e3746]
aws_subnet.public-subnet: Refreshing state... [id=subnet-016e626ce31aadde4]
aws_subnet.private-subnet: Refreshing state... [id=subnet-043be0c8b6373ce8b]
aws_security_group.mhtServer-sg1: Refreshing state... [id=sg-047e8e229893a779f]
aws_security_group.mhtServer-sg: Refreshing state... [id=sg-034037d0effc17190]
aws_route_table.my-rt1: Refreshing state... [id=rtb-00b23249d92a23504]
aws_route_table.my-rt: Refreshing state... [id=rtb-054917ff1d8a841cc]
aws_nat_gateway.my-vpc-nat-gateway: Refreshing state... [id=nat-0b7f19746eb8d4061]
aws_route_table_association.public-rt-association1: Refreshing state... [id=rtbassoc-03d695d60d508ebbc]
aws_instance.mhtServer1: Refreshing state... [id=i-0d912338ff1f97204]
aws_route_table_association.public-rt-association: Refreshing state... [id=rtbassoc-0daa9cab6022b1c15]
aws_route_table.private-rt-my-vpc: Refreshing state... [id=rtb-083a254645f98e239]
aws_route_table_association.private-rt-association: Refreshing state... [id=rtbassoc-02ae8a14a329b5afb]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
  ~ update in-place
  - destroy

Terraform will perform the following actions:

  # aws_instance.mhtServer will be destroyed
  # (because aws_instance.mhtServer is not in configuration)
  - resource "aws_instance" "mhtServer" {
      - ami                                  = "ami-0f918f7e67a3323f0" -> null
      - arn                                  = "arn:aws:ec2:ap-south-1:137756268028:instance/i-0227d24c2175da675" -> null
      - associate_public_ip_address          = true -> null
      - availability_zone                    = "ap-south-1a" -> null
      - disable_api_stop                     = false -> null
      - disable_api_termination              = false -> null
      - ebs_optimized                        = false -> null
      - get_password_data                    = false -> null
      - hibernation                          = false -> null
      - id                                   = "i-0227d24c2175da675" -> null
      - instance_initiated_shutdown_behavior = "stop" -> null
      - instance_state                       = "running" -> null
      - instance_type                        = "t2.micro" -> null
      - ipv6_address_count                   = 0 -> null
      - ipv6_addresses                       = [] -> null
      - monitoring                           = false -> null
      - placement_partition_number           = 0 -> null
      - primary_network_interface_id         = "eni-0a7049802e0a40d94" -> null
      - private_dns                          = "ip-10-0-1-11.ap-south-1.compute.internal" -> null
      - private_ip                           = "10.0.1.11" -> null
      - public_ip                            = "65.0.169.251" -> null
      - region                               = "ap-south-1" -> null
      - secondary_private_ips                = [] -> null
      - security_groups                      = [] -> null
      - source_dest_check                    = true -> null
      - subnet_id                            = "subnet-016e626ce31aadde4" -> null
      - tags                                 = {
          - "Name" = "VPCServer"
        } -> null
      - tags_all                             = {
          - "Name" = "VPCServer"
        } -> null
      - tenancy                              = "default" -> null
      - user_data_replace_on_change          = false -> null
      - vpc_security_group_ids               = [
          - "sg-034037d0effc17190",
        ] -> null
        # (9 unchanged attributes hidden)

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
          - device_name           = "/dev/sda1" -> null
          - encrypted             = false -> null
          - iops                  = 3000 -> null
          - tags                  = {} -> null
          - tags_all              = {} -> null
          - throughput            = 125 -> null
          - volume_id             = "vol-0e6d62081ba4e160d" -> null
          - volume_size           = 8 -> null
          - volume_type           = "gp3" -> null
            # (1 unchanged attribute hidden)
        }
    }

  # aws_instance.mhtServer-private-subnet will be created
  + resource "aws_instance" "mhtServer-private-subnet" {
      + ami                                  = "ami-0f918f7e67a3323f0"
      + arn                                  = (known after apply)
      + associate_public_ip_address          = false
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
      + subnet_id                            = "subnet-043be0c8b6373ce8b"
      + tags                                 = {
          + "Name" = "VPCServer-public-subnet"
        }
      + tags_all                             = {
          + "Name" = "VPCServer-public-subnet"
        }
      + tenancy                              = (known after apply)
      + user_data_base64                     = (known after apply)
      + user_data_replace_on_change          = false
      + vpc_security_group_ids               = [
          + "sg-034037d0effc17190",
        ]

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

  # aws_instance.mhtServer-public-subnet will be created
  + resource "aws_instance" "mhtServer-public-subnet" {
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
      + subnet_id                            = "subnet-016e626ce31aadde4"
      + tags                                 = {
          + "Name" = "VPCServer-public-subnet"
        }
      + tags_all                             = {
          + "Name" = "VPCServer-public-subnet"
        }
      + tenancy                              = (known after apply)
      + user_data_base64                     = (known after apply)
      + user_data_replace_on_change          = false
      + vpc_security_group_ids               = [
          + "sg-034037d0effc17190",
        ]

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

  # aws_route_table.private-rt-my-vpc will be updated in-place
  ~ resource "aws_route_table" "private-rt-my-vpc" {
        id               = "rtb-083a254645f98e239"
      ~ route            = [
          - {
              - cidr_block                 = "0.0.0.0/0"
              - nat_gateway_id             = "nat-0b7f19746eb8d4061"
                # (11 unchanged attributes hidden)
            },
          + {
              + cidr_block                 = "192.0.0.0/16"
              + vpc_peering_connection_id  = "pcx-043eea92231b6e322"
                # (11 unchanged attributes hidden)
            },
          + {
              + cidr_block     = "0.0.0.0/0"
              + nat_gateway_id = "nat-0b7f19746eb8d4061"
            },
        ]
        tags             = {
            "Name" = "private-rt-my-vpc"
        }
        # (6 unchanged attributes hidden)
    }

Plan: 2 to add, 1 to change, 1 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_instance.mhtServer: Destroying... [id=i-0227d24c2175da675]
aws_route_table.private-rt-my-vpc: Modifying... [id=rtb-083a254645f98e239]
aws_instance.mhtServer-private-subnet: Creating...
aws_instance.mhtServer-public-subnet: Creating...
aws_route_table.private-rt-my-vpc: Modifications complete after 0s [id=rtb-083a254645f98e239]
aws_instance.mhtServer: Still destroying... [id=i-0227d24c2175da675, 00m10s elapsed]
aws_instance.mhtServer-private-subnet: Still creating... [00m10s elapsed]
aws_instance.mhtServer-public-subnet: Still creating... [00m10s elapsed]
aws_instance.mhtServer: Still destroying... [id=i-0227d24c2175da675, 00m23s elapsed]
aws_instance.mhtServer-public-subnet: Still creating... [00m23s elapsed]
aws_instance.mhtServer-private-subnet: Still creating... [00m23s elapsed]
aws_instance.mhtServer: Still destroying... [id=i-0227d24c2175da675, 00m33s elapsed]
aws_instance.mhtServer-private-subnet: Still creating... [00m33s elapsed]
aws_instance.mhtServer-public-subnet: Still creating... [00m33s elapsed]
aws_instance.mhtServer: Destruction complete after 34s
aws_instance.mhtServer-private-subnet: Creation complete after 35s [id=i-00b76b89aaaf55e2e]
aws_instance.mhtServer-public-subnet: Creation complete after 35s [id=i-0a17b823fba139a25]

Apply complete! Resources: 2 added, 1 changed, 1 destroyed.
```

## Fix naming issue

```bash
Plan: 6 to add, 1 to change, 4 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_instance.mhtServer-private-subnet: Destroying... [id=i-00b76b89aaaf55e2e]
aws_instance.mhtServer1: Destroying... [id=i-0d912338ff1f97204]
aws_instance.mhtServer-public-subnet: Destroying... [id=i-0a17b823fba139a25]
aws_eip.nat-gateway-eip: Creating...
aws_instance.mhtServer-public-vpc: Creating...
aws_instance.mhtServer-private-vpc: Creating...
aws_eip.nat-gateway-eip: Creation complete after 1s [id=eipalloc-0b1e902854dd2e27f]
aws_nat_gateway.my-vpc-nat-gateway: Creating...
aws_instance.mhtServer1: Still destroying... [id=i-0d912338ff1f97204, 00m10s elapsed]
aws_instance.mhtServer-public-subnet: Still destroying... [id=i-0a17b823fba139a25, 00m10s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 00m10s elapsed]
aws_instance.mhtServer-private-vpc: Still creating... [00m10s elapsed]
aws_instance.mhtServer-public-vpc: Still creating... [00m10s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m10s elapsed]
aws_instance.mhtServer-public-subnet: Still destroying... [id=i-0a17b823fba139a25, 00m20s elapsed]
aws_instance.mhtServer1: Still destroying... [id=i-0d912338ff1f97204, 00m20s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 00m20s elapsed]
aws_instance.mhtServer-public-vpc: Still creating... [00m20s elapsed]
aws_instance.mhtServer-private-vpc: Still creating... [00m20s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m20s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 00m30s elapsed]
aws_instance.mhtServer-public-subnet: Still destroying... [id=i-0a17b823fba139a25, 00m30s elapsed]
aws_instance.mhtServer1: Still destroying... [id=i-0d912338ff1f97204, 00m30s elapsed]
aws_instance.mhtServer-private-vpc: Still creating... [00m30s elapsed]
aws_instance.mhtServer-public-vpc: Still creating... [00m30s elapsed]
aws_instance.mhtServer-public-subnet: Destruction complete after 31s
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m30s elapsed]
aws_instance.mhtServer-public-vpc: Creation complete after 33s [id=i-0ef6c642d4b51d855]
aws_instance.mhtServer-private-vpc: Creation complete after 33s [id=i-0e561c3f6d49525b5]
aws_instance.mhtServer1: Still destroying... [id=i-0d912338ff1f97204, 00m40s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 00m40s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m40s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 00m50s elapsed]
aws_instance.mhtServer1: Still destroying... [id=i-0d912338ff1f97204, 00m50s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [00m50s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 01m00s elapsed]
aws_instance.mhtServer1: Still destroying... [id=i-0d912338ff1f97204, 01m00s elapsed]
aws_instance.mhtServer1: Destruction complete after 1m1s
aws_security_group.mhtServer-sg1: Destroying... [id=sg-047e8e229893a779f]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m00s elapsed]
aws_security_group.mhtServer-sg1: Destruction complete after 1s
aws_security_group.mhtServer-sg1: Creating...
aws_security_group.mhtServer-sg1: Creation complete after 2s [id=sg-0d5dd9f45d187627c]
aws_instance.mhtServer-public-vpc1: Creating...
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 01m10s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m10s elapsed]
aws_instance.mhtServer-public-vpc1: Still creating... [00m10s elapsed]
aws_instance.mhtServer-private-subnet: Still destroying... [id=i-00b76b89aaaf55e2e, 01m20s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m20s elapsed]
aws_instance.mhtServer-private-subnet: Destruction complete after 1m22s
aws_instance.mhtServer-public-vpc1: Still creating... [00m20s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m30s elapsed]
aws_instance.mhtServer-public-vpc1: Still creating... [00m30s elapsed]
aws_instance.mhtServer-public-vpc1: Creation complete after 33s [id=i-0a0cc31edc6ce24fc]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m40s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Still creating... [01m50s elapsed]
aws_nat_gateway.my-vpc-nat-gateway: Creation complete after 1m55s [id=nat-02e095659250e7d61]
aws_route_table.private-rt-my-vpc: Modifying... [id=rtb-083a254645f98e239]
aws_route_table.private-rt-my-vpc: Modifications complete after 1s [id=rtb-083a254645f98e239]

Apply complete! Resources: 6 added, 1 changed, 4 destroyed.
```

## Add peering_connection_accepter and update instance tags

```bash
Plan: 1 to add, 3 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_vpc_peering_connection_accepter.pingMyVPCtoMyVPC1-accepter: Creating...
aws_instance.mhtServer-private-vpc: Modifying... [id=i-0e561c3f6d49525b5]
aws_instance.mhtServer-public-vpc: Modifying... [id=i-0ef6c642d4b51d855]
aws_instance.mhtServer-public-vpc1: Modifying... [id=i-0a0cc31edc6ce24fc]
aws_vpc_peering_connection_accepter.pingMyVPCtoMyVPC1-accepter: Creation complete after 1s [id=pcx-043eea92231b6e322]
aws_instance.mhtServer-public-vpc1: Modifications complete after 2s [id=i-0a0cc31edc6ce24fc]
aws_instance.mhtServer-private-vpc: Modifications complete after 2s [id=i-0e561c3f6d49525b5]
aws_instance.mhtServer-public-vpc: Modifications complete after 2s [id=i-0ef6c642d4b51d855]

Apply complete! Resources: 1 added, 3 changed, 0 destroyed.
```

