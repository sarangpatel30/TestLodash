import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isEmpty(value)
 * 
 * Application :
    Checks if value is an empty object, collection, map, or set.

Objects are considered empty if they have no own enumerable string keyed properties.

Array-like values such as arguments objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty if they have a size of 0.
*/

export const callLangIsEmpty = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsEmpty ---------------------');

  const isEmptyTestDataOneRes = _.isEmpty(null);
  const isEmptyTestDataTwoRes = _.isEmpty(true);
  const isEmptyTestDataThreeRes = _.isEmpty({ 'a': 1 });
  const isEmptyTestDataFourRes = _.isEmpty([1, 2, 3]);

  console.log("\n isEmptyTestDataOneRes \n", isEmptyTestDataOneRes);
  console.log("\n isEmptyTestDataTwoRes \n", isEmptyTestDataTwoRes);
  console.log("\n isEmptyTestDataThreeRes \n", isEmptyTestDataThreeRes);
  console.log("\n isEmptyTestDataFourRes \n", isEmptyTestDataFourRes);

  res.end(JSON.stringify({ isEmptyTestDataOneRes, isEmptyTestDataTwoRes, isEmptyTestDataThreeRes, isEmptyTestDataFourRes }));
};