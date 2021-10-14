import { Request, Response } from 'express';
const _ = require('lodash');

const invokeMapTestDataOne = [[5, 1, 7], [3, 2, 1]];
const invokeMapTestDataTwo = [628, 210];
const invokeMapTestDataThree = [
  { make: 'audi', model: 'r8', year: '2012' },
  { make: 'audi', model: 'rs5', year: '2013' },
  { make: 'ford', model: 'mustang', year: '2012' },
  { make: 'ford', model: 'fusion', year: '2015' },
  { make: 'kia', model: 'optima', year: '2012' }
];

/**
 * syntex: _.invokeMap(collection, path, [args])  
 * 
 * Application :
   Invokes the method at path of each element in collection, returning an array of the results of each invoked method.
   Any additional arguments are provided to each invoked method. 
   If path is a function, it's invoked for, and this bound to, each element in collection.
*/

export const callCollectionInvokeMap = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Collection InvokeMap ---------------------');

  const invokeMapTestDataOneRes = _.invokeMap(invokeMapTestDataOne, 'sort');
  // const invokeMapTestDataTwoRes = _.invokeMap(invokeMapTestDataTwo, );

  console.log('\n invokeMapTestDataOneRes: \n', invokeMapTestDataOneRes);
  // console.log('\n invokeMapTestDataTwoRes: \n', invokeMapTestDataTwoRes);

  res.end(JSON.stringify({ invokeMapTestDataOneRes, /*invokeMapTestDataTwoRes*/ }));
};