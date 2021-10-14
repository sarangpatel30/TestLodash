import { Router } from 'express';

import {
  callCollectionCountBy,
  callCollectionEvery,
  callCollectionFind,
  callCollectionFlatMap,
  callCollectionFlatMapDeep,
  callCollectionFlatMapDepth,
  callCollectionGroupBy,
  callCollectionIncludes,
  callCollectionInvokeMap,
  callCollectionKeyBy,
  callCollectionMap,
  callCollectionOrderBy,
  callCollectionPartition,
  callCollectionSample,
  callCollectionSampleSize,
  callCollectionSize,
  callCollectionSortBy
} from '../controller/collection';

const router = Router();

const collectionCountBy = (): Router =>
  router.get(
    '/countBy',
    callCollectionCountBy(),
  );

const collectionEvery = (): Router =>
  router.get(
    '/every',
    callCollectionEvery(),
  );

const collectionFind = (): Router =>
  router.get(
    '/find',
    callCollectionFind(),
  );

const collectionFlatMap = (): Router =>
  router.get(
    '/flatMap',
    callCollectionFlatMap(),
  );

const collectionFlatMapDeep = (): Router =>
  router.get(
    '/flatMapDeep',
    callCollectionFlatMapDeep(),
  );

const collectionFlatMapDepth = (): Router =>
  router.get(
    '/flatMapDepth',
    callCollectionFlatMapDepth(),
  );

const collectionGroupBy = (): Router =>
  router.get(
    '/groupBy',
    callCollectionGroupBy(),
  );

const collectionIncludes = (): Router =>
  router.get(
    '/includes',
    callCollectionIncludes(),
  );

const collectionInvokeMap = (): Router =>
  router.get(
    '/invokeMap',
    callCollectionInvokeMap(),
  );

const collectionKeyBy = (): Router =>
  router.get(
    '/keyBy',
    callCollectionKeyBy(),
  );

const collectionMap = (): Router =>
  router.get(
    '/map',
    callCollectionMap(),
  );

const collectionOrderBy = (): Router =>
  router.get(
    '/orderBy',
    callCollectionOrderBy(),
  );

const collectionPartition = (): Router =>
  router.get(
    '/partition',
    callCollectionPartition(),
  );

const collectionSample = (): Router =>
  router.get(
    '/sample',
    callCollectionSample(),
  );

const collectionSampleSize = (): Router =>
  router.get(
    '/sampleSize',
    callCollectionSampleSize(),
  );

const collectionSize = (): Router =>
  router.get(
    '/size',
    callCollectionSize(),
  );

const collectionSort = (): Router =>
  router.get(
    '/sort',
    callCollectionSortBy(),
  );

export default (): Router =>
  router.use([
    collectionCountBy(),
    collectionEvery(),
    collectionFind(),
    collectionFlatMap(),
    collectionFlatMapDeep(),
    collectionFlatMapDepth(),
    collectionGroupBy(),
    collectionIncludes(),
    collectionInvokeMap(),
    collectionKeyBy(),
    collectionMap(),
    collectionOrderBy(),
    collectionPartition(),
    collectionSample(),
    collectionSampleSize(),
    collectionSize(),
    collectionSort()
  ]);
