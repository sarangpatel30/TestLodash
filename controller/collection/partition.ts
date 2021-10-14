import { Request, Response } from 'express';
const _ = require('lodash');

interface partitionSingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const partitionTestDataOne = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.partition(collection, [predicate=_.identity])
 * 
 * Application :
    Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, 
    the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).
*/

export const callCollectionPartition = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection Partition ---------------------');

  const partitionTestDataOneRes = _.partition(partitionTestDataOne, function activeFound(o: partitionSingleTestDataObjectTwo) { return o.active });
  const partitionTestDataTwoRes = _.partition(partitionTestDataOne, ['active', false]);
  const partitionTestDataThreeRes = _.partition(partitionTestDataOne, 'active');
  const partitionTestDataFourRes = _.partition(partitionTestDataOne, function ageFound(o: partitionSingleTestDataObjectTwo) { return o.age > 18 });

  console.log('\n partitionTestDataOneRes: \n', partitionTestDataOneRes);
  console.log('\n partitionTestDataTwoRes: \n', partitionTestDataTwoRes);
  console.log('\n partitionTestDataThreeRes: \n', partitionTestDataThreeRes);
  console.log('\n partitionTestDataFourRes: \n', partitionTestDataFourRes);

  res.end(JSON.stringify({ partitionTestDataOneRes, partitionTestDataTwoRes, partitionTestDataThreeRes, partitionTestDataFourRes }));
};