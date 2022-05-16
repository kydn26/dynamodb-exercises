const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Delete a item
documentClient.delete(
  {
    TableName: 'org-table-notes',
    Key: {
      user_id: '8a7bccfb-e324-44a4-8762-aef16f1dabb5',
      timestamp: 1652588323,
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
