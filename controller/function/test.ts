import { Request, Response } from 'express';
const _ = require('lodash');

const sizeTestDataOne = [1, 2, 3, 4, 5];

let testFunc = function () {
  console.log('Data');
}

export const callFunctionTest = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Function Test ---------------------');

  res.render('test', { name: 'test', testFunc: testFunc() });
};