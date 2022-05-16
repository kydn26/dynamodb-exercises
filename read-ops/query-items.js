const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Query Items
documentClient.query(
  {
    TableName: 'org-table-notes',
    KeyConditionExpression: 'user_id = :uid',
    ExpressionAttributeValues: {
      ':uid': '3e0752f4-abfd-4dfc-b82c-f55fe4095e91',
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
