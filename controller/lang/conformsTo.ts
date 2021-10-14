import { Request, Response } from 'express';
const _ = require('lodash');


interface conformsToSingleTestDataObjectOne {
  a: number,
  b: number
}

interface conformsToSingleTestDataObject {
  user: string,
  age: number,
  active: boolean
}

const conformsToTestDataOne = { a: 1, b: 2 };
const conformsToTestDataTwo = [
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

export const callLangConformsTo = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang ConformsTo ---------------------');

  const conformToTestDataOneRes = _.conformsTo(conformsToTestDataOne, { 'b': function (n: number) { return n > 1; } });
  // const conformToTestDataTwoRes = _.conformsTo(conformsToTestDataTwo, { 'b': function (n: number) { return n > 1; } });

  console.log("\n conformToTestDataOneRes \n", conformToTestDataOneRes);

  res.end(JSON.stringify({ conformToTestDataOneRes, /*conformToTestDataTwoRes */ }));
};