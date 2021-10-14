import { Request, Response } from 'express';
const _ = require('lodash');

const meanTestDataOne = [4, 2, 8, 6];

/**
 * syntex: _.mean(array)

 * 
 * Application :
   Computes the mean of the values in array.
*/

export const callMathMean = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Mean ---------------------');

  const meanTestDataOneRes = _.max([]);
  const meanTestDataTwoRes = _.max(meanTestDataOne);

  console.log('\n meanTestDataOneRes: \n', meanTestDataOneRes);
  console.log('\n meanTestDataTwoRes: \n', meanTestDataTwoRes);

  res.end(JSON.stringify({ meanTestDataOneRes, meanTestDataTwoRes }));
};