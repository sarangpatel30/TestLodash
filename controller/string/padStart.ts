import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.padEnd([string=''], [length=0], [chars=' '])
 * 
 * Application :
   Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.
*/

export const callStringPadStart = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String PadStart ---------------------');

  const padStartTestDataOneRes = _.pad('abc', 8);
  const padStartTestDataTwoRes = _.pad('abc', 8, '_-');
  const padStartTestDataThreeRes = _.pad('abc', 3);

  console.log('\n padStartTestDataOneRes: \n', padStartTestDataOneRes);
  console.log('\n padStartTestDataTwoRes: \n', padStartTestDataTwoRes);
  console.log('\n padStartTestDataThreeRes: \n', padStartTestDataThreeRes);

  res.end(JSON.stringify({ padStartTestDataOneRes, padStartTestDataTwoRes, padStartTestDataThreeRes }));
};