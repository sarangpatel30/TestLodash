import { Request, Response } from 'express';
const _ = require('lodash');

const uniqByTestDataOne = [2.1, 1.2, 2.3];
const uniqByTestDataTwo = [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }];

/**
 * 
 * syntex: _.uniqBy(array, [iteratee=_.identity])
 * 
 * Application :
    This method is like _.uniq except that it accepts iteratee which is invoked for each element in array to generate the criterion by which uniqueness is computed.
    The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:
*/

export const callArrayUniqBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array UniqBy ---------------------');

  const uniqByTestDataOneRes = _.uniqBy(uniqByTestDataOne, Math.floor);
  const uniqByTestDataTwoRes = _.uniqBy(uniqByTestDataTwo, 'x');

  console.log('\n uniqByTestDataOneRes: \n', uniqByTestDataOneRes);
  console.log('\n uniqByTestDataTwoRes: \n', uniqByTestDataTwoRes);

  res.end(JSON.stringify({ uniqByTestDataOneRes, uniqByTestDataTwoRes }));
};