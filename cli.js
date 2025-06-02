#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { name, version } = require('./package.json');

function main() {
	const configPath = path.join(process.cwd(), 'xo.config.js');
	
	try {
		// Check if xo.config.js already exists
		if (fs.existsSync(configPath)) {
			console.log('xo.config.js already exists. Please manually add the config:');
			console.log(`\nconst xoOverrides = require('${name}');\n`);
			console.log('Then spread it in your config array or use it directly.');
			return;
		}

		// Create xo.config.js for flat config
		const configContent = `const xoOverrides = require('${name}');

module.exports = xoOverrides;
`;

		fs.writeFileSync(configPath, configContent, 'utf8');
		console.log(`✨ Created xo.config.js with ${name} v${version} (flat config format)`);
		
		// Check if package.json has legacy xo config
		try {
			const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
			if (package_.xo?.extends?.includes(name)) {
				console.log('\n⚠️  Warning: Found legacy config in package.json.');
				console.log('You should remove the "xo" field from package.json when using flat config.');
			}
		} catch (error) {
			console.error('Error reading package.json:', error.message);
			process.exit(1);
		}
	} catch (error) {
		console.error('Error creating xo.config.js:', error.message);
		process.exit(1);
	}
}

main();
