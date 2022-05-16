const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

documentClient.put(
  {
    TableName: 'org-table-notes',
    Item: {
      user_id: 'edebc0f3-7e4a-430f-8950-f5c370956d18',
      timestamp: 1652579133,
      cat: 'Category E',
      id: 'd8742d3c-7982-4d59-9276-56c6fb684075',
      title: 'Interdum et malesuada fames ac.',
    },
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
      '#t': 'timestamp',
    },
    ExpressionAttributeValues: {
      ':t': 1652579133,
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
