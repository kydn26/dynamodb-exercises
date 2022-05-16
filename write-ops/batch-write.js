const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Batch Serveral Write Operations
documentClient.batchWrite(
  {
    RequestItems: {
      'org-table-notes': [
        {
          PutRequest: {
            Item: {
              user_id: '7f829568-4226-4e1a-8f72-f4655345c076',
              timestamp: 1652648480,
              cat: 'Category D',
              id: '0b43cdc5-2fc4-4706-b9f5-f350cc309daf',
              title: 'Etiam eu pharetra urna. Ut.',
            },
          },
        },
        {
          DeleteRequest: {
            Key: {
              user_id: '227c685d-6c2a-4a9a-905c-d355be0f3a14',
              timestamp: 1652578378,
            },
          },
        },
      ],
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
