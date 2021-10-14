import { Request, Response } from 'express';
const _ = require('lodash');

interface keyBySingleTestDataObject {
  dir: string,
  code: number
}

interface keyBySingleTestDataObjectTwo {
  user: string,
  age: number,
  active: boolean
}

const keyByTestDataOne = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

const keyByTestDataTwo = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 18, active: true },
  { user: 'denis', age: 36, active: true },
  { user: 'uni', age: 18, active: true }
];

/**
 * syntex: _.keyBy(collection, [iteratee=_.identity])
 * 
 * Application :
    Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 
    The corresponding value of each key is the last element responsible for generating the key. 
    The iteratee is invoked with one argument: (value).
*/

export const callCollectionKeyBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection KeyBy ---------------------');

  const keyByTestDataOneRes = _.keyBy(keyByTestDataOne, function (o: keyBySingleTestDataObject) { return String.fromCharCode(o.code) });
  const keyByTestDatatwoRes = _.keyBy(keyByTestDataOne, 'dir');
  // dosen't use while these type of Data is there. it's overright the values on single keys.
  const keyByTestDataThreeRes = _.keyBy(keyByTestDataTwo, function (o: keyBySingleTestDataObjectTwo) { return o.age });

  console.log('\n keyByTestDataOneRes: \n', keyByTestDataOneRes);
  console.log('\n keyByTestDatatwoRes: \n', keyByTestDatatwoRes);
  console.log('\n keyByTestDataThreeRes: \n', keyByTestDataThreeRes);

  res.end(JSON.stringify({ keyByTestDataOneRes, keyByTestDatatwoRes, keyByTestDataThreeRes }));
};