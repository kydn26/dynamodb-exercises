const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB();

// Create a DynamoDB Table
const params = {
  TableName: 'org-table-notes-sdk',
  AttributeDefinitions: [
    {
      AttributeName: 'user_id',
      AttributeType: 'S',
    },
    {
      AttributeName: 'timestamp',
      AttributeType: 'N',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'user_id',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'timestamp',
      KeyType: 'RANGE',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
});
