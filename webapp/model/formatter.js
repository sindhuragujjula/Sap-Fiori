sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		 
		formatStatus : function (value) {
			if( value == "E0001") return "Draft";
			if( value == "E0002") return "In Revision"; 
			if( value == "E0003") return "Pulished";
			if( value == "E0007") return "Obsolete";
			if( value == "E0008") return "Canceled";
		},
		
		formatPriority : function (value) {
			if( value == "1") return "Very Important";
			if( value == "2") return "Important";
			if( value == "3") return "Low";
		}, 
		
		formatAuth : function (value) {
			if( value == "100010") return "Public";
			if( value == "100020") return "Internal";
			if( value == "100030") return "Confidential";
		},
		
		formatTrans : function (value) {
			if( value == "ZP4E") return "External Knowledge Article";
			if( value == "ZP4I") return "Internal Knowledge Article";
		}
	};

});