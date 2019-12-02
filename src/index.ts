#!/usr/bin/env node

'use strict';

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { SketchFile } from './sketch-file';
import * as utils from './utils';

clear();

console.log(
	chalk.white(
		figlet.textSync('morning sketchapp test cli', { horizontalLayout: 'default' })
	)
);

console.log('\n \nexecution path is: ' + process.cwd());

const questions = [{
	type: 'input',
	name: 'file',
	message: 'Wjich file to process?'
}];

inquirer.prompt(questions)
	.then(
		answers => {
			console.log('file-path is ' + answers.file);

			const file = new SketchFile(answers.file as string);

			file.ready.then(() => {
				//file.printAll();
				utils.findColors(file);
				return 0;
			});
		});
