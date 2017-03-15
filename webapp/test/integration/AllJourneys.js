jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ArticleSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"ka/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ka/test/integration/pages/App",
	"ka/test/integration/pages/Browser",
	"ka/test/integration/pages/Master",
	"ka/test/integration/pages/Detail",
	"ka/test/integration/pages/Create",
	"ka/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ka.view."
	});

	sap.ui.require([
		"ka/test/integration/MasterJourney",
		"ka/test/integration/NavigationJourney",
		"ka/test/integration/NotFoundJourney",
		"ka/test/integration/BusyJourney",
		"ka/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});