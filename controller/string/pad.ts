import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.pad([string=''], [length=0], [chars=' '])
 * 
 * Application :
   Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
*/

export const callStringPad = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String Pad ---------------------');

  const padTestDataOneRes = _.pad('abc', 8);
  const padTestDataTwoRes = _.pad('abc', 8, '_-');
  const padTestDataThreeRes = _.pad('abc', 3);

  console.log('\n padTestDataOneRes: \n', padTestDataOneRes);
  console.log('\n padTestDataTwoRes: \n', padTestDataTwoRes);
  console.log('\n padTestDataThreeRes: \n', padTestDataThreeRes);

  res.end(JSON.stringify({ padTestDataOneRes, padTestDataTwoRes, padTestDataThreeRes }));
};