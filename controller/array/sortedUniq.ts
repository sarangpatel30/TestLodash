import { Request, Response } from 'express';
const _ = require('lodash');

const sortedUniqTestDataOne = [1, 2, 2, 2, 3, 3, 4, 5];

/**
 * ``` It's Only Aplicable to Sorted Array ```
 * 
 * syntex: _.sortedUniq(array)
 * 
 * Application :
   This method is like _.uniq except that it's designed and optimized for sorted arrays.
*/

export const callArrayarraySortedUniq = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array SortedUniq ---------------------');
  const sortedUniqTestDataOneRes = _.sortedUniq(sortedUniqTestDataOne);

  console.log('\n sortedUniqTestDataOneRes: \n', sortedUniqTestDataOneRes);

  res.end(JSON.stringify({ sortedUniqTestDataOneRes }));
};