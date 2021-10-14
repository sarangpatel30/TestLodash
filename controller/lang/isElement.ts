import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isElement(value)
 * 
 * Application :
    Checks if value is likely a DOM element.
*/

export const callLangIsElement = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsElement ---------------------');

  const isElementTestDataOneRes = _.isElement(/*document.body*/);
  const isElementTestDataTwoRes = _.isElement('<body>');

  console.log("\n isElementTestDataOneRes \n", isElementTestDataOneRes);
  console.log("\n isElementTestDataTwoRes \n", isElementTestDataTwoRes);

  res.end(JSON.stringify({ isElementTestDataOneRes, isElementTestDataTwoRes }));
};