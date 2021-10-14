import { Request, Response } from 'express';
const _ = require('lodash');

const unionTestDataOne = [1, 2, 3, 4];

/**
 * 
 * syntex: _.union([arrays])
 * 
 * Application :
   Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
*/

export const callArrayarrayUnion = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Union ---------------------');
  const unionTestDataOneRes = _.union(unionTestDataOne, [3, 4, 5]);

  console.log('\n unionTestDataOneRes: \n', unionTestDataOneRes);

  res.end(JSON.stringify({ unionTestDataOneRes }));
};  