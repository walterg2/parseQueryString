/*!
 * Parse Query String v 0.1
 *
 * Copyright 2011, George Walters II
 * Licensed under MIT Version 2
 *
 * Date: Fri Aug 19 2011 8:58 AM -0500
 */
var parseQueryString = (function () {
	"use strict";
	var params = {},
		qs = location.search.substring(1, location.search.length),
		i = 0,
		args,
		pair,
		name,
		value,
		getKeys = function () {
			var keys = [],
				key;
			for (key in params) {
				if (typeof key === "string") {
					keys.push(key);
				}
			}
			return keys;
		},
		getValue = function (key, defaultText) {
			var value = params[key];
			return (value !== null) ? value : defaultText;
		},
		contains = function (key) {
			window.console.log("Key Exists: " + params[key]);
			return (params[key] !== undefined);
		};

	if (qs.length > 0) {
		// Turn <plus> back to <space>
		// See:
		// http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.13.4.1
		qs = qs.replace(/\+/g, ' ');
		// parse out name/value pairs separated via &
		args = qs.split('&');
		// split out each name=value pair
		for (i = 0; i < args.length; i = i + 1) {
			pair = args[i].split('=');
			name = decodeURIComponent(pair[0]);
			value = (pair.length === 2) ? decodeURIComponent(pair[1]) : null;
			params[name] = value;
		}
	}
	
	return {
		getKeys: getKeys,
		getValue: getValue,
		contains: contains
	};
}());
