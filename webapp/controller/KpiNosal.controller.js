sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
    ],
    /** @param {typeof sap.ui.core.mvc.Controller} Controller */
 (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldnosal.controller.KpiNosal", {
        onInit: function () {
            },
        onPress: function () {
                MessageBox.alert("Spring boot better! Java <3");
            }
    })

});