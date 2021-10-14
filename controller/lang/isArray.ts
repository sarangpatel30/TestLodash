import { Request, Response } from 'express';
const _ = require('lodash');

const isArrayTestDataOne = [1, 2, 3];
const isArrayTestDataTwo = 'Testing Lodash';
const isArrayTestDataThree = { dir: 'left', code: 97 };
const isArrayTestDataFour = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

/**
 * syntex: _.isArray(value)
 * 
 * Application :
    Checks if value is classified as an Array object.
*/

export const callLangIsArray = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsArray ---------------------');

  const isArrayTestDataOneRes = _.isArray(isArrayTestDataOne);
  const isArrayTestDataTwoRes = _.isArray(isArrayTestDataTwo);
  const isArrayTestDataThreeRes = _.isArray(isArrayTestDataThree);
  const isArrayTestDataFourRes = _.isArray(isArrayTestDataFour);

  console.log("\n isArrayTestDataOne \n", isArrayTestDataOne);
  console.log("\n isArrayTestDataTwo \n", isArrayTestDataTwo);
  console.log("\n isArrayTestDataThree \n", isArrayTestDataThree);
  console.log("\n isArrayTestDataFour \n", isArrayTestDataFour);

  res.end(JSON.stringify({ isArrayTestDataOneRes, isArrayTestDataTwoRes, isArrayTestDataThreeRes, isArrayTestDataFourRes }));
};