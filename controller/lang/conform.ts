import { Request, Response } from 'express';
const _ = require('lodash');


interface conformsSingleTestDataObjectOne {
  a: number,
  b: number
}

interface conformsSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const conformsTestDataOne = { a: 1, b: 2 };
const conformsTestDataTwo = [
  { 'user': 'barney', 'age': 16, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1, 'active': true }
];

/**
 * syntex: _.conformsTo(object, source)
 * 
 * Application :
    Checks if object conforms to source by invoking the predicate properties of source with the 
    corresponding property values of object.

    Note: This method is equivalent to _.conforms when source is partially applied.
*/

export const callLangConforms = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang Conforms ---------------------');

  const conformTestDataOneRes = _.filter(conformsTestDataTwo, _.conforms({ 'age': function (n: number) { return n > 1; } }));

  console.log("\n conformToTestDataOneRes \n", conformTestDataOneRes);

  res.end(JSON.stringify({ conformTestDataOneRes, /*conformToTestDataTwoRes */ }));
};