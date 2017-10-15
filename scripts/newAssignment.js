require('dotenv').config();

const { docClient } = require('../server/src/aws');

const queryParams = {
  TableName: 'assignments',
  KeyConditionExpression: 'classCode = :classCode',
  ExpressionAttributeValues: {
    ':classCode': 'cst334',
  },
};

docClient.query(queryParams, (err, { Items }) => {
  if (err) {
    console.log(err, err.stack);
  } else {
    const names = Items.map(({ name }) => name);
    /*
    const attempts = Items.reduce((newAttempts, { name, attempts }) => {
      newAttempts[name] = attempts;
      return newAttempts;
    }, {});
    */
    console.log(names);

    const userParams = {
      TableName: 'users-assignments',
      KeyConditionExpression: 'username = :username',
      ExpressionAttributeValues: {
        ':username': 'austin',
      },
    };

    docClient.query(userParams, (error, { Items }) => {
      if (error) {
        console.log(error, error.stack);
        // res.sendStatus(500);
      } else {

        /*
        const studentAssignments = names.map((name) => {
          const dataExists = Items.find(({ assignmentName }) => assignmentName === name);
          if (dataExists) {
            return dataExists;
          } else {
            const newAssignment =

            newAssignments.push(newAssignment);
            return newAssignment;
          }
        });

        if (newAssignments.length) {
          const batchParams = {
            RequestItems: {
              'users-assignments': newAssignments.map((assignment) => ({
                PutRequest: {
                  Item: assignment,
                },
              })),
            }
          };

          console.log(batchParams);
        }
        */
      }
    });
  }
})
