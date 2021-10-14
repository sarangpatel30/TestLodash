import { Request, Response } from 'express';
const _ = require('lodash');

const compactTestDataOne = [0, 1, false, 2, '', 3];
const compactTestDataTwo = [0, false, '', undefined, NaN];
const compactTestDataThree = [false, 'HTML', NaN, 'CSS', 'undefined'];
const compactTestDataFour = [false, true, 'yes', 'no', "no2"];

/**
 * usages:  I need to remove the unnecessary data from array.
 * 
 * syntex: _.compact(array);
 * 
 * Application :
   Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
 */

export const callArrayCompact = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Compact ---------------------');
  const compactTestDataOneRes = _.compact(compactTestDataOne);
  const compactTestDataTwoRes = _.compact(compactTestDataTwo);
  const compactTestDataThreeRes = _.compact(compactTestDataThree);
  const compactTestDataFourRes = _.compact(compactTestDataFour);


  console.log('\n compactTestDataOneRes: \n', compactTestDataOneRes);
  console.log('\n compactTestDataTwoRes: \n', compactTestDataTwoRes);
  console.log('\n compactTestDataThreeRes: \n', compactTestDataThreeRes);
  console.log('\n compactTestDataFourRes: \n', compactTestDataFourRes);

  res.end(JSON.stringify({ compactTestDataOneRes, compactTestDataTwoRes, compactTestDataThreeRes, compactTestDataFourRes }));
};
