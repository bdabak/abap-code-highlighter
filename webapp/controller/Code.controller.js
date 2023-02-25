sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend(
      "com.smod.highlightjs.highlightcode.controller.Code",
      {
        onInit: function () {
          var oViewModel = new sap.ui.model.json.JSONModel({
            codeContent: "",
          });

          this.getView().setModel(oViewModel, "codeViewModel");
        },
      }
    );
  }
);
