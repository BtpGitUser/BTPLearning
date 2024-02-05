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
                sap.m.MessageToast.show("Welcome to Fiori")
            }
        });
    });
