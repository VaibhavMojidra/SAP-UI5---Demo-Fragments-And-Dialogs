sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],function(Controller){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.fragmentsanddialogsdemo.controller.App",{
			onClick:function(){
				this.pDialog ??= this.loadFragment({
					name: "com.vaibhavmojidra.fragmentsanddialogsdemo.view.HelloDialog"
				});
        		this.pDialog.then((oDialog) => oDialog.open());
			}	
		});
	}
);