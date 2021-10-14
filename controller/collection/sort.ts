import { Request, Response } from 'express';
const _ = require('lodash');

interface sortSingleTestDataObject {
  employee: string,
  salary: number
}

interface sortSingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const sortTestDataOne = [
  { employee: 'd', salary: 55000 },
  { employee: 'a', salary: 40000 },
  { employee: 'd', salary: 60000 },
  { employee: 'a', salary: 36000 }
]
const sortTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.sortBy(collection, [iteratees=[_.identity]])
 * 
 * Application :
   Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. 
   This method performs a stable sort, that is, it preserves the original sort order of equal elements. 
   The iteratees are invoked with one argument: (value).
*/

export const callCollectionSortBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection SortBy ---------------------');

  const sortTestDataOneRes = _.sortBy(sortTestDataTwo, [function sortByName(o: sortSingleTestDataObjectTwo) { return o.user }]);
  const sortTestDataTwoRes = _.sortBy(sortTestDataOne, ['employee', 'salary'], ['asc', 'desc']);

  console.log('\n sortTestDataOneRes: \n', sortTestDataOneRes);
  console.log('\n sortTestDataTwoRes: \n', sortTestDataTwoRes);

  res.end(JSON.stringify({ sortTestDataOneRes, sortTestDataTwoRes }));
};