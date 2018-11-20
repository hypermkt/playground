variable "access_key" {}
variable "secret_key" {}
variable "region" {}

provider "aws" {
  # Tokyo
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

resource "aws_instance" "example" {
  ami           = "ami-0a2de1c3b415889d2"
  instance_type = "t2.micro"
}
