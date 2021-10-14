import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.floor(number, [precision=0])
 * 
 * Application :
  Computes number rounded down to precision.
*/

export const callMathFloor = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Floor ---------------------');

  const floorTestDataOneRes = _.floor(4.006);
  const floorTestDataTwoRes = _.floor(0.046, 2);
  const floorTestDataThreeRes = _.floor(4060, -2);

  console.log('\n floorTestDataOneRes: \n', floorTestDataOneRes);
  console.log('\n floorTestDataTwoRes: \n', floorTestDataTwoRes);
  console.log('\n floorTestDataThreeRes: \n', floorTestDataThreeRes);

  res.end(JSON.stringify({ floorTestDataOneRes, floorTestDataTwoRes, floorTestDataThreeRes }));
};