import { Request, Response } from 'express';
const _ = require('lodash');

const flattenDepthTestDataOne = [1, [2, [3, [4]], 5]];
const flattenDepthTestDataTwo = [1, [{ a: 1 }, [{ x: 2 }], 5]];

/**
 * syntex: _.flattenDepth(array, [depth=1])
 * 
 * Application :
 * Recursively flatten array up to depth times.
*/

export const callArrayarrayFlattenDepth = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array FlattenDepth ---------------------');
  const flattenDepthTestDataOneRes = _.FlattenDepth(flattenDepthTestDataOne, 1);
  const flattenDepthTestDataTwoRes = _.FlattenDepth(flattenDepthTestDataTwo, 2);

  console.log('\n flattenDepthTestDataOneRes: \n', flattenDepthTestDataOneRes);
  console.log('\n flattenDepthTestDataTwoRes: \n', flattenDepthTestDataTwoRes);

  res.end(JSON.stringify({ flattenDepthTestDataOneRes, flattenDepthTestDataTwoRes }));
};
