/* --------------------
 * @overlook/plugin-bundle module
 * ESM entry point
 * Re-export CJS with named exports
 * ------------------*/

// Exports

import bundlePlugin from '../lib/index.js';

export default bundlePlugin;
export const {
	ENTRY_FILES,
	CALLBACKS,
	BUNDLE,
	BUNDLE_ADD_ENTRY
} = bundlePlugin;
