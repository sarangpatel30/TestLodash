import { Request, Response } from 'express';
const _ = require('lodash');

const unionByTestDataOne = [1.1, 2.2, 3.3, 4];
const unionByTestDataTwo = [{ x: 1 }, { x: 2 }, { x: 4 }];

/**
 * 
 * syntex: _.unionBy([arrays], [iteratee=_.identity])
 * 
 * Application :
    This method is like _.union except that it accepts iteratee which is invoked for each element
    of each arrays to generate the criterion by which uniqueness is computed. Result values are
    chosen from the first array in which the value occurs. The iteratee is invoked with one argument:
    (value).
*/

export const callArrayUnionBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array UnionBy ---------------------');

  const unionTestDataOneRes = _.unionBy(unionByTestDataOne, [1, 2], Math.floor);
  const unionTestDataTwoRes = _.unionBy(unionByTestDataTwo, [{ 'x': 3 }, { 'x': 1 }], 'x');

  console.log('\n unionTestDataOneRes: \n', unionTestDataOneRes);
  console.log('\n unionTestDataTwoRes: \n', unionTestDataTwoRes);

  res.end(JSON.stringify({ unionTestDataOneRes, unionTestDataTwoRes }));
};