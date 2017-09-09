const request = require('request-promise');

const options = require('./options');

const runCode = (tempPath) => (
  new Promise((resolve, reject) => {
    request(options.createOptions(tempPath))
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return Id;
      })
      .then((Id) => {
        request(options.startOptions(Id))
          .then(() => request(options.waitOptions(Id)))
          .then(() => resolve());
      })
      .catch(err => reject(err));
  })
);
