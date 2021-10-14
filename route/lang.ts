import { Router } from 'express';

import {
  callLangCastArray,
  callLangClone,
  callLangCloneDeep,
  callLangConformsTo,
  callLangConforms,
  callLangEq,
  callLangGt,
  callLangIsArray,
  callLangIsArrayLike,
  callLangIsArrayLikeObject,
  callLangIsBoolean,
  callLangIsBuffer,
  callLangIsDate,
  callLangIsElement,
  callLangIsEmpty,
  callLangIsEqual,
  callLangIsError,
  callLangIsFunction,
  callLangIsLength,
  callLangIsMap,
  callLangIsMatch,
  callLangIsObject
} from '../controller/lang';

const router = Router();

const langCastArray = (): Router =>
  router.get(
    '/castArray',
    callLangCastArray(),
  );

const langClone = (): Router =>
  router.get(
    '/clone',
    callLangClone(),
  );

const langCloneDeep = (): Router =>
  router.get(
    '/cloneDeep',
    callLangCloneDeep(),
  );

const langConforms = (): Router =>
  router.get(
    '/conforms',
    callLangConforms(),
  );

const langConformsTo = (): Router =>
  router.get(
    '/conformsTo',
    callLangConformsTo(),
  );

const langEq = (): Router =>
  router.get(
    '/eq',
    callLangEq(),
  );

const langGt = (): Router =>
  router.get(
    '/gt',
    callLangGt(),
  );

const langIsArray = (): Router =>
  router.get(
    '/isArray',
    callLangIsArray(),
  );

const langIsArrayLike = (): Router =>
  router.get(
    '/isArrayLike',
    callLangIsArrayLike(),
  );

const langIsArrayLikeObject = (): Router =>
  router.get(
    '/isArrayLikeObject',
    callLangIsArrayLikeObject(),
  );

const langIsBoolean = (): Router =>
  router.get(
    '/isBoolean',
    callLangIsBoolean(),
  );

const langIsBuffer = (): Router =>
  router.get(
    '/isBuffer',
    callLangIsBuffer(),
  );

const langIsDate = (): Router =>
  router.get(
    '/isDate',
    callLangIsDate(),
  );

const langIsElement = (): Router =>
  router.get(
    '/isElement',
    callLangIsElement(),
  );

const langIsEmpty = (): Router =>
  router.get(
    '/isEmpty',
    callLangIsEmpty(),
  );

const langIsEqual = (): Router =>
  router.get(
    '/isEqual',
    callLangIsEqual(),
  );

const langIsError = (): Router =>
  router.get(
    '/isError',
    callLangIsError(),
  );

const langIsFunction = (): Router =>
  router.get(
    '/isFunction',
    callLangIsFunction(),
  );

const langIsLength = (): Router =>
  router.get(
    '/isLength',
    callLangIsLength(),
  );

const langIsMap = (): Router =>
  router.get(
    '/isMap',
    callLangIsMap(),
  );

const langIsMatch = (): Router =>
  router.get(
    '/isMatch',
    callLangIsMatch(),
  );

const langIsObject = (): Router =>
  router.get(
    '/isObject',
    callLangIsObject(),
  );

export default (): Router =>
  router.use([
    langCastArray(),
    langClone(),
    langCloneDeep(),
    langConforms(),
    langConformsTo(),
    langEq(),
    langGt(),
    langIsArray(),
    langIsArrayLike(),
    langIsArrayLikeObject(),
    langIsBoolean(),
    langIsBuffer(),
    langIsDate(),
    langIsElement(),
    langIsEmpty(),
    langIsEqual(),
    langIsError(),
    langIsFunction(),
    langIsLength(),
    langIsMap(),
    langIsMatch(),
    langIsObject()
  ]);
