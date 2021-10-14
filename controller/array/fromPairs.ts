import { Request, Response } from 'express';
const _ = require('lodash');

const fromPairsTestDataOne = [['x', 1], ['y', 2], ['z', 3]];
const fromPairsTestDataTwo = [['one', 1], ['two', 2], ['three', 3]];
const fromPairsTestDataThree = [
  ['name', 'lodash'],
  ['live', 'npm'],
  ['used', 'nodejs']
];

/**
 * syntex: _.pull(array, [values])  
 * 
 * Application :
 * Removes all given values from array using SameValueZero for equality comparisons.
*/

export const callArrayarrayFromPairs = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array FromPairs ---------------------');
  const fromPairsTestDataOneRes = _.fromPairs(fromPairsTestDataOne);
  const fromPairsTestDataTwoRes = _.fromPairs(fromPairsTestDataTwo);
  const fromPairsTestDataThreeRes = _.fromPairs(fromPairsTestDataThree);

  console.log('\n fromPairsTestDataOneRes: \n', fromPairsTestDataOneRes);
  console.log('\n fromPairsTestDataTwoRes: \n', fromPairsTestDataTwoRes);
  console.log('\n fromPairsTestDataThreeRes: \n', fromPairsTestDataThreeRes);
  // fromPairsTestDataThreeRes

  res.end(JSON.stringify({ fromPairsTestDataOneRes, fromPairsTestDataTwoRes, fromPairsTestDataThreeRes }));
};
