zip -qr lambda.zip bin template node_modules

aws lambda update-function-code --function-name lambda_function --zip-file fileb://lambda.zip
