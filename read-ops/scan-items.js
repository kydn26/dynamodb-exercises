const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Scan Items
documentClient.scan(
  {
    TableName: 'org-table-notes',
    FilterExpression: 'cat = :cat',
    ExpressionAttributeValues: {
      ':cat': 'Category C',
    },
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
