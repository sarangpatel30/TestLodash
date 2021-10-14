import { Request, Response } from 'express';
const _ = require('lodash');

const isEqualTestDataOne = [1, 2, 3];
const isEqualTestDataTwo = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];


/**
 * syntex: _.isEqual(value, other)
 * 
 * Application :
    Performs a deep comparison between two values to determine if they are equivalent.

    Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, 
    i.e. ===.
*/

export const callLangIsEqual = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsEqual ---------------------');

  const isEqualTestDataOneRes = _.isEqual(isEqualTestDataOne, isEqualTestDataOne);
  const isEqualTestDataTwoRes = _.isEqual(isEqualTestDataTwo, isEqualTestDataTwo);

  console.log("\n isEqualTestDataOneRes \n", isEqualTestDataOneRes);
  console.log("\n isEqualTestDataTwoRes \n", isEqualTestDataTwoRes);

  res.end(JSON.stringify({ isEqualTestDataOneRes, isEqualTestDataTwoRes }));
};