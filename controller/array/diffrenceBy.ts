import { Request, Response } from 'express';
const _ = require('lodash');

const differenceByTestDataOne = [1.1, 2.2, 3.3, 4.4];
const differenceByTestDataTwo = [{ 'x': 1 }, { 'x': 2 }];

/**
 * syntex: _.differenceBy(array, [values], [iteratee=_.identity])
 * 
 * Application :
 * This method is like _.difference except that it accepts iteratee which is invoked for each element
   of array and values to generate the criterion by which they're compared.
    The order and references of result values are determined by the first array. 
    The iteratee is invoked with one argument: (value).

   Note: Unlike _.pullAllBy, this method returns a new array.
*/

export const callArrayDifferenceBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array DifferenceBy ---------------------');
  // _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
  const differenceTestDataOneRes = _.differenceBy(differenceByTestDataOne, [2.3, 3.4], Math.floor);
  const differenceTestDataTwoRes = _.differenceBy(differenceByTestDataTwo, [{ 'x': 1 }], 'x');

  console.log('\n differenceTestDataOneRes: \n', differenceTestDataOneRes);
  console.log('\n differenceTestDataTwoRes: \n', differenceTestDataTwoRes);

  res.end(JSON.stringify({ differenceTestDataOneRes, differenceTestDataTwoRes }));
};
