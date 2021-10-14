import { Request, Response } from 'express';
const _ = require('lodash');

interface flatMapDepthSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const flatMapDepthTestDataOne = [1, 2, 3, 4];
const flatMapDepthTestDataTwo = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

/**
 * syntex: _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
 * 
 * Application :
   This method is like _.flatMap except that it recursively flattens the mapped results up to depth times.
*/

export const callCollectionFlatMapDepth = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection FlatMapDepth ---------------------');

  const flatMapDepthTestDataOneRes = _.flatMapDepth(flatMapDepthTestDataOne, function duplicate(n: number) { return [[[n, n]]] }, 2);
  const flatMapDepthTestDataTwoRes = _.flatMapDepth(flatMapDepthTestDataTwo, function duplicate(n: flatMapDepthSingleTestDataObject) { return [[[n, n]]] }, 2);

  console.log('\n flatMapDepthTestDataOneRes: \n', flatMapDepthTestDataOneRes);
  console.log('\n flatMapDepthTestDataTwoRes: \n', flatMapDepthTestDataTwoRes);

  res.end(JSON.stringify({ flatMapDepthTestDataOneRes, flatMapDepthTestDataTwoRes }));
};