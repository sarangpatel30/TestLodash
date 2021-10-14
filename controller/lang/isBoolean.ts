import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isBoolean(value)
 * 
 * Application :
    Checks if value is classified as a boolean primitive or object.
*/

export const callLangIsBoolean = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsBoolean ---------------------');

  const isBooleanTestDataOneRes = _.isBoolean(false);
  const isBooleanTestDataTwoRes = _.isBoolean(null);
  const isBooleanTestDataThreeRes = _.isBoolean(1);
  const isBooleanTestDataFourRes = _.isBoolean('1');

  console.log("\n isBooleanTestDataOneRes \n", isBooleanTestDataOneRes);
  console.log("\n isBooleanTestDataTwoRes \n", isBooleanTestDataTwoRes);
  console.log("\n isBooleanTestDataThreeRes \n", isBooleanTestDataThreeRes);
  console.log("\n isBooleanTestDataFourRes \n", isBooleanTestDataFourRes);

  res.end(JSON.stringify({ isBooleanTestDataOneRes, isBooleanTestDataTwoRes, isBooleanTestDataThreeRes, isBooleanTestDataFourRes }));
};