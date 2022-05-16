const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Get Item
documentClient.get(
  {
    TableName: 'org-table-notes',
    Key: {
      user_id: '7f829568-4226-4e1a-8f72-f4655345c076',
      timestamp: 1652648480,
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
