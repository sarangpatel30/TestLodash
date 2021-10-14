import { Request, Response } from 'express';
const _ = require('lodash');

interface sampleSizeSingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const sampleSizeTestDataOne = [1, 2, 3, 4, 5];
const sampleSizeTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.sampleSize(collection, [n=1])
 * 
 * Application :
    Gets n random elements at unique keys from collection up to the size of collection.
*/

export const callCollectionSampleSize = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection SampleSize ---------------------');

  const sampleSizeTestDataOneRes = _.sampleSize(sampleSizeTestDataOne, 3);
  const sampleSizeTestDataTwoRes = _.sampleSize(sampleSizeTestDataOne, 8);
  const sampleSizeTestDataThreeRes = _.sampleSize(sampleSizeTestDataTwo, 3);

  console.log('\n sampleSizeTestDataOneRes: \n', sampleSizeTestDataOneRes);
  console.log('\n sampleSizeTestDataTwoRes: \n', sampleSizeTestDataTwoRes);
  console.log('\n sampleSizeTestDataThreeRes: \n', sampleSizeTestDataThreeRes);

  res.end(JSON.stringify({ sampleSizeTestDataOneRes, sampleSizeTestDataTwoRes, sampleSizeTestDataThreeRes }));
};