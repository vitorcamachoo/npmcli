import { join } from 'path';
import { curry } from 'ramda';
import { prompt } from 'inquirer';

import menuSkeleton from '../menus.json';
import { root, menus } from '../helper/paths';
import { runner } from '../helper/runner';
import { executeScript } from '../helper/cmd';
import { selectedChoice, loadSelectedModule } from '../helper/menu';

export const start = (MODULE) => {
	const { name } = !MODULE ? menuSkeleton[0] : { name: MODULE };
	const menuInstance = loadMenu(name);
	const menuStructure = findObject(menuSkeleton, 'name', name);
	const { menu, choices } = menuInstance;

	let selectedMenu;
	return prompt(menu)
		.then(({ menu }) => {
			selectedMenu = menu;
			return selectedChoice(choices)(menu);
		})
		.then(({ file, value }) => {
			return menuStructure.submenus ?
				loadSelectedModule(file) :
				executeScript(value);
		})
		.then(() => {
			const { file } = findObject(choices, 'value', selectedMenu);
			start(file);
		})
		.catch(console.log);
}



function loadMenu(name) {
	return require(join(menus, name));
}

function findObject(array, key, value) {
	return array.find((element) => element[key] === value);
}
