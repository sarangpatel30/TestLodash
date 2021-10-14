import { Request, Response } from 'express';
const _ = require('lodash');

const pullTestDataOne = [1, 2, 3, 4, 5];
const pullTestDataTwo = [1, 2, 3, 1, 3, 4, 1, 5];

/**
 * syntex: _.pull(array, [values])  
 * 
 * Application :
   Removes all given values from array using SameValueZero for equality comparisons.
*/

export const callArrayarrayPull = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Pull ---------------------');
  const pullTestDataOneRes = _.pull(pullTestDataOne, 3, 5);
  const pullTestDataTwoRes = _.pull(pullTestDataTwo, 1, 5);

  console.log('\n pullTestDataOneRes: \n', pullTestDataOneRes);
  console.log('\n pullTestDataTwoRes: \n', pullTestDataTwoRes);

  res.end(JSON.stringify({ pullTestDataOneRes, pullTestDataTwoRes }));
};
