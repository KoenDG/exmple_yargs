'use strict';

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const init = async () => {
		await yargs(hideBin(process.argv)).commandDir('COMMANDS').demandCommand().help().argv;
};

(async () => await init())().catch((e) => console.error(`${e}`));
