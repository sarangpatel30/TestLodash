import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.add(augend, addend)

 * 
 * Application :
   Adds two numbers
*/

export const callMathAdd = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Math Add ---------------------');

  const addTestDataOneRes = _.add(10, 15);

  console.log('\n addTestDataOneRes: \n', addTestDataOneRes);

  res.end(JSON.stringify({ addTestDataOneRes }));
};