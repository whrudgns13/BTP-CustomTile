sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("tilecontent.controller.App", {
        onInit() {
          const oShellContainer = jQuery.sap.getObject("sap.ushell.Container");
          oShellContainer.getServiceAsync("PluginManager")
          .then(oPluginManager=>{
            let oPlugins = oPluginManager.getRegisteredPlugins();
            let oShellPlugin;
            for(let [key, value] of Object.entries(oPlugins.RendererExtensions)){
              if(key.indexOf("shellplugin")>-1){
                oShellPlugin = value;
              }
            }
            console.log(oShellPlugin);
          });
        }
      });
    }
  );
  