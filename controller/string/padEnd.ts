import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.padEnd([string=''], [length=0], [chars=' '])
 * 
 * Application :
   Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.
*/

export const callStringPadEnd = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String PadEnd ---------------------');

  const padEndTestDataOneRes = _.pad('abc', 8);
  const padEndTestDataTwoRes = _.pad('abc', 8, '_-');
  const padEndTestDataThreeRes = _.pad('abc', 3);

  console.log('\n padEndTestDataOneRes: \n', padEndTestDataOneRes);
  console.log('\n padEndTestDataTwoRes: \n', padEndTestDataTwoRes);
  console.log('\n padEndTestDataThreeRes: \n', padEndTestDataThreeRes);

  res.end(JSON.stringify({ padEndTestDataOneRes, padEndTestDataTwoRes, padEndTestDataThreeRes }));
};