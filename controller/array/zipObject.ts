import { Request, Response } from 'express';
const _ = require('lodash');

const zipObjectTestDataOne = [1, 2, 3];
const zipObjectTestDataTwo = ['a', 'b', 'd'];

/**
 * syntex: _.zipObject([props=[]], [values=[]])
 * 
 * Application :
   This method is like _.fromPairs except that it accepts two arrays,
   one of property identifiers and one of corresponding values.
*/

export const callArrayZipObject = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array ZipObject ---------------------');

  const zipObjectTestDataOneRes = _.zipObject(zipObjectTestDataOne, zipObjectTestDataTwo);
  const zipObjectTestDataTwoRes = _.zipObject(zipObjectTestDataOne, [...zipObjectTestDataTwo, 'c']);
  const zipObjectTestDataThreeRes = _.zipObject([...zipObjectTestDataOne, 4], zipObjectTestDataTwo);

  console.log('\n zipObjectTestDataOneRes: \n', zipObjectTestDataOneRes);
  console.log('\n zipObjectTestDataTwoRes: \n', zipObjectTestDataTwoRes);
  console.log('\n zipObjectTestDataThreeRes: \n', zipObjectTestDataThreeRes);

  res.end(JSON.stringify({ zipObjectTestDataOneRes, zipObjectTestDataTwoRes, zipObjectTestDataThreeRes }));
};