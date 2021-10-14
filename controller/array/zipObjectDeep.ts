import { Request, Response } from 'express';
const _ = require('lodash');

const zipObjectDeepTestDataOne = ['a.b[0].c', 'a.b[1].d'];;
const zipObjectDeepTestDataTwo = ['a', 'g', 'h', 'b', 'c', 'd', 'e', 'f'];
const zipObjectDeepTestDataThree = [1, 2, 3, 4, 5, 6, 7];

/**
 * syntex: _.zipObjectDeep([props=[]], [values=[]])
 * 
 * Application :
   This method is like _.zipObject except that it supports property paths.
*/

export const callArrayZipObjectDeep = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array ZipObjectDeep ---------------------');

  const zipObjectDeepTestDataOneRes = _.zipObjectDeep(zipObjectDeepTestDataOne, [1, 2]);
  const zipObjectDeepTestDataTwoRes = _.zipObjectDeep(zipObjectDeepTestDataTwo, zipObjectDeepTestDataThree);
  const zipObjectDeepTestDataThreeRes = _.zipObjectDeep([10, 20, 30], [1, 2, 3]);

  console.log('\n ZipObjectDeepTestDataOneRes: \n', zipObjectDeepTestDataOneRes);
  console.log('\n ZipObjectDeepTestDataTwoRes: \n', zipObjectDeepTestDataTwoRes);
  console.log('\n ZipObjectDeepTestDataThreeRes: \n', zipObjectDeepTestDataThreeRes);

  res.end(JSON.stringify({ zipObjectDeepTestDataOneRes, zipObjectDeepTestDataTwoRes, zipObjectDeepTestDataThreeRes }));
};