frappe.ready(function() {
	frappe.web_form.after_load = () => {
		frappe.web_form.on('enable', (field,value)=>{
			frappe.msgprint("Hi User")
		})
	}
})