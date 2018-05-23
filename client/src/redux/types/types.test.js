import * as auth from './auth';
import * as data from './data';
import * as editAssignment from './edit-assignment';
import * as editors from './editors';
import * as part from './parts';
import * as user from './user';

const types = {
  auth,
  data,
  editAssignment,
  editors,
  part,
  user,
};

const findDuplicates = () => (
  new Promise((resolve, reject) => {
    const typeDict = {};
    Object.keys(types).forEach((typesKey) => {
      const typeObject = types[typesKey];
      Object.keys(typeObject).forEach((typeKey) => {
        const typeString = typeObject[typeKey];
        if (typeDict[typeString]) {
          console.log(`keys: ${typeDict[typeString].typesKey}, ${typesKey}`);
          console.log(`value: ${typeString}`);
          resolve(false);
        } else {
          typeDict[typeString] = {
            typesKey,
          };
        }
      });
    });
    resolve(true);
  })
);

describe('testing action types to ensure no duplicates', () => {
  it('should find no duplicate action types', () => {
    findDuplicates().then(unique => expect(unique).toBe(true));
  });
});
