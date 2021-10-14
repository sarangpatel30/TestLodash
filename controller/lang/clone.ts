import { Request, Response } from 'express';
const _ = require('lodash');

const cloneTestDataOne = { x: 23 };
const cloneTestDataTwo = [{ x: 1 }, { y: 2 }]

/**
 * syntex: _.clone(value)
 * 
 * Application :
    Creates a shallow clone of value.

    Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
*/

export const callLangClone = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang Clone ---------------------');

  const castArrayTestDataOneRes = _.clone(cloneTestDataOne);

  console.log('Comparing original with' + ' shallow ', cloneTestDataOne === castArrayTestDataOneRes);
  cloneTestDataOne.x = 10;

  console.log('\n After changing original value \n');
  console.log("\n Original value \n", cloneTestDataOne);
  console.log("\n Shallow Copy value \n", castArrayTestDataOneRes);

  const castArrayTestDataTwoRes = _.clone(cloneTestDataTwo);

  console.log('\n\n --------------------------------------');
  console.log('Comparing original with' + ' shallow ', cloneTestDataTwo === castArrayTestDataTwoRes);
  cloneTestDataTwo[0].x = 10;

  console.log('\n After changing original value \n');
  console.log("\n Original value \n", cloneTestDataTwo);
  console.log("\n Shallow Copy value \n", castArrayTestDataTwoRes);

  res.end(JSON.stringify({ castArrayTestDataOneRes, castArrayTestDataTwoRes }));
};