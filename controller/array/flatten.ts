import { Request, Response } from 'express';
const _ = require('lodash');

const flattenTestDataOne = [1, [2, [3, [4]], 5]];
const flattenTestDataTwo = [1, [{ a: 1 }, { x: 2 }, 5]];

/**
 * syntex: _.flatten(array)
 * 
 * Application :
 * Flattens array a single level deep.
*/

export const callArrayarrayFlatten = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Flatten ---------------------');
  const flattenTestDataOneRes = _.flatten(flattenTestDataOne);
  const flattenTestDataTwoRes = _.flatten(flattenTestDataTwo);

  console.log('\n flattenTestDataOneRes: \n', flattenTestDataOneRes);
  console.log('\n flattenTestDataTwoRes: \n', flattenTestDataTwoRes);

  res.end(JSON.stringify({ flattenTestDataOneRes, flattenTestDataTwoRes }));
};
