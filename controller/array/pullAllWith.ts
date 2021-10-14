import { Request, Response } from 'express';
const _ = require('lodash');

const pullAllWithTestDataOne = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
const pullAllWithTestDataTwo = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }, { 'x': 3, 'y': 4, 'z': 9 }];

/**
 * syntex: _.pullAllWith(array, values, [comparator])
 * 
 * Application :
   This method is like _.pullAll except that it accepts comparator which is invoked to compare
   elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

   Note: Unlike _.differenceWith, this method mutates array.
*/

export const callArrayarrayPullAllWith = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array PullAllWiths ---------------------');

  const pullAllWithTestDataOneRes = _.pullAllWith(pullAllWithTestDataOne, [{ 'x': 3, 'y': 4 }], _.isEqual);
  const pullAllWithTestDataTwoRes = _.pullAllWith(pullAllWithTestDataTwo, [{ 'x': 3, 'y': 4 }], _.isEqual);

  console.log('\n pullAllWithTestDataOneRes: \n', pullAllWithTestDataOneRes);
  console.log('\n pullAllWithTestDataTwoRes: \n', pullAllWithTestDataTwoRes);

  res.end(JSON.stringify({ pullAllWithTestDataOneRes, pullAllWithTestDataTwoRes }));
};