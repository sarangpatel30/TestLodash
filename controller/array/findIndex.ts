import { Request, Response } from 'express';
const _ = require('lodash');

const findIndexTestDataOne = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true }
]

/**
 * syntex: _.findIndex(array, [predicate=_.identity], [fromIndex=0])
 * 
 * Application :
 * This method is like _.find except that it returns the index of the first element
   predicate returns truthy for instead of the element itself.
*/

// Same usage of findLastIndex

export const callArrayarrayFindIndex = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array FindIndex ---------------------');
  const findIndexTestDataOneRes = _.findIndex(findIndexTestDataOne, function (o: any) { return o.user == 'barney'; });
  const findIndexTestDataTwoRes = _.findIndex(findIndexTestDataOne, { 'user': 'fred', 'active': false });
  const findIndexTestDataThreeRes = _.findIndex(findIndexTestDataOne, ['active', false]);
  const findIndexTestDataFourRes = _.findIndex(findIndexTestDataOne, 'active');


  console.log('\n findIndexTestDataOneRes: \n', findIndexTestDataOneRes);
  console.log('\n findIndexTestDataTwoRes: \n', findIndexTestDataTwoRes);
  console.log('\n findIndexTestDataThreeRes: \n', findIndexTestDataThreeRes);
  console.log('\n findIndexTestDataFourRes: \n', findIndexTestDataFourRes);

  res.end(JSON.stringify({ findIndexTestDataOneRes, findIndexTestDataTwoRes, findIndexTestDataThreeRes, findIndexTestDataFourRes }));
};
