import { Request, Response } from 'express';
const _ = require('lodash');

const countByTestDataOne = [6.1, 4.2, 6.3];
const countByTestDataTwo = ['one', 'two', 'three'];
const countByTestDataThree = [{ rating: 3, age: 18 }, { rating: 5, age: 1 }, { rating: 3, age: 18 }];

/**
 * syntex: _.countBy(collection, [iteratee=_.identity])
 * 
 * Application :
   Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
   The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).
*/

export const callCollectionCountBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection CountBy ---------------------');

  const countByTestDataOneRes = _.countBy(countByTestDataOne, Math.floor);
  const countByTestDataTwoRes = _.countBy(countByTestDataTwo, 'length');
  const countByTestDataThreeRes = _.countBy(countByTestDataThree, 'rating')

  console.log('\n countByTestDataOneRes: \n', countByTestDataOneRes);
  console.log('\n countByTestDataTwoRes: \n', countByTestDataTwoRes);
  console.log('\n countByTestDataThreeRes: \n', countByTestDataThreeRes);

  res.end(JSON.stringify({ countByTestDataOneRes, countByTestDataTwoRes, countByTestDataThreeRes }));
};