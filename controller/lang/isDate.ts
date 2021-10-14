import { Request, Response } from 'express';
import moment from 'moment';
const _ = require('lodash');

/**
 * syntex: _.isDate(value)
 * 
 * Application :
    Checks if value is classified as a Date object.
*/

export const callLangIsDate = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Lang IsDate ---------------------');

  const isDateTestDataOneRes = _.isDate(new Date);
  const isDateTestDataTwoRes = _.isDate('Mon April 23 2012');
  const isDateTestDataThreeRes = _.isDate(moment().format('dddd'));
  const isDateTestDataFourRes = _.isDate(moment().toDate());

  console.log("\n isDateTestDataOneRes \n", isDateTestDataOneRes);
  console.log("\n isDateTestDataTwoRes \n", isDateTestDataTwoRes);
  console.log("\n isDateTestDataThreeRes \n", isDateTestDataThreeRes);
  console.log("\n isDateTestDataFourRes \n", isDateTestDataFourRes);

  res.end(JSON.stringify({ isDateTestDataOneRes, isDateTestDataTwoRes, isDateTestDataThreeRes, isDateTestDataFourRes }));
};