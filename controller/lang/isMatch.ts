import { Request, Response } from 'express';
const _ = require('lodash');

const isMatchTestDataOne = { x: 23, y: 25 };

/**
 * syntex: _.isMatch(object, source)
 * 
 * Application :
    Performs a partial deep comparison between object and source to determine if object contains equivalent property values.

Note: This method is equivalent to _.matches when source is partially applied.

Partial comparisons will match empty array and empty object source values against any array or object value, respectively. See _.isEqual for a list of supported value comparisons.
*/

export const callLangIsMatch = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsMatch ---------------------');

  const isMatchTestDataOneRes = _.isMatch(isMatchTestDataOne, { x: 23 });
  const isMatchTestDataTwoRes = _.isMatch(isMatchTestDataOne, { x: 2 });

  console.log("\n isMatchTestDataOneRes \n", isMatchTestDataOneRes);
  console.log("\n isMatchTestDataTwoRes \n", isMatchTestDataTwoRes);

  res.end(JSON.stringify({ isMatchTestDataOneRes, isMatchTestDataTwoRes }));
};