'use strict';
exports.command = 'people <command>';
exports.desc = 'Actions related to people';
exports.builder = (yargs) => {
	// yargs.positional('extra_args', {
	// 	describe: 'A string-like URL parameters with extra arguments',
	// });

	return yargs.commandDir('PEOPLE');
};
exports.handler = async () => {};
