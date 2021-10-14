import { Request, Response } from 'express';
const _ = require('lodash');

const cloneDeepTestDataOne = { x: 23 };
const cloneDeepTestDataTwo = [{ x: 1 }, { y: 2 }]

/**
 * syntex: _.cloneDeepWith(value, [customizer])
 * 
 * Application :
    This method is like _.cloneWith except that it recursively clones value.
*/

export const callLangCloneDeep = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang CloneDeep ---------------------');

  const cloneDeepTestDataOneRes = _.cloneDeep(cloneDeepTestDataOne);

  console.log('Comparing original with' + ' shallow ', cloneDeepTestDataOne === cloneDeepTestDataOneRes);
  cloneDeepTestDataOne.x = 10;

  console.log('\n After changing original value \n');
  console.log("\n Original value \n", cloneDeepTestDataOne);
  console.log("\n Shallow Copy value \n", cloneDeepTestDataOneRes);

  const cloneDeepTestDataTwoRes = _.cloneDeep(cloneDeepTestDataTwo);

  console.log('\n\n -------------------------------------- \n');
  console.log('Comparing original with' + ' shallow ', cloneDeepTestDataTwo === cloneDeepTestDataTwoRes);
  cloneDeepTestDataTwo[0].x = 10;

  console.log('\n After changing original value \n');
  console.log("\n Original value \n", cloneDeepTestDataTwo);
  console.log("\n Shallow Copy value \n", cloneDeepTestDataTwoRes);

  res.end(JSON.stringify({ cloneDeepTestDataOneRes, cloneDeepTestDataTwoRes }));
};