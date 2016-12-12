import { join } from 'path';
import { menus } from './paths';

export const selectedChoice = (choices) => (answer) =>
	choices.filter(({ handler, value }) => answer === value)[0];

export const loadSelectedModule = (filename) => require(join(menus, filename));
