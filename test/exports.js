/* --------------------
 * @overlook/plugin-bundle module
 * Tests
 * Test function to ensure all exports present
 * ------------------*/

/* eslint-disable jest/no-export */

'use strict';

// Exports

module.exports = function itExports(bundlePlugin) {
	describe('symbols', () => {
		it.each([
			'ENTRY_FILES',
			'CALLBACKS',
			'BUNDLE',
			'BUNDLE_ADD_ENTRY'
		])('%s', (key) => {
			expect(typeof bundlePlugin[key]).toBe('symbol');
		});
	});
};
