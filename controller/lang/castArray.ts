import { Request, Response } from 'express';
const _ = require('lodash');

const castArrayTestDataOne = 6.1;
const castArrayTestDataTwo = 'one';
const castArrayTestDataThree = { rating: 3, age: 18 };

/**
 * syntex: _.castArray(value)
 * 
 * Application :
    Casts value as an array if it's not one.
*/

export const callLangCastArray = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang CastArray ---------------------');

  const castArrayTestDataOneRes = _.castArray(castArrayTestDataOne);
  const castArrayTestDataTwoRes = _.castArray(castArrayTestDataTwo);
  const castArrayTestDataThreeRes = _.castArray(null);
  const castArrayTestDataFourRes = _.castArray(undefined);
  const castArrayTestDataFiveRes = _.castArray(castArrayTestDataThree);

  console.log('\n castArrayTestDataOneRes: \n', castArrayTestDataOneRes);
  console.log('\n castArrayTestDataTwoRes: \n', castArrayTestDataTwoRes);
  console.log('\n castArrayTestDataThreeRes: \n', castArrayTestDataThreeRes);
  console.log('\n castArrayTestDataFourRes: \n', castArrayTestDataFourRes);
  console.log('\n castArrayTestDataFiveRes: \n', castArrayTestDataFiveRes);

  res.end(JSON.stringify({ castArrayTestDataOneRes, castArrayTestDataTwoRes, castArrayTestDataThreeRes, castArrayTestDataFourRes, castArrayTestDataFiveRes }));
};