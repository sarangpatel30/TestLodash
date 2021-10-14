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
 * syntex: _.isArrayLikeObject(value)
 * 
 * Application :
    This method is like _.isArrayLike except that it also checks if value is an object.
*/

export const callLangIsArrayLikeObject = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsArrayLikeObject ---------------------');

  const isArrayLikeObjectTestDataOneRes = _.isArrayLike(isArrayLikeTestDataOne);
  const isArrayLikeObjectTestDataTwoRes = _.isArrayLike(isArrayLikeTestDataTwo);
  const isArrayLikeObjectTestDataThreeRes = _.isArrayLike(isArrayLikeTestDataThree);
  const isArrayLikeObjectTestDataFourRes = _.isArrayLike(isArrayLikeTestDataFour);
  const isArrayLikeObjectTestDataFiveRes = _.isArrayLike(isArrayLikeTestDataFive);

  console.log("\n isArrayLikeObjectTestDataOneRes \n", isArrayLikeObjectTestDataOneRes);
  console.log("\n isArrayLikeObjectTestDataTwoRes \n", isArrayLikeObjectTestDataTwoRes);
  console.log("\n isArrayLikeObjectTestDataThreeRes \n", isArrayLikeObjectTestDataThreeRes);
  console.log("\n isArrayLikeObjectTestDataFourRes \n", isArrayLikeObjectTestDataFourRes);
  console.log("\n isArrayLikeObjectTestDataFiveRes \n", isArrayLikeObjectTestDataFiveRes);

  res.end(JSON.stringify({ isArrayLikeObjectTestDataOneRes, isArrayLikeObjectTestDataTwoRes, isArrayLikeObjectTestDataThreeRes, isArrayLikeObjectTestDataFourRes, isArrayLikeObjectTestDataFiveRes }));
};