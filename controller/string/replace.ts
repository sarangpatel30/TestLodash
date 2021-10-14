import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.replace([string=''], pattern, replacement)
 * 
 * Application :
   Replaces matches for pattern in string with replacement.
*/

export const callStringReplace = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String Repeat ---------------------');

  const repeatTestDataOneRes = _.replace('Hi Fred', 'Fred', 'Barney');
  const repeatTestDataTwoRes = _.replace('234 56 41', '56 41', '78');

  console.log('\n repeatTestDataOneRes: \n', repeatTestDataOneRes);
  console.log('\n repeatTestDataTwoRes: \n', repeatTestDataTwoRes);

  res.end(JSON.stringify({ repeatTestDataOneRes, repeatTestDataTwoRes }));
};