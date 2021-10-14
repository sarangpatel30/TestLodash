import { Request, Response } from 'express';
const _ = require('lodash');

interface meanBySingleTestDataObject {
  dir: string,
  code: number
}

interface meanBySingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const meanByTestDataOne = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

const meanByTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 25, active: false },
  { user: 'pebbles', age: 40, active: true },
  { user: 'denis', age: 40, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.meanBy(array, [iteratee=_.identity])
 * 
 * Application :
    This method is like _.mean except that it accepts iteratee which is invoked for each
    element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value).
*/

export const callMathMeanBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math MeanBy ---------------------');

  const meanByTestDataOneRes = _.meanBy(meanByTestDataOne, function getCode(o: meanBySingleTestDataObject) { return o.code });
  const meanByTestDatatwoRes = _.meanBy(meanByTestDataTwo, 'age');

  console.log('\n meanByTestDataOneRes: \n', meanByTestDataOneRes);
  console.log('\n meanByTestDatatwoRes: \n', meanByTestDatatwoRes);

  res.end(JSON.stringify({ meanByTestDataOneRes, meanByTestDatatwoRes }));
};