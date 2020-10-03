/* --------------------
 * @overlook/plugin-bundle module
 * Tests
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	Route = require('@overlook/route'),
	bundlePlugin = require('@overlook/plugin-bundle');

// Init
require('./support/index.js');

// Tests

describe('Plugin', () => {
	it('is an instance of Plugin class', () => {
		expect(bundlePlugin).toBeInstanceOf(Plugin);
	});

	it('when passed to `Route.extend()`, returns subclass of Route', () => {
		const BundleRoute = Route.extend(bundlePlugin);
		expect(BundleRoute).toBeFunction();
		expect(BundleRoute).toBeDirectSubclassOf(Route);
	});
});
