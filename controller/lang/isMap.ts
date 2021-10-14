import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isMap(value)
 * 
 * Application :
    Checks if value is classified as a Map object.
*/

export const callLangIsMap = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsMap ---------------------');

  const isMapTestDataOneRes = _.isMap(new Map);;
  const isMapTestDataTwoRes = _.isMap(new WeakMap);

  console.log("\n isMapTestDataOneRes \n", isMapTestDataOneRes);
  console.log("\n isMapTestDataTwoRes \n", isMapTestDataTwoRes);

  res.end(JSON.stringify({ isMapTestDataOneRes, isMapTestDataTwoRes }));
};