import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.ceil(number, [precision=0])
 * 
 * Application :
    Computes number rounded up to precision.
*/

export const callMathCeil = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Ceil ---------------------');

  const ceilTestDataOneRes = _.ceil(4.006);
  const ceilTestDataTwoRes = _.ceil(6.004, 2);
  const ceilTestDataThreeRes = _.ceil(6040, -2);

  console.log('\n ceilTestDataOneRes: \n', ceilTestDataOneRes);
  console.log('\n ceilTestDataTwoRes: \n', ceilTestDataTwoRes);
  console.log('\n ceilTestDataThreeRes: \n', ceilTestDataThreeRes);

  res.end(JSON.stringify({ ceilTestDataOneRes, ceilTestDataTwoRes, ceilTestDataThreeRes }));
};