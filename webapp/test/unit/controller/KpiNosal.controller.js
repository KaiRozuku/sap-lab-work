/*global QUnit*/

sap.ui.define([
	"sap/btp/helloworldnosal/controller/KpiNosal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("KpiNosal Controller");

	QUnit.test("I should test the KpiNosal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
