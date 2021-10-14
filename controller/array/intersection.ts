import { Request, Response } from 'express';
const _ = require('lodash');

const intersectionTestDataOne = [1, 2, 3];
const intersectionTestDataTwo = [3, 4, 5];

/**
 * _.intersection([arrays])
 * 
 * Application :
  Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.
  The order and references of result values are determined by the first array.
*/

export const callArrayIntersection = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Intersection ---------------------');
  const intersectionTestDataOneRes = _.intersection(intersectionTestDataOne, intersectionTestDataTwo);
  const intersectionTestDataTwoRes = _.intersection(intersectionTestDataOne, ['1', '2', '3']);

  console.log('\n intersectionTestDataOneRes: \n', intersectionTestDataOneRes);
  console.log('\n intersectionTestDataTwoRes: \n', intersectionTestDataTwoRes);

  res.end(JSON.stringify({ intersectionTestDataOneRes, intersectionTestDataTwoRes }));
};
