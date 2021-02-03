zip -qr lambda.zip lambda.js bin template node_modules

aws lambda update-function-code --function-name lambda_function --zip-file fileb://lambda.zip