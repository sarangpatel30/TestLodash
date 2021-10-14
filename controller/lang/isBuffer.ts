import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isBuffer(value)
 * 
 * Application :
    Checks if value is a buffer.
*/

export const callLangIsBuffer = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsBuffer ---------------------');

  const isBufferTestDataOneRes = _.isBuffer(new Uint8Array(2));
  const isBufferTestDataTwoRes = _.isBuffer(new Buffer(2));

  console.log("\n isBufferTestDataOneRes \n", isBufferTestDataOneRes);
  console.log("\n isBufferTestDataTwoRes \n", isBufferTestDataTwoRes);

  res.end(JSON.stringify({ isBufferTestDataOneRes, isBufferTestDataTwoRes }));
};