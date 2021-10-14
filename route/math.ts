import { Router } from 'express';

import {
  callMathAdd,
  callMathCeil,
  callMathDivide,
  callMathFloor,
  callMathMax,
  callMathMaxBy,
  callMathMean,
  callMathMeanBy,
  callMathMin,
  callMathMinBy,
  callMathSum,
  callMathSumBy
} from '../controller/math';

const router = Router();

const mathAdd = (): Router =>
  router.get(
    '/add',
    callMathAdd(),
  );

const mathCeil = (): Router =>
  router.get(
    '/ceil',
    callMathCeil(),
  );

const mathDivide = (): Router =>
  router.get(
    '/divide',
    callMathDivide(),
  );

const mathFloor = (): Router =>
  router.get(
    '/floor',
    callMathFloor(),
  );

const mathMax = (): Router =>
  router.get(
    '/max',
    callMathMax(),
  );

const mathMaxBy = (): Router =>
  router.get(
    '/maxBy',
    callMathMaxBy(),
  );

const mathMean = (): Router =>
  router.get(
    '/mean',
    callMathMean(),
  );

const mathMeanBy = (): Router =>
  router.get(
    '/meanBy',
    callMathMeanBy(),
  );

const mathMin = (): Router =>
  router.get(
    '/min',
    callMathMin(),
  );

const mathMinBy = (): Router =>
  router.get(
    '/minBy',
    callMathMinBy(),
  );

const mathSum = (): Router =>
  router.get(
    '/sum',
    callMathSum(),
  );

const mathSumBy = (): Router =>
  router.get(
    '/sumBy',
    callMathSumBy(),
  );

export default (): Router =>
  router.use([
    mathAdd(),
    mathCeil(),
    mathDivide(),
    mathFloor(),
    mathMax(),
    mathMaxBy(),
    mathMean(),
    mathMeanBy(),
    mathMin(),
    mathMinBy(),
    mathSum(),
    mathSumBy()
  ]);
