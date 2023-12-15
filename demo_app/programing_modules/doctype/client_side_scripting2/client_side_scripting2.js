// Copyright (c) 2023, DecodE and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting2', {
	 refresh:function(frm){

		frm.add_custom_button('Click Me',() =>{
			frappe.msgprint(_("You Clicked 1"))
		},"Click Me")

		frm.add_custom_button('Click Me',() =>{
			frappe.msgprint(_("You Click 2"))
		},'Click Me')
	 }
	
});
