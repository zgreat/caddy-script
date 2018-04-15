#!/usr/bin/env node
'use strict';
const meow = require('meow');

const options = [
	'add',
	'list',
	'remove',
]

const cli = meow(`
	Usage
	  $ kok add
	  $ kok list
	  $ kok remove

	Options
	  --debug, -d   Debug mode
	  --verbose, v  Verbose mode
`, {
	flags: {
		debug: {
			type: 'boolean',
			alias: 'd'
		},
		verbose: {
			type: 'boolean',
			alias: 'v'
		}
	}
});

const cmd = cli.input[0];
const flags = cli.flags;

// if cmd length>1 => error or just ignore ? should notify user

if (options.includes(cmd)) {
	// open route, pass flags
} else {
	// display help
}