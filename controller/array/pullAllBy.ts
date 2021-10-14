import { Request, Response } from 'express';
const _ = require('lodash');

const pullAllByTestDataOne = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

/**
 * syntex: _.pullAllBy(array, values, [iteratee=_.identity])
 * 
 * Application :
   This method is like _.pullAll except that it accepts iteratee which is invoked for each element of
   array and values to generate the criterion by which they're compared. The iteratee is invoked with
   one argument: (value).

   Note: Unlike _.differenceBy, this method mutates array.
*/

export const callArrayarrayPullAllBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array PullAllBy ---------------------');
  const pullAllByTestDataOneRes = _.pullAllBy(pullAllByTestDataOne, [{ 'x': 1 }, { 'x': 3 }], 'x');

  console.log('\n pullAllByTestDataOneRes: \n', pullAllByTestDataOneRes);

  res.end(JSON.stringify({ pullAllByTestDataOneRes }));
};