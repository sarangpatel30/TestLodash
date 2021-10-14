import { Router } from 'express';
import array from './array';
import collection from './collection';
import math from './math';
import object from './object';
import string from './string';
import functions from './function';
import lang from './lang';

const routes = Router();


routes.use('/array', array());
routes.use('/math', math());
routes.use('/object', object());
routes.use('/string', string());
routes.use('/functions', functions());
routes.use('/lang', lang());
routes.use('/collection', collection());

export default (): Router => routes;
