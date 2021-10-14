import { Request, Response } from 'express';
const _ = require('lodash');

interface maxBySingleTestDataObject {
  dir: string,
  code: number
}

interface maxBySingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const maxByTestDataOne = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

const maxByTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 25, active: false },
  { user: 'pebbles', age: 40, active: true },
  { user: 'denis', age: 40, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.maxBy(array, [iteratee=_.identity])
 * 
 * Application :
   This method is like _.max except that it accepts iteratee which is invoked for each element in array
   to generate the criterion by which the value is ranked.
   The iteratee is invoked with one argument: (value).
*/

export const callMathMaxBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math maxBy ---------------------');

  const maxByTestDataOneRes = _.maxBy(maxByTestDataOne, function getCode(o: maxBySingleTestDataObject) { return o.code });
  // if Multiple iteraters match gives first that Match
  const maxByTestDatatwoRes = _.maxBy(maxByTestDataTwo, 'age');

  console.log('\n maxByTestDataOneRes: \n', maxByTestDataOneRes);
  console.log('\n maxByTestDatatwoRes: \n', maxByTestDatatwoRes);

  res.end(JSON.stringify({ maxByTestDataOneRes, maxByTestDatatwoRes }));
};