import { Router } from 'express';

import {
  callArrayChunk,
  callArrayCompact,
  callArrayConcat,
  callArrayDifference,
  callArrayDifferenceBy,
  callArrayDifferenceWith,
  callArrayarrayFindIndex,
  callArrayarrayFlatten,
  callArrayarrayFromPairs,
  callArrayarrayFlattenDeep,
  callArrayIntersection,
  callArrayIntersectionBy,
  callArrayIntersectionWith,
  callArrayarrayPull,
  callArrayarrayPullAll,
  callArrayarrayPullAllBy,
  callArrayarrayPullAllWith,
  callArrayarraySortedIndex,
  callArrayarraySortedUniq,
  callArrayarraySortedUniqBy,
  callArrayarrayUnion,
  callArrayUnionBy,
  callArrayUniq,
  callArrayUniqBy,
  callArrayUniqWith,
  callArrayUnzip,
  callArrayZip,
  callArrayZipObject,
  callArrayZipObjectDeep,
  callArrayZipWith
} from '../controller/array';

const router = Router();

const arrayChunk = (): Router =>
  router.get(
    '/chunk',
    callArrayChunk(),
  );

const arrayCompact = (): Router =>
  router.get(
    '/compact',
    callArrayCompact(),
  );

const arrayConcat = (): Router =>
  router.get(
    '/concat',
    callArrayConcat(),
  );

const arrayDifference = (): Router =>
  router.get(
    '/difference',
    callArrayDifference(),
  );

const arrayDifferenceBy = (): Router =>
  router.get(
    '/differenceBy',
    callArrayDifferenceBy(),
  );

const arrayDifferenceWith = (): Router =>
  router.get(
    '/differenceWith',
    callArrayDifferenceWith(),
  );

const arrayFindIndex = (): Router =>
  router.get(
    '/findIndex',
    callArrayarrayFindIndex(),
  );

const arrayFlatten = (): Router =>
  router.get(
    '/flatten',
    callArrayarrayFlatten(),
  );

const arrayFromPairs = (): Router =>
  router.get(
    '/fromPairs',
    callArrayarrayFromPairs(),
  );

const arrayFlattenDeep = (): Router =>
  router.get(
    '/flattenDeep',
    callArrayarrayFlattenDeep(),
  );

const arrayIntersection = (): Router =>
  router.get(
    '/intersection',
    callArrayIntersection(),
  );

const arrayIntersectionBy = (): Router =>
  router.get(
    '/intersectionBy',
    callArrayIntersectionBy(),
  );

const arrayIntersectionWith = (): Router =>
  router.get(
    '/intersectionWith',
    callArrayIntersectionWith(),
  );

const arrayPull = (): Router =>
  router.get(
    '/pull',
    callArrayarrayPull(),
  );

const arrayPullAll = (): Router =>
  router.get(
    '/pullAll',
    callArrayarrayPullAll(),
  );

const arrayPullAllBy = (): Router =>
  router.get(
    '/pullAllBy',
    callArrayarrayPullAllBy(),
  );

const arrayPullAllWith = (): Router =>
  router.get(
    '/pullAllWith',
    callArrayarrayPullAllWith(),
  );

const arraySortedIndex = (): Router =>
  router.get(
    '/sortedIndex',
    callArrayarraySortedIndex(),
  );

const arraySortedUniq = (): Router =>
  router.get(
    '/sortedUniq',
    callArrayarraySortedUniq(),
  );

const arraySortedUniqBy = (): Router =>
  router.get(
    '/sortedUniqBy',
    callArrayarraySortedUniqBy(),
  );

const arrayUnion = (): Router =>
  router.get(
    '/union',
    callArrayarrayUnion(),
  );

const arrayUnionBy = (): Router =>
  router.get(
    '/unionBy',
    callArrayUnionBy(),
  );

const arrayUniq = (): Router =>
  router.get(
    '/uniq',
    callArrayUniq(),
  );

const arrayUniqBy = (): Router =>
  router.get(
    '/uniqBy',
    callArrayUniqBy(),
  );

const arrayUniqWith = (): Router =>
  router.get(
    '/uniqWith',
    callArrayUniqWith(),
  );

const arrayUnzip = (): Router =>
  router.get(
    '/unzip',
    callArrayUnzip(),
  );

const arrayZip = (): Router =>
  router.get(
    '/zip',
    callArrayZip(),
  );

const arrayZipObject = (): Router =>
  router.get(
    '/zipObject',
    callArrayZipObject(),
  );

const arrayZipObjectDeep = (): Router =>
  router.get(
    '/zipObjectDeep',
    callArrayZipObjectDeep(),
  );

const arrayZipWith = (): Router =>
  router.get(
    '/zipWith',
    callArrayZipWith(),
  );

export default (): Router =>
  router.use([
    arrayChunk(),
    arrayCompact(),
    arrayConcat(),
    arrayDifference(),
    arrayDifferenceBy(),
    arrayDifferenceWith(),
    arrayFindIndex(),
    arrayFlatten(),
    arrayFromPairs(),
    arrayFlattenDeep(),
    arrayIntersection(),
    arrayIntersectionBy(),
    arrayIntersectionWith(),
    arrayPull(),
    arrayPullAll(),
    arrayPullAllBy(),
    arrayPullAllWith(),
    arraySortedIndex(),
    arraySortedUniq(),
    arraySortedUniqBy(),
    arrayUnion(),
    arrayUnionBy(),
    arrayUniq(),
    arrayUniqBy(),
    arrayUniqWith(),
    arrayUnzip(),
    arrayZip(),
    arrayZipObject(),
    arrayZipObjectDeep(),
    arrayZipWith()
  ]);
