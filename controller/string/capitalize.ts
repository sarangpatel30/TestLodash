import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.capitalize([string=''])
 * 
 * Application :
   Converts the first character of string to upper case and the remaining to lower case.
*/

export const callStringCapitalize = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String Capitalize ---------------------');

  const capitalizeTestDataOneRes = _.capitalize('FRED');

  console.log('\n capitalizeTestDataOneRes: \n', capitalizeTestDataOneRes);

  res.end(JSON.stringify({ capitalizeTestDataOneRes }));
};