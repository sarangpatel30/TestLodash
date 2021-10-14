import { Request, Response } from 'express';
const _ = require('lodash');

const pullAllTestDataOne = [1, 2, 3, 4, 5];
const pullAllTestDataTwo = [1, 2, 3, 1, 3, 4, 1, 5];

/**
 * syntex: _.pullAll(array, values)
 * 
 * Application :
   This method is like _.pull except that it accepts an array of values to remove.

   Note: Unlike _.difference, this method mutates array.
*/

export const callArrayarrayPullAll = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array PullAll ---------------------');
  const pullAllTestDataOneRes = _.pullAll(pullAllTestDataOne, [3, 5]);
  const pullAllTestDataTwoRes = _.pullAll(pullAllTestDataTwo, [1, 5]);

  console.log('\n pullAllTestDataOneRes: \n', pullAllTestDataOneRes);
  console.log('\n pullAllTestDataTwoRes: \n', pullAllTestDataTwoRes);

  res.end(JSON.stringify({ pullAllTestDataOneRes, pullAllTestDataTwoRes }));
};