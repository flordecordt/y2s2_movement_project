/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"movement/y2s2movementproject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});