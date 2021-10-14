import { Request, Response } from 'express';
const _ = require('lodash');

const sumTestDataOne = [4, 2, 8, 6];

/**
 * syntex: _.sum(array)
 * 
 * Application :
   Computes the sumimum value of array. If array is empty or falsey, undefined is returned.
*/

export const callMathSum = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Sum ---------------------');

  const sumTestDataOneRes = _.sum([]);
  const sumTestDataTwoRes = _.sum(sumTestDataOne);

  console.log('\n sumTestDataOneRes: \n', sumTestDataOneRes);
  console.log('\n sumTestDataTwoRes: \n', sumTestDataTwoRes);

  res.end(JSON.stringify({ sumTestDataOneRes, sumTestDataTwoRes }));
};