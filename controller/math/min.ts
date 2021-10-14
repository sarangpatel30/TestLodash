import { Request, Response } from 'express';
const _ = require('lodash');

const minTestDataOne = [4, 2, 8, 6];

/**
 * syntex: _.min(array)

 * 
 * Application :
   Computes the minimum value of array. If array is empty or falsey, undefined is returned.
*/

export const callMathMin = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Min ---------------------');

  const minTestDataOneRes = _.min([]);
  const minTestDataTwoRes = _.min(minTestDataOne);

  console.log('\n minTestDataOneRes: \n', minTestDataOneRes);
  console.log('\n minTestDataTwoRes: \n', minTestDataTwoRes);

  res.end(JSON.stringify({ minTestDataOneRes, minTestDataTwoRes }));
};