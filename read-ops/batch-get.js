const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

// Batch Get
documentClient.batchGet(
  {
    RequestItems: {
      'org-table-notes': {
        Keys: [
          {
            user_id: '227c685d-6c2a-4a9a-905c-d355be0f3a14',
            timestamp: 1652578866,
          },
          {
            user_id: '7f829568-4226-4e1a-8f72-f4655345c076',
            timestamp: 1652648480,
          },
        ],
      },
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
