#!/usr/bin/env node

const fs = require('node:fs');
const { name } = require('./package.json');

function main() {
	const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
	package_.xo ||= {};
	package_.xo.extends ||= [];
	if (package_.xo.extends.includes(name)) {
		return;
	}

	package_.xo.extends.push(name);
	const string = JSON.stringify(package_, null, 2) + '\n';
	fs.writeFileSync('./package.json', string, 'utf8');
}

main();
