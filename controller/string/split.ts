import { Request, Response } from 'express';
const _ = require('lodash');

const splitTestDataOne = 'Test-Lodash-Test';

/**
 * syntex: _.split([string=''], separator, [limit])
 * 
 * Application :
   Splits string by separator.

    Note: This method is based on String#split.
*/

export const callStringSplit = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String Split ---------------------');

  const splitTestDataOneRes = _.split(splitTestDataOne, '-');
  const splitTestDataTwoRes = _.split(splitTestDataOne, '-', 2);

  console.log('\n splitTestDataOneRes: \n', splitTestDataOneRes);
  console.log('\n splitTestDataTwoRes: \n', splitTestDataTwoRes);

  res.end(JSON.stringify({ splitTestDataOneRes, splitTestDataTwoRes }));
};