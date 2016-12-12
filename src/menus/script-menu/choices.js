import packageJson from '../../helper/package';
const { scripts } = packageJson;

export const choices = Object
	.keys(scripts)
	.map(key => ({ name: key, value: scripts[key] }));
