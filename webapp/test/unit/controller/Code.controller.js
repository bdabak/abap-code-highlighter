/*global QUnit*/

sap.ui.define([
	"comsmodhighlightjs/highlight-code/controller/Code.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Code Controller");

	QUnit.test("I should test the Code controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
