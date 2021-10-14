import { Request, Response } from 'express';
const _ = require('lodash');

const differenceWithTestDataOne = [1, 2, 3];
const differenceWithTestDataTwo = [{ a: 1 }, { b: 2 }, 6];

/**
 * _.differenceWith(array, [values], [comparator])
 * 
 * Application :
    This method is like _.difference except that it accepts comparator which is invoked to compare elements
    of array to values. The order and references of result values are determined by the first array.
    The comparator is invoked with two arguments: (arrVal, othVal).

   Note:  Unlike _.pullAllWith, this method returns a new array.
*/

export const callArrayDifferenceWith = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array DifferenceWith ---------------------');
  const differenceWithTestDataOneRes = _.differenceWith(differenceWithTestDataOne, [2, 4, 5], _.isEqual);
  const differenceWithTestDataTwoRes = _.differenceWith(differenceWithTestDataTwo, [{ a: 1 }, 7, 6], _.isEqual);

  console.log('\n differenceWithTestDataOneRes: \n', differenceWithTestDataOneRes);
  console.log('\n differenceWithTestDataTwoRes: \n', differenceWithTestDataTwoRes);

  res.end(JSON.stringify({ differenceWithTestDataOneRes, differenceWithTestDataTwoRes }));
};
