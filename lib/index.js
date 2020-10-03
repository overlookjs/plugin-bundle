/* --------------------
 * @overlook/plugin-bundle module
 * Entry point
 * ------------------*/

'use strict';

// Modules
const Plugin = require('@overlook/plugin'),
	{INIT_PROPS, INIT_ROUTE, INIT_CHILDREN} = require('@overlook/route'),
	{PRE_BUILD, deleteRouteProperties} = require('@overlook/plugin-build');

// Imports
const pkg = require('../package.json');

// Exports

module.exports = new Plugin(
	pkg,
	{symbols: ['ENTRY_FILES', 'CALLBACKS', 'BUNDLE', 'BUNDLE_ADD_ENTRY']},
	(Route, {ENTRY_FILES, CALLBACKS, BUNDLE, BUNDLE_ADD_ENTRY}) => class BundleRoute extends Route {
		/**
		 * Init properties.
		 * @param {Object} props - Props object
		 * @returns {undefined}
		 */
		[INIT_PROPS](props) {
			super[INIT_PROPS](props);
			this[ENTRY_FILES] = undefined;
			this[CALLBACKS] = undefined;
		}

		/**
		 * Init entry files and callbacks arrays.
		 * @param {Object} props - Props object
		 * @returns {undefined}
		 */
		async [INIT_ROUTE]() {
			await super[INIT_ROUTE]();

			this[ENTRY_FILES] = [];
			this[CALLBACKS] = new Map();
		}

		/**
		 * Bundle app
		 * @returns {undefined}
		 */
		async [INIT_CHILDREN]() {
			await super[INIT_CHILDREN]();
			await this[BUNDLE]();
		}

		/**
		 * Add entry point to bundle
		 * @param {Object} file - Entry point file
		 * @param {Function} callback - Callback function, called with output URL after bundling
		 */
		[BUNDLE_ADD_ENTRY](file, callback) {
			this[ENTRY_FILES].push(file);
			this[CALLBACKS].set(file, callback);
		}

		/**
		 * Bundle files.
		 * @returns {undefined}
		 */
		async [BUNDLE]() {
			// Bundle with Webpack
			// TODO

			// Call callbacks
			// eslint-disable-next-line no-unused-vars
			for (const [file, callback] of this[CALLBACKS].entries()) {
				// TODO
				await callback('/static/bundle.js');
			}
		}

		/**
		 * If app is built, delete properties not needed at runtime.
		 * @returns {undefined}
		 */
		async [PRE_BUILD]() {
			if (super[PRE_BUILD]) await super[PRE_BUILD]();
			deleteRouteProperties(this, [
				// Properties
				ENTRY_FILES, CALLBACKS,
				// Methods
				BUNDLE_ADD_ENTRY, BUNDLE
			]);
		}
	}
);
