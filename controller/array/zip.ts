import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.zip([arrays])
 * 
 * Application :
   Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
   the second of which contains the second elements of the given arrays, and so on.
*/

export const callArrayZip = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Zip ---------------------');

  const zipTestDataOneRes = _.zip(
    ['Akash', 'Amit', 'Aviral'],
    [1, 2, 3],
    ['pass', 'pass', 'fail']);

  const zipTestDataTwoRes = _.zip(
    ['Akash', 2, 'pass'],
    ['Amit', 2, 'pass'],
    ['Aviral', 3, 'fail']);

  const zipTestDataThreeRes = _.zip(
    ['Akash', 1, 5999],
    ['*', 2, 'pass'],
    ['!', '@', 3222]);

  console.log('\n zipTestDataOneRes: \n', zipTestDataOneRes);
  console.log('\n zipTestDataTwoRes: \n', zipTestDataTwoRes);
  console.log('\n zipTestDataThreeRes: \n', zipTestDataThreeRes);

  res.end(JSON.stringify({ zipTestDataOneRes, zipTestDataTwoRes, zipTestDataThreeRes }));
};