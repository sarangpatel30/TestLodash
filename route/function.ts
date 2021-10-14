import { Router } from 'express';

import {
  callFunctionTest
} from '../controller/function';

const router = Router();

const functionTest = (): Router =>
  router.get(
    '/test',
    callFunctionTest(),
  );

export default (): Router =>
  router.use([
    functionTest()
  ]);
