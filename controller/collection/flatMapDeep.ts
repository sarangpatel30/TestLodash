import { Request, Response } from 'express';
const _ = require('lodash');

interface flatMapSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const flatMapDeepTestDataOne = [1, 2, 3, 4];
const flatMapDeepTestDataTwo = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

/**
 * syntex: _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
 * 
 * Application :
   This method is like _.flatMap except that it recursively flattens the mapped results.
*/

export const callCollectionFlatMapDeep = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection FlatMapDeep ---------------------');

  const flatMapDeepTestDataOneRes = _.flatMapDeep(flatMapDeepTestDataOne, function duplicate(n: number) { return [[[n, n]]] });
  const flatMapDeepTestDataTwoRes = _.flatMapDeep(flatMapDeepTestDataTwo, function duplicate(n: flatMapSingleTestDataObject) { return [[[n, n]]] });

  console.log('\n flatMapDeepTestDataOneRes: \n', flatMapDeepTestDataOneRes);
  console.log('\n flatMapDeepTestDataTwoRes: \n', flatMapDeepTestDataTwoRes);

  res.end(JSON.stringify({ flatMapDeepTestDataOneRes, flatMapDeepTestDataTwoRes }));
};