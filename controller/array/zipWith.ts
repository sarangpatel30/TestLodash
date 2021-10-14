import { Request, Response } from 'express';
const _ = require('lodash');

const zipWithTestDataOne = [10, 20];
const zipWithTestDataTwo = ['Rahul', 'Ram', 'Aditya'];

/**
 * syntex: _.zipWith([arrays], [iteratee=_.identity])

 * 
 * Application :
   This method is like _.zip except that it accepts iteratee to specify 
   how grouped values should be combined. The iteratee is invoked with the elements of each group: (...group).
*/

export const callArrayZipWith = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array ZipWith ---------------------');

  const zipWithTestDataOneRes = _.zipWith(zipWithTestDataOne, [1, 2], function (a: number, b: number) { return a + b });
  const zipWithTestDataTwoRes = _.zipWith(zipWithTestDataTwo, ['Sharma', 'Kumar', 'Verma'], function (a: string, b: string) { return a + ' ' + b; });

  console.log('\n zipWithTestDataOneRes: \n', zipWithTestDataOneRes);
  console.log('\n zipWithTestDataTwoRes: \n', zipWithTestDataTwoRes);

  res.end(JSON.stringify({ zipWithTestDataOneRes, zipWithTestDataTwoRes }));
};