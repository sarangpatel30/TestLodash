import { Request, Response } from 'express';
const _ = require('lodash');

interface orderBySingleTestDataObject {
  employee: string,
  salary: number
}

interface orderBySingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const orderByTestDataOne = [
  { employee: 'd', salary: 55000 },
  { employee: 'a', salary: 40000 },
  { employee: 'd', salary: 60000 },
  { employee: 'a', salary: 36000 }
]
const orderByTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.orderBy(collection, [iteratees=[_.identity]], [orders])
 * 
 * Application :
    This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by.
    If orders is unspecified, all values are sorted in ascending order.
    Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.
*/

export const callCollectionOrderBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection OrderBy ---------------------');

  // Set order based the first argument.
  const orderByTestDataOneRes = _.orderBy(orderByTestDataTwo, ['user', 'age'], ['asc', 'desc']);
  const orderByTestDataTwoRes = _.orderBy(orderByTestDataOne, ['employee', 'salary'], ['asc', 'desc']);

  console.log('\n orderByTestDataOneRes: \n', orderByTestDataOneRes);
  console.log('\n orderByTestDataTwoRes: \n', orderByTestDataTwoRes);

  res.end(JSON.stringify({ orderByTestDataOneRes, orderByTestDataTwoRes }));
};