import { Request, Response } from 'express';
const _ = require('lodash');

const uniqWithTestDataOne = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
const uniqWithTestDataTwo = [2.2, 3.2, 4.2, 3.2, 5.2, 4.2];
const uniqWithTestDataThree = ['p', 'q', 'r', 'u', 's', 't', 'r', 'u'];

/**
 * 
 * syntex: _.uniqWith(array, [comparator])
 * 
 * Application :
    This method is like _.uniq except that it accepts comparator which is invoked to compare elements of array.
    The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal).
*/

export const callArrayUniqWith = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array UniqWith ---------------------');

  const uniqWithTestDataOneRes = _.uniqWith(uniqWithTestDataOne, _.isEqual);
  const uniqWithTestDataTwoRes = _.uniqWith(uniqWithTestDataTwo, _.isEqual);
  const uniqWithTestDataThreeRes = _.uniqWith(uniqWithTestDataThree, _.isEqual);

  console.log('\n uniqWithTestDataOneRes: \n', uniqWithTestDataOneRes);
  console.log('\n uniqWithTestDataTwoRes: \n', uniqWithTestDataTwoRes);
  console.log('\n uniqWithTestDataThreeRes: \n', uniqWithTestDataThreeRes);

  res.end(JSON.stringify({ uniqWithTestDataOneRes, uniqWithTestDataTwoRes, uniqWithTestDataThreeRes }));
};