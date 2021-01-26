provider "aws" {
  region = "eu-west-2"
}

resource "aws_iam_role" "lambda_role" {
  name        = "lambda_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Sid": ""
    }
  ]
}
EOF
}

/*
data aws_iam_role "lambda_role" {
  name = "lambda_role"
}
*/

resource "aws_lambda_function" "lambda_function" {
//role             = data.aws_iam_role.lambda_role.arn
  role             = aws_iam_role.lambda_role.arn
  handler          = "lambda.handler"
  runtime          = "nodejs12.x"
  filename         = "lambda.zip"
  function_name    = "lambda_function"
  source_code_hash = filesha256("lambda.zip")
}

resource "aws_lambda_permission" "lambda_permission" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.lambda_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_api" "lambda_api" {
  name          = "lambda_api"
  protocol_type = "HTTP"
  target        = aws_lambda_function.lambda_function.arn
}
