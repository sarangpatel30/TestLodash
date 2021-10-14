import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.gt(value, other)
 * 
 * Application :
    Checks if value is greater than other.
*/

export const callLangGt = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang Gt ---------------------');

  const gtTestDataOneRes = _.gt(3, 1);
  const gtTestDataTwoRes = _.gt(3, 3);
  const gtTestDataThreeRes = _.gt(1, 3);
  const gtTestDataFourRes = _.gt('3', 1);
  const gtTestDataFiveRes = _.gt('1', '3');

  console.log("\n gtTestDataOneRes \n", gtTestDataOneRes);
  console.log("\n gtTestDataTwoRes \n", gtTestDataTwoRes);
  console.log("\n gtTestDataThreeRes \n", gtTestDataThreeRes);
  console.log("\n gtTestDataFourRes \n", gtTestDataFourRes);
  console.log("\n gtTestDataFiveRes \n", gtTestDataFiveRes);

  res.end(JSON.stringify({ gtTestDataOneRes, gtTestDataTwoRes, gtTestDataThreeRes, gtTestDataFourRes, gtTestDataFiveRes }));
};