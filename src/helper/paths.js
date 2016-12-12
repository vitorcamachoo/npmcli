import { resolve, join } from 'path';
import { curry } from 'ramda';

const concatPath = (basedir) => (path) => join(basedir, path);
const pathHelper = concatPath(__dirname);

const root = pathHelper('..');
const menus = pathHelper('../menus');
const helper = pathHelper('../helper');
const builder = pathHelper('../builder');

export { root, menus, helper, builder };
