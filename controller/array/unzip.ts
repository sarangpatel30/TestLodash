import { Request, Response } from 'express';
const _ = require('lodash');

const unzipTestDataOne = [['Akash', 2, 'pass'], ['Amit', 2, 'pass'], ['Aviral', 3, 'fail']];
const unzipTestDataTwo = [['Akash', 'Amit', 'Aviral'], [1, 2, 3], ['pass', 'pass', 'fail']];
const unzipTestDataThree = [['Akash', 1, 5999], ['*', 2, 'pass'], ['!', '@', 3222], ['?', '>', '<', ';']];

/**
 * syntex: _.unzip(array)
 * 
 * Application :
   This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.
*/

export const callArrayUnzip = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Unzip ---------------------');

  const unzipTestDataOneRes = _.unzip(unzipTestDataOne);
  const unzipTestDataTwoRes = _.unzip(unzipTestDataTwo);
  const unzipTestDataThreeRes = _.unzip(unzipTestDataThree);

  console.log('\n unzipTestDataOneRes: \n', unzipTestDataOneRes);
  console.log('\n unzipTestDataTwoRes: \n', unzipTestDataTwoRes);
  console.log('\n unzipTestDataThreeRes: \n', unzipTestDataThreeRes);

  res.end(JSON.stringify({ unzipTestDataOneRes, unzipTestDataTwoRes, unzipTestDataThreeRes }));
};