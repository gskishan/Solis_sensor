// Copyright (c) 2023, DecodE and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Server Side Scripting Report"] = {
	"filters": [
		{
			"fieldname": "name",
			"label":_("Server Side Scripting"),
			"fieldtype":"Link",
			"options":"Server Side Scripting"
		},
		{
			"fieldname":"dob",
			"label":_("DOB"),
			"fieldtype":"Date"
		},
		{
			"fieldname":"age",
			"label":_("Age"),
			"fieldtype":"Data"
		}
	]
};
