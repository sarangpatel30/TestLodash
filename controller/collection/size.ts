import { Request, Response } from 'express';
const _ = require('lodash');

interface sizeSingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const sizeTestDataOne = [1, 2, 3, 4, 5];
const sizeTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.size(collection)
 * 
 * Application :
    Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
*/

export const callCollectionSize = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection Size ---------------------');

  const sizeTestDataOneRes = _.size(sizeTestDataOne);
  const sizeTestDataTwoRes = _.size(sizeTestDataTwo);
  const sizeTestDataThreeRes = _.size('pebbles');

  console.log('\n sizeTestDataOneRes: \n', sizeTestDataOneRes);
  console.log('\n sizeTestDataTwoRes: \n', sizeTestDataTwoRes);
  console.log('\n sizeTestDataThreeRes: \n', sizeTestDataThreeRes);

  res.end(JSON.stringify({ sizeTestDataOneRes, sizeTestDataTwoRes, sizeTestDataThreeRes }));
};