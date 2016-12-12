import { exec } from 'child_process';

const separator = '\n\n###########################################\n\n';

export function executeScript(command) {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			console.log(`${separator}${stdout}${separator}`);

			if (error) reject(error);
			else resolve();
		});
	})
}
