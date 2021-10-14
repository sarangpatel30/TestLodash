import { Request, Response } from 'express';
const _ = require('lodash');

const sortedIndexTestDataOne = [10, 20, 30, 40, 50];
const sortedIndexTestDataTwo = ['a', 'b', 'c', 'd', 'e', 'e', 'e', 'f'];
const sortedIndexTestDataThree = ['ajax', 'django', 'mongoDb', 'react', 'reactnative', 'yarn'];

/**
 * syntex: _.sortedIndex(array, value)
 * 
 * Application :
   Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order
*/

export const callArrayarraySortedIndex = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array SortedIndex ---------------------');
  const sortedIndexTestDataOneRes = _.sortedIndex(sortedIndexTestDataOne, 25);
  const sortedIndexTestDataTwoRes = _.sortedIndex(sortedIndexTestDataTwo, 'e');
  const sortedIndexTestDataThreeRes = _.sortedIndex(sortedIndexTestDataThree, 'ruby');

  console.log('\n sortedIndexTestDataOneRes: \n', sortedIndexTestDataOneRes);
  console.log('\n sortedIndexTestDataTwoRes: \n', sortedIndexTestDataTwoRes);
  console.log('\n sortedIndexTestDataThreeRes: \n', sortedIndexTestDataThreeRes);

  res.end(JSON.stringify({ sortedIndexTestDataOneRes, sortedIndexTestDataTwoRes, sortedIndexTestDataThreeRes }));
};