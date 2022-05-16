const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Insert a new item
documentClient.put(
  {
    TableName: 'org-table-notes',
    Item: {
      user_id: '8a7bccfb-e324-44a4-8762-aef16f1dabb5',
      timestamp: 1652588323,
      cat: 'Category A',
      id: '3c9a90ba-8261-41f5-b5ce-d7a47136c1fd',
      title: 'Etiam luctus felis quis ultrices.',
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
