import { Request, Response } from 'express';
const _ = require('lodash');

const sortedUniqByTestDataOne = [1.1, 1.2, 3.3, 3.4];

/**
 * ``` It's Only Aplicable to Sorted Array ```
 * 
 * syntex: _.sortedUniqBy(array, [iteratee])
 * 
 * Application :
   This method is like _.uniqBy except that it's designed and optimized for sorted arrays.
*/

export const callArrayarraySortedUniqBy = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array SortedUniqBy ---------------------');
  const sortedUniqByTestDataOneRes = _.sortedUniqBy(sortedUniqByTestDataOne, Math.floor);

  console.log('\n sortedUniqByTestDataOneRes: \n', sortedUniqByTestDataOneRes);

  res.end(JSON.stringify({ sortedUniqByTestDataOneRes }));
};