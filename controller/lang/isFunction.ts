import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isFunction(value)
 * 
 * Application :
    Checks if value is classified as a Function object.
*/

export const callLangIsFunction = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsFunction ---------------------');

  const isFunctionTestDataOneRes = _.isFunction(_);
  const isFunctionTestDataTwoRes = _.isFunction(/abc/);
  const isFunctionTestDataThreeRes = _.isFunction(() => { });

  console.log("\n isFunctionTestDataOneRes \n", isFunctionTestDataOneRes);
  console.log("\n isFunctionTestDataTwoRes \n", isFunctionTestDataTwoRes);
  console.log("\n isFunctionTestDataThreeRes \n", isFunctionTestDataThreeRes);

  res.end(JSON.stringify({ isFunctionTestDataOneRes, isFunctionTestDataTwoRes, isFunctionTestDataThreeRes }));
};