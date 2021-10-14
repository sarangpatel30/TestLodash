import { Request, Response } from 'express';
const _ = require('lodash');

interface findSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const findTestDataOne = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false }
];
const findTestDataTwo = [1, 2, 7, 10, 13, 15];

/**
 * syntex: _.find(collection, predicate, fromIndex)
 * 
 * Application :
    Iterates over elements of collection, returning the first element predicate returns truthy for.
    The predicate is invoked with three arguments: (value, index|key, collection).
*/

export const callCollectionFind = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection Find ---------------------');

  const findTestDataOneRes = _.find(findTestDataOne, function (o: findSingleTestDataObject) { return !o.active; });
  const findTestDataTwoRes = _.find(findTestDataTwo, function (n: number) { if (n < 0) { return true } });
  const findTestDataThreeRes = _.find(findTestDataOne, ['active', false]);
  const findTestDataFourRes = _.find(findTestDataOne, 'active');

  console.log('\n findTestDataOneRes: \n', findTestDataOneRes);
  console.log('\n findTestDataTwoRes: \n', findTestDataTwoRes);
  console.log('\n findTestDataThreeRes: \n', findTestDataThreeRes);
  console.log('\n findTestDataFourRes: \n', findTestDataFourRes);

  res.end(JSON.stringify({ findTestDataOneRes, findTestDataTwoRes, findTestDataThreeRes, findTestDataFourRes }));
};