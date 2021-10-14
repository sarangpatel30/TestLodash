import { Request, Response } from 'express';
const _ = require('lodash');

const uniqTestDataOne = [1, 2, 3, 1, 2, 7, 2];
const uniqTestDataTwo = ['a', 'b', 'd', 'a', 'c', 'b'];

/**
 * 
 * syntex: _.uniq(array)
 * 
 * Application :
    Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept.
    The order of result values is determined by the order they occur in the array.
*/

export const callArrayUniq = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Uniq ---------------------');

  const uniqTestDataOneRes = _.unionBy(uniqTestDataOne);
  const uniqTestDataTwoRes = _.unionBy(uniqTestDataTwo);

  console.log('\n uniqTestDataOneRes: \n', uniqTestDataOneRes);
  console.log('\n uniqTestDataTwoRes: \n', uniqTestDataTwoRes);

  res.end(JSON.stringify({ uniqTestDataOneRes, uniqTestDataTwoRes }));
};