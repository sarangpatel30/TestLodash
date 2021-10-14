import { Request, Response } from 'express';
const _ = require('lodash');

const differenceTestDataOne = [1, 2, 3];
const differenceTestDataTwo = [3, 4, 5];

/**
 * syntex: _.difference(array, [values])
 * 
 * Application :
   Creates an array of array values not included in the other given
   arrays using SameValueZero for equality comparisons.
   The order and references of result values are determined by the first array.

   Note: Unlike _.pullAll, this method returns a new array.
*/

export const callArrayDifference = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Difference ---------------------');
  const differenceTestDataOneRes = _.difference(differenceTestDataOne, differenceTestDataTwo);
  const differenceTestDataTwoRes = _.difference(differenceTestDataOne, ['1', '2', '3']);

  console.log('\n differenceTestDataOneRes: \n', differenceTestDataOneRes);
  console.log('\n differenceTestDataTwoRes: \n', differenceTestDataTwoRes);

  res.end(JSON.stringify({ differenceTestDataOneRes, differenceTestDataTwoRes }));
};
