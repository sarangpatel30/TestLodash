import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.trim([string=''], [chars=whitespace])
 * 
 * Application :
   Removes leading and trailing whitespace or specified characters from string.
*/

export const callStringTrim = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String Trim ---------------------');

  const trimTestDataOneRes = _.trim('  abc  ');
  const trimTestDataTwoRes = _.trim('-_-abc-_-', '_-');
  const trimTestDataThreeRes = _.map(['  foo  ', '  bar  '], _.trim);

  console.log('\n trimTestDataOneRes: \n', trimTestDataOneRes);
  console.log('\n trimTestDataTwoRes: \n', trimTestDataTwoRes);
  console.log('\n trimTestDataThreeRes: \n', trimTestDataThreeRes);

  res.end(JSON.stringify({ trimTestDataOneRes, trimTestDataTwoRes, trimTestDataThreeRes }));
};