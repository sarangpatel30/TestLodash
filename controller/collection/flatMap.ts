import { Request, Response } from 'express';
const _ = require('lodash');

interface flatMapSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const flatMapTestDataOne = [1, 2, 3, 4];
const flatMapTestDataTwo = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

/**
 * syntex: _.flatMap(collection, [iteratee=_.identity])
 * 
 * Application :
    Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results.
    The iteratee is invoked with three arguments: (value, index|key, collection).
*/

export const callCollectionFlatMap = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection FlatMap ---------------------');

  const flatMapTestDataOneRes = _.flatMap(flatMapTestDataOne, function duplicate(n: number) { return [n, n] });
  const flatMapTestDataTwoRes = _.flatMap(flatMapTestDataTwo, function duplicate(n: flatMapSingleTestDataObject) { return [n, n] });

  console.log('\n flatMapTestDataOneRes: \n', flatMapTestDataOneRes);
  console.log('\n flatMapTestDataTwoRes: \n', flatMapTestDataTwoRes);

  res.end(JSON.stringify({ flatMapTestDataOneRes, flatMapTestDataTwoRes }));
};