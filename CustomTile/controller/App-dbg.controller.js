sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("customtile.controller.App", {
        onInit() {},
        onPress : function(){
          const oComponentProps = this.getOwnerComponent().getComponentData().properties;
          const sTargetUrl = oComponentProps.targetURL;
          if(sTargetUrl){
            const hash = new sap.ui.core.routing.HashChanger();
            hash.setHash(sTargetUrl);
          }
        }
      });
    }
  );
  