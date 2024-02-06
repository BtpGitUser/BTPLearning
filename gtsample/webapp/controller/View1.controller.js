sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("gtsample.controller.View1", {
            onInit: function () {
                console.log("initial Load");
                sap.m.MessageToast.show("Welcome to Fiori")
            },

            onOpenDialog() {
                // create dialog lazily
                this.pDialog ??= this.loadFragment({
                    name: "gtsample.view.DialogY"
                });
    
                this.pDialog.then((oDialog) => oDialog.open());
            },

            onOpenDialogP() {
                // create dialog lazily
                this.pDialog ??= this.loadFragment({
                    name: "gtsample.view.DialogP"
                });
    
                this.pDialog.then((oDialog) => oDialog.open());
            }
            
        });
    });
