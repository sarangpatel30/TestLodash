import { Request, Response } from 'express';
const _ = require('lodash');

interface sampleSingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const sampleTestDataOne = [1, 2, 3, 4, 5];
const sampleTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.sample(collection)
 * 
 * Application :
    Gets a random element from collection.
*/

export const callCollectionSample = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection Sample ---------------------');

  const sampleTestDataOneRes = _.sample(sampleTestDataOne);
  const sampleTestDataTwoRes = _.sample(sampleTestDataTwo);

  console.log('\n sampleTestDataOneRes: \n', sampleTestDataOneRes);
  console.log('\n sampleTestDataTwoRes: \n', sampleTestDataTwoRes);

  res.end(JSON.stringify({ sampleTestDataOneRes, sampleTestDataTwoRes }));
};