import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.repeat([string=''], [n=1])
 * 
 * Application :
   Repeats the given string n times.
*/

export const callStringRepeat = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String Repeat ---------------------');

  const repeatTestDataOneRes = _.repeat('*', 3);
  const repeatTestDataTwoRes = _.repeat('abc', 2);
  const repeatTestDataThreeRes = _.repeat('abc', 0);

  console.log('\n repeatTestDataOneRes: \n', repeatTestDataOneRes);
  console.log('\n repeatTestDataTwoRes: \n', repeatTestDataTwoRes);
  console.log('\n repeatTestDataThreeRes: \n', repeatTestDataThreeRes);

  res.end(JSON.stringify({ repeatTestDataOneRes, repeatTestDataTwoRes, repeatTestDataThreeRes }));
};