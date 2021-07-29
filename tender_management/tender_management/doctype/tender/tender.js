// Copyright (c) 2020, Michael Karamanolis and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tender', {
	refresh: function(frm) {
		frm.add_custom_button(__('New Bank Guarantee'),function(){
			frappe.msgprint(frm.doc.email);  
			}, __("Create"));
			
	}		
});
