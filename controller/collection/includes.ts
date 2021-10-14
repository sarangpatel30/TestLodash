import { Request, Response } from 'express';
const _ = require('lodash');

const groupByTestDataOne = [1, 2, 3, 4, 5];
const groupByTestDataTwo = { 'a': 1, 'b': 2 };

/**
 * syntex: _.includes(collection, value, [fromIndex=0])
 * 
 * Application :
   Checks if value is in collection. If collection is a string, it's checked for a substring of value,
   otherwise SameValueZero is used for equality comparisons. 
   If fromIndex is negative, it's used as the offset from the end of collection.
*/

export const callCollectionIncludes = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection Includes ---------------------');

  const includesTestDataOneRes = _.includes(groupByTestDataOne, 1);
  const includesTestDataTwoRes = _.includes(groupByTestDataOne, 1, 2);
  const includesTestDataThreeRes = _.includes(groupByTestDataTwo, 1);
  const includesTestDataFourRes = _.includes('abcde', 'bc');

  console.log('\n includesTestDataOneRes: \n', includesTestDataOneRes);
  console.log('\n includesTestDataTwoRes: \n', includesTestDataTwoRes);
  console.log('\n includesTestDataThreeRes: \n', includesTestDataThreeRes);
  console.log('\n includesTestDataFourRes: \n', includesTestDataFourRes);

  res.end(JSON.stringify({ includesTestDataOneRes, includesTestDataTwoRes, includesTestDataThreeRes, includesTestDataFourRes }));
};