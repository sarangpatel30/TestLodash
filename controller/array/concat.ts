import { Request, Response } from 'express';
const _ = require('lodash');

const concatTestDataOne = [1, 2, 3];
const concatTestDataTwo = [3, 4, 5];

/**
 * usages:  I want to concat values.
 * 
 * syntex: _.concat(array, [values]);
 * 
 * Application :
   Creates a new array concatenating array with any additional arrays and/or values..
 */

export const callArrayConcat = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Concat ---------------------');
  const concatTestDataOneRes = _.concat(concatTestDataOne, concatTestDataTwo);
  const concatTestDataTwoRes = _.concat(concatTestDataOne, ['1', '2', '3']);
  const concatTestDataThreeRes = _.concat(concatTestDataOne, { a: 1, b: 2 }, [6, 7]);


  console.log('\n concatTestDataOneRes: \n', concatTestDataOneRes);
  console.log('\n concatTestDataTwoRes: \n', concatTestDataTwoRes);
  console.log('\n concatTestDataThreeRes: \n', concatTestDataThreeRes);

  res.end(JSON.stringify({ concatTestDataOneRes, concatTestDataTwoRes, concatTestDataThreeRes }));
};
