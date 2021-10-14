import { Request, Response } from 'express';
const _ = require('lodash');

const maxTestDataOne = [4, 2, 8, 6];

/**
 * syntex: _.max(array)
 * 
 * Application :
   Computes the maximum value of array. If array is empty or falsey, undefined is returned.
*/

export const callMathMax = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Max ---------------------');

  const maxTestDataOneRes = _.max([]);
  const maxTestDataTwoRes = _.max(maxTestDataOne);

  console.log('\n maxTestDataOneRes: \n', maxTestDataOneRes);
  console.log('\n maxTestDataTwoRes: \n', maxTestDataTwoRes);

  res.end(JSON.stringify({ maxTestDataOneRes, maxTestDataTwoRes }));
};