'use strict';

// Command configuration
exports.command = 'get [id] [name] [extra_args]';

exports.describe = 'Get all people';

exports.builder = (yargs) => {
	return yargs
		.positional('id', {
			type: 'integer',
			describe: 'The id of an existing people',
		})
		.positional('name', {
			type: 'string',
			describe: 'The name of an existing people.',
		})
		.positional('extra_args', {
			describe: 'A string-like URL parameters with extra arguments',
		});
};

exports.handler = async (argv) => {
	if (typeof argv.extra_args !== 'undefined' && argv.extra_args) {
		console.log(`The optional argument is: ${argv.extra_args}`);
	}

	console.log('REACHED THE END');
};
