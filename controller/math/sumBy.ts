import { Request, Response } from 'express';
const _ = require('lodash');

interface sumBySingleTestDataObject {
  dir: string,
  code: number
}

interface sumBySingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const sumByTestDataOne = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

const sumByTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 25, active: false },
  { user: 'pebbles', age: 40, active: true },
  { user: 'denis', age: 40, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.sumBy(array, [iteratee=_.identity])
 * 
 * Application :
    This method is like _.sum except that it accepts iteratee which is invoked for each element in array to generate the value to be summed. 
    The iteratee is invoked with one argument: (value).
*/

export const callMathSumBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math SumBy ---------------------');

  const sumByTestDataOneRes = _.sumBy(sumByTestDataOne, function getCode(o: sumBySingleTestDataObject) { return o.code });
  const sumByTestDatatwoRes = _.sumBy(sumByTestDataTwo, 'age');

  console.log('\n sumByTestDataOneRes: \n', sumByTestDataOneRes);
  console.log('\n sumByTestDatatwoRes: \n', sumByTestDatatwoRes);

  res.end(JSON.stringify({ sumByTestDataOneRes, sumByTestDatatwoRes }));
};