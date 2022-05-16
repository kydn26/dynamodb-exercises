const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

// List DynamoDB Tables
dynamodb.listTables({}, (data, err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
