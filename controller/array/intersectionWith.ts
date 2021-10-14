import { Request, Response } from 'express';
const _ = require('lodash');

const intersectionWithTestDataOne = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const intersectionWithTestDataTwo = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

/**
 * _.intersectionWith([arrays], [comparator])
 * 
 * Application :
    This method is like _.intersection except that it accepts comparator which is invoked
    to compare elements of arrays. The order and references of result values are determined 
    by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
*/

export const callArrayIntersectionWith = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array IntersectionWith ---------------------');
  const intersectionWithTestDataOneRes = _.intersectionWith(intersectionWithTestDataOne, intersectionWithTestDataTwo, _.isEqual);

  console.log('\n intersectionWithTestDataOneRes: \n', intersectionWithTestDataOneRes);

  res.end(JSON.stringify({ intersectionWithTestDataOneRes }));
};
