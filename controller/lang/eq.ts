import { Request, Response } from 'express';
const _ = require('lodash');


interface eqSingleTestDataObjectOne {
  a: number,
  b: number
}

interface eqSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const eqTestDataOne = { a: 1, b: 2 };
const eqTestDataTwo = [
  { 'user': 'barney', 'age': 16, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

/**
 * syntex: _.eq(value, other)
 * 
 * Application :
    Performs a SameValueZero comparison between two values to determine if they are equivalent.
*/

export const callLangEq = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang Eq ---------------------');

  const eqTestDataOneRes = _.eq(eqTestDataOne, eqTestDataOne);
  const eqTestDataTwoRes = _.eq(eqTestDataTwo, eqTestDataTwo);
  const eqTestDataThreeRes = _.eq(null, null);
  const eqTestDataFourRes = _.eq('a', Object('a'));
  const eqTestDataFiveRes = _.eq('a', 'a');

  console.log("\n eqTestDataOneRes \n", eqTestDataOneRes);
  console.log("\n eqTestDataTwoRes \n", eqTestDataTwoRes);
  console.log("\n eqTestDataThreeRes \n", eqTestDataThreeRes);
  console.log("\n eqTestDataFourRes \n", eqTestDataFourRes);
  console.log("\n eqTestDataFiveRes \n", eqTestDataFiveRes);

  res.end(JSON.stringify({ eqTestDataOneRes, eqTestDataTwoRes, eqTestDataThreeRes, eqTestDataFourRes, eqTestDataFiveRes }));
};