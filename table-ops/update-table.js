const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

// Update a DynamoDB Table
dynamodb.updateTable(
  {
    TableName: 'org-table-notes-sdk',
    ProvisionedThroughput: {
      ReadCapacityUnits: 2,
      WriteCapacityUnits: 1,
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
