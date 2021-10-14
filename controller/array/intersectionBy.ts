import { Request, Response } from 'express';
const _ = require('lodash');

const intersectionByTestDataOne = [1.1, 2.2, 3.3, 4.4];
const intersectionByTestDataTwo = [{ 'x': 1 }, { 'x': 2 }, { 'x': 2 }];

/**
 * syntex: _.intersectionBy([arrays], [iteratee=_.identity])
 * 
 * Application :
    This method is like _.intersection except that it accepts iteratee which is invoked for each element
    of each arrays to generate the criterion by which they're compared.
    The order and references of result values are determined by the first array. 
    The iteratee is invoked with one argument:
    (value).
*/

export const callArrayIntersectionBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array IntersectionBy ---------------------');
  const differenceTestDataOneRes = _.intersectionBy(intersectionByTestDataOne, [2.3, 3.4], Math.floor);
  const differenceTestDataTwoRes = _.intersectionBy(intersectionByTestDataTwo, [{ 'x': 1 }], 'x');

  console.log('\n differenceTestDataOneRes: \n', differenceTestDataOneRes);
  console.log('\n differenceTestDataTwoRes: \n', differenceTestDataTwoRes);

  res.end(JSON.stringify({ differenceTestDataOneRes, differenceTestDataTwoRes }));
};
