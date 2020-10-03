/* --------------------
 * @overlook/plugin-bundle module
 * Tests
 * CJS export
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	bundlePlugin = require('@overlook/plugin-bundle');

// Imports
const itExports = require('./exports.js');

// Tests

describe('CJS export', () => {
	it('is an instance of Plugin class', () => {
		expect(bundlePlugin).toBeInstanceOf(Plugin);
	});

	describe('has properties', () => {
		itExports(bundlePlugin);
	});
});
