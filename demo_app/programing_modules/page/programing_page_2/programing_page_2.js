frappe.pages['programing-page-2'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page 2',
		single_column: true
	});

	page.set_title("My Page 2")
	page.set_indicator("Done", "red")
	let $btn = page.set_primary_action("Submit",() => frappe.msgprint("Clicked To Submit"))
	let $btnOne = page.set_secondary_action("Refresh", () => frappe.msgprint("Clicked To Refresh"))
	page.add_menu_item("Send Email",() => frappe.msgprint("Clicked To Send Email"))
	page.add_action_item("Delete", () => frappe.msgprint("Clicked Deleted Button"))
	let field = page.add_field({
		label : "Status",
		fieldtype : "Select",
		fieldname : "status",
		options : [
			"Open",
			"Closed",
			"Cancelled"
		],
		change(){
			frappe.msgprint(field.get_value())
		}
	})
}