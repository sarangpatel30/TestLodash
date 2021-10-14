import { Request, Response } from 'express';
const _ = require('lodash');

interface minBySingleTestDataObject {
  dir: string,
  code: number
}

interface minBySingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const minByTestDataOne = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

const minByTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 25, active: false },
  { user: 'pebbles', age: 40, active: true },
  { user: 'denis', age: 40, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.minBy(array, [iteratee=_.identity])
 * 
 * Application :
    This method is like _.min except that it accepts iteratee which is invoked for each
    element in array to generate the value to be averaged. The iteratee is invoked with one argument: (value).
*/

export const callMathMinBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math MinBy ---------------------');

  const minByTestDataOneRes = _.minBy(minByTestDataOne, function getCode(o: minBySingleTestDataObject) { return o.code });
  // returns First Element That Match iteration
  const minByTestDatatwoRes = _.minBy(minByTestDataTwo, 'age');

  console.log('\n minByTestDataOneRes: \n', minByTestDataOneRes);
  console.log('\n minByTestDatatwoRes: \n', minByTestDatatwoRes);

  res.end(JSON.stringify({ minByTestDataOneRes, minByTestDatatwoRes }));
};