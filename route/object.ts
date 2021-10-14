import { Router } from 'express';

import {
  callObjectAssign
} from '../controller/object';

const router = Router();

const objectAssign = (): Router =>
  router.get(
    '/assign',
    callObjectAssign(),
  );

export default (): Router =>
  router.use([
    objectAssign()
  ]);
