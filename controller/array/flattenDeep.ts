import { Request, Response } from 'express';
const _ = require('lodash');

const flattenDeepTestDataOne = [1, [2, [3, [4]], 5]];
const flattenDeepTestDataTwo = [1, [{ a: 1 }, [{ x: 2 }], 5]];

/**
 * syntex: _.flattenDeep(array)
 * 
 * Application :
  Recursively flattens array.
*/

export const callArrayarrayFlattenDeep = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array FlattenDeep ---------------------');
  const flattenDeepTestDataOneRes = _.flattenDeep(flattenDeepTestDataOne);
  const flattenDeepTestDataTwoRes = _.flattenDeep(flattenDeepTestDataTwo);

  console.log('\n flattenDeepTestDataOneRes: \n', flattenDeepTestDataOneRes);
  console.log('\n flattenDeepTestDataTwoRes: \n', flattenDeepTestDataTwoRes);

  res.end(JSON.stringify({ flattenDeepTestDataOneRes, flattenDeepTestDataTwoRes }));
};
