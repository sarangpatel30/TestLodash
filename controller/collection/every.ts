import { Request, Response } from 'express';
const _ = require('lodash');

const everyTestDataOne = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred', 'age': 40, 'active': false }
];;

/**
 * syntex: _.every(collection, [predicate=_.identity])
 * 
 * Application :
   Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.
   The predicate is invoked with three arguments: (value, index|key, collection).

   Note: This method returns true for empty collections because everything is true of elements of empty collections.
*/

export const callCollectionEvery = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection Every ---------------------');

  const everyTestDataOneRes = _.every(everyTestDataOne, { 'user': 'barney', 'active': false });
  const everyTestDataTwoRes = _.every(everyTestDataOne, ['active', false]);
  const everyTestDataThreeRes = _.every(everyTestDataOne, 'active');

  console.log('\n everyTestDataOneRes: \n', everyTestDataOneRes);
  console.log('\n everyTestDataTwoRes: \n', everyTestDataTwoRes);
  console.log('\n everyTestDataThreeRes: \n', everyTestDataThreeRes);

  res.end(JSON.stringify({ everyTestDataOneRes, everyTestDataTwoRes, everyTestDataThreeRes }));
};