/* --------------------
 * @overlook/plugin-bundle module
 * Tests
 * ESM export
 * ------------------*/

// Modules
import Plugin from '@overlook/plugin';
import bundlePlugin, * as namedExports from '@overlook/plugin-bundle/es';

// Imports
import itExports from './exports.js';

// Tests

describe('ESM export', () => {
	it('default export is an instance of Plugin class', () => {
		expect(bundlePlugin).toBeInstanceOf(Plugin);
	});

	describe('default export has properties', () => {
		itExports(bundlePlugin);
	});

	describe('named exports', () => {
		itExports(namedExports);
	});
});
