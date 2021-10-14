import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.divide(dividend, divisor)  
 * 
 * Application :
   Divide two numbers.
*/

export const callMathDivide = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Divide ---------------------');

  const divideTestDataOneRes = _.add(6, 2);
  const divideTestDataTwoRes = _.add(6, 4);

  console.log('\n divideTestDataOneRes: \n', divideTestDataOneRes);
  console.log('\n divideTestDataTwoRes: \n', divideTestDataTwoRes);

  res.end(JSON.stringify({ divideTestDataOneRes, divideTestDataTwoRes }));
};