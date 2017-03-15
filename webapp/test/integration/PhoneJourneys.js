jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ka/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ka/test/integration/pages/App",
	"ka/test/integration/pages/Browser",
	"ka/test/integration/pages/Master",
	"ka/test/integration/pages/Detail",
	"ka/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ka.view."
	});

	sap.ui.require([
		"ka/test/integration/NavigationJourneyPhone",
		"ka/test/integration/NotFoundJourneyPhone",
		"ka/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});