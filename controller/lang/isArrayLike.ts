import { Request, Response } from 'express';
const _ = require('lodash');

const isArrayLikeTestDataOne = [1, 2, 3];
const isArrayLikeTestDataTwo = 'Testing Lodash';
const isArrayLikeTestDataThree = { dir: 'left', code: 97 };
const isArrayLikeTestDataFour = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 }];

const isArrayLikeTestDataFive = () => {
  console.log('called isArrayLikeTestDataFive');
};

/**
 * syntex: _.isArrayLike(value)
 * 
 * Application :
    Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.
*/

export const callLangIsArrayLike = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsArrayLike ---------------------');

  const isArrayLikeTestDataOneRes = _.isArrayLike(isArrayLikeTestDataOne);
  const isArrayLikeTestDataTwoRes = _.isArrayLike(isArrayLikeTestDataTwo);
  const isArrayLikeTestDataThreeRes = _.isArrayLike(isArrayLikeTestDataThree);
  const isArrayLikeTestDataFourRes = _.isArrayLike(isArrayLikeTestDataFour);
  const isArrayLikeTestDataFiveRes = _.isArrayLike(isArrayLikeTestDataFive);

  console.log("\n isArrayLikeTestDataOneRes \n", isArrayLikeTestDataOneRes);
  console.log("\n isArrayLikeTestDataTwoRes \n", isArrayLikeTestDataTwoRes);
  console.log("\n isArrayLikeTestDataThreeRes \n", isArrayLikeTestDataThreeRes);
  console.log("\n isArrayLikeTestDataFourRes \n", isArrayLikeTestDataFourRes);
  console.log("\n isArrayLikeTestDataFiveRes \n", isArrayLikeTestDataFiveRes);

  res.end(JSON.stringify({ isArrayLikeTestDataOneRes, isArrayLikeTestDataTwoRes, isArrayLikeTestDataThreeRes, isArrayLikeTestDataFourRes, isArrayLikeTestDataFiveRes }));
};