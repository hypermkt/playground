variable "access_key" {}
variable "secret_key" {}
variable "region" {}

provider "aws" {
  # Tokyo
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

# AWS パスワードポリシー
resource "aws_iam_account_password_policy" "iam_password_policy" {
  minimum_password_length           = 8
  require_numbers                   = true
  allow_users_to_change_password    = true
}

resource "aws_iam_group" "developers" {
  name = "developers"
}

resource "aws_iam_user" "user" {
  name = "hypermkt"
}

resource "aws_iam_user_group_membership" "developers" {
  user = "${aws_iam_user.user.name}"

  groups = [
    "${aws_iam_group.developers.name}"
  ]
}
