import { Request, Response } from 'express';
const _ = require('lodash');

const isObjectTestDataOne = [1, 2, 3, 4, 5];
const isObjectTestDataTwo = { x: 23, y: 25 };

/**
 * syntex: _.isObject(value)
 * 
 * Application :
    Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
*/

export const callLangIsObject = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsObject ---------------------');

  const isObjectTestDataOneRes = _.isObject('Testing Lodash');
  const isObjectTestDataTwoRes = _.isObject(isObjectTestDataOne);
  const isObjectTestDataThreeRes = _.isObject(isObjectTestDataTwo);

  console.log("\n isObjectTestDataOneRes \n", isObjectTestDataOneRes);
  console.log("\n isObjectTestDataTwoRes \n", isObjectTestDataTwoRes);
  console.log("\n isObjectTestDataThreeRes \n", isObjectTestDataThreeRes);

  res.end(JSON.stringify({ isObjectTestDataOneRes, isObjectTestDataTwoRes, isObjectTestDataThreeRes }));
};