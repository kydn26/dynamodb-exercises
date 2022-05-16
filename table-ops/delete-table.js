const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

// Delete a DynamoDB Table
dynamodb.deleteTable(
  {
    TableName: 'org-table-notes-sdk',
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
