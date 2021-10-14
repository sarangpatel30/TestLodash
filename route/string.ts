import { Router } from 'express';

import {
  callStringCamleCase,
  callStringCapitalize,
  callStringPad,
  callStringPadEnd,
  callStringPadStart,
  callStringParseInt,
  callStringRepeat,
  callStringReplace,
  callStringSplit,
  callStringTrim
} from '../controller/string';

const router = Router();

const stringCamleCase = (): Router =>
  router.get(
    '/camleCase',
    callStringCamleCase(),
  );

const stringCapitalize = (): Router =>
  router.get(
    '/capitalize',
    callStringCapitalize(),
  );

const stringPad = (): Router =>
  router.get(
    '/pad',
    callStringPad(),
  );

const stringPadEnd = (): Router =>
  router.get(
    '/padEnd',
    callStringPadEnd(),
  );

const stringPadStart = (): Router =>
  router.get(
    '/padStart',
    callStringPadStart(),
  );

const stringParseInt = (): Router =>
  router.get(
    '/parseInt',
    callStringParseInt(),
  );

const stringRepeat = (): Router =>
  router.get(
    '/repeat',
    callStringRepeat(),
  );

const stringReplace = (): Router =>
  router.get(
    '/replace',
    callStringReplace(),
  );

const stringSplit = (): Router =>
  router.get(
    '/split',
    callStringSplit(),
  );

const stringTrim = (): Router =>
  router.get(
    '/trim',
    callStringTrim(),
  );

export default (): Router =>
  router.use([
    stringCamleCase(),
    stringCapitalize(),
    stringPad(),
    stringPadEnd(),
    stringPadStart(),
    stringParseInt(),
    stringRepeat(),
    stringReplace(),
    stringSplit(),
    stringTrim()
  ]);
