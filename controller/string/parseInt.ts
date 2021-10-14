import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.parseInt(string, [radix=10])
 * 
 * Application :
   Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.
*/

export const callStringParseInt = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String ParseInt ---------------------');

  const parseIntTestDataOneRes = _.parseInt('08');
  const parseIntTestDataTwoRes = _.map(['6', '08', '10'], _.parseInt);

  console.log('\n parseIntTestDataOneRes: \n', parseIntTestDataOneRes);
  console.log('\n parseIntTestDataTwoRes: \n', parseIntTestDataTwoRes);

  res.end(JSON.stringify({ parseIntTestDataOneRes, parseIntTestDataTwoRes }));
};