import { Request, Response } from 'express';
const _ = require('lodash');

interface groupBySingleTestDataObject {
  make: string,
  model: string,
  year: string
}

const groupByTestDataOne = [1.1, 2.2, 1.8, 2.1, 1];
const groupByTestDataTwo = [
  { model: 'r8', year: '2012' },
  { make: 'audi', model: 'rs5', year: '2013' },
  { make: 'ford', model: 'mustang', year: '2012' },
  { make: 'ford', model: 'fusion', year: '2015' },
  { make: 'kia', model: 'optima', year: '2012' }
];

/**
 * syntex: _.groupBy(collection, [iteratee=_.identity])
 * 
 * Application :
   Creates an object composed of keys generated from the results of running each element
   of collection thru iteratee. The order of grouped values is determined by the order they occur in collection.
   The corresponding value of each key is an array of elements responsible for generating the key.
   The iteratee is invoked with one argument: (value).
*/

export const callCollectionGroupBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection GroupBy ---------------------');

  const groupByTestDataOneRes = _.groupBy(groupByTestDataOne, Math.floor);
  const groupByTestDataTwoRes = _.groupBy(groupByTestDataTwo, function group(n: groupBySingleTestDataObject) { return n.make });

  console.log('\n groupByTestDataOneRes: \n', groupByTestDataOneRes);
  console.log('\n groupByTestDataTwoRes: \n', groupByTestDataTwoRes);

  res.end(JSON.stringify({ groupByTestDataOneRes, groupByTestDataTwoRes }));
};