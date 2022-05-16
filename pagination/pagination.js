const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const documentClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'org-table-notes',
  Limit: 3,
};

async function scanWithPagination() {
  let data = {};
  do {
    try {
      data = await documentClient.scan(params).promise();
      console.log(JSON.stringify(data, null, 2));
      if (data.LastEvaluatedKey) {
        params.ExclusiveStartKey = data.LastEvaluatedKey;
      }
    } catch (err) {
      console.error(err);
    }
  } while (data.LastEvaluatedKey);
}

scanWithPagination();
