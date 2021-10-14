import { Request, Response } from 'express';
const _ = require('lodash');

const assignTestDataOne = { a: 10, b: 20, c: 30 };
const assignTestDataTwo = { a: 15, d: 25, c: 36 };
const assignTestDataThree = { a: 20, e: 5, f: 66 };

/**
 * syntex: _.assign( dest_object, src_obj )
 * 
 * Application :
   Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

   Note: This method mutates object and is loosely based on Object.assign.
*/

export const callObjectAssign = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Object Assign ---------------------');

  const assignTestDataOneRes = _.assign(assignTestDataOne, assignTestDataTwo);
  const assignTestDatatwoRes = _.assign(assignTestDataOne, assignTestDataThree);
  const assignTestDataThreeRes = _.assign(assignTestDataOne, assignTestDataTwo, assignTestDataThree);

  console.log('\n assignTestDataOneRes: \n', assignTestDataOneRes);
  console.log('\n assignTestDatatwoRes: \n', assignTestDatatwoRes);
  console.log('\n assignTestDataThreeRes: \n', assignTestDataThreeRes);

  res.end(JSON.stringify({ assignTestDataOneRes, assignTestDatatwoRes, assignTestDataThreeRes }));
};