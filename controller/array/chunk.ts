import { Request, Response } from 'express';
// import _ from 'lodash';
const _ = require('lodash');


const chunkTestDataSimple = ['a', 'b', 'c', 'd'];
const chunkTestDataAdvanced = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13"];
const chunkTestKey = 3;


/**
 * usages:  I need to split a JavaScript array into n sized chunks.
 * 
 * syntex: _.chunk(array, key);
 * 
 * Application :
    Creates an array of elements split into groups the length of size.If array can't be split evenly, 
    the final chunk will be the remaining elements. 
 */
export const callArrayChunk = () => async (req: Request, res: Response): Promise<void> => {
  console.log('\n\n ------------- Array Chunk ---------------------\n');
  const simpleDataResponse = _.chunk(chunkTestDataSimple, chunkTestKey);
  const advancedDataResponse = _.chunk(chunkTestDataAdvanced, chunkTestKey);

  console.log('\n simpleDataResponse: \n', simpleDataResponse);
  console.log('\n advancedDataResponse: \n', advancedDataResponse);

  res.end(JSON.stringify({ simpleDataResponse, advancedDataResponse }));
};
