import { Request, Response } from 'express';
const _ = require('lodash');

/**
 * syntex: _.camelCase([string=''])
 * 
 * Application :
   Converts string to camel case.
*/

export const callStringCamleCase = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- String CamleCase ---------------------');

  const camleCaseTestDataOneRes = _.camelCase('Foo Bar');;
  const camleCaseTestDataTwoRes = _.camelCase('--foo-bar--');;
  const camleCaseTestDataThreeRes = _.camelCase('__FOO_BAR__');;

  console.log('\n camleCaseTestDataOneRes: \n', camleCaseTestDataOneRes);
  console.log('\n camleCaseTestDataTwoRes: \n', camleCaseTestDataTwoRes);
  console.log('\n camleCaseTestDataThreeRes: \n', camleCaseTestDataThreeRes);

  res.end(JSON.stringify({ camleCaseTestDataOneRes, camleCaseTestDataTwoRes, camleCaseTestDataThreeRes }));
};