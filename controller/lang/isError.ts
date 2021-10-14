import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.isError(value)
 * 
 * Application :
    Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.
*/

export const callLangIsError = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsError ---------------------');

  const isErrorTestDataOneRes = _.isError(new Error);

  console.log("\n isErrorTestDataOneRes \n", isErrorTestDataOneRes);

  res.end(JSON.stringify({ isErrorTestDataOneRes }));
};