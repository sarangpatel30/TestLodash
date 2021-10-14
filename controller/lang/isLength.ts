import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isLength(value)
 * 
 * Application :
    Checks if value is a valid array-like length.

    Note: This method is loosely based on ToLength.
*/

export const callLangIsLength = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsLength ---------------------');

  const isLengthTestDataOneRes = _.isLength(3);
  const isLengthTestDataTwoRes = _.isLength(Number.MIN_VALUE);
  const isLengthTestDataThreeRes = _.isLength(Infinity);

  console.log("\n isLengthTestDataOneRes \n", isLengthTestDataOneRes);
  console.log("\n isLengthTestDataTwoRes \n", isLengthTestDataTwoRes);
  console.log("\n isLengthTestDataThreeRes \n", isLengthTestDataThreeRes);

  res.end(JSON.stringify({ isLengthTestDataOneRes, isLengthTestDataTwoRes, isLengthTestDataThreeRes }));
};