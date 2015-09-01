use(function() {
    var currentPageResource = currentPage.adaptTo(Packages.org.apache.sling.api.resource.Resource),
        relativePathToRoot = Packages.com.adobe.cq.mobile.angular.data.util.FrameworkContentExporterUtils.getRelativePathToRootLevel(currentPageResource);
    
    return {
        relativePathToRoot : relativePathToRoot,
        cordovaJsPath : relativePathToRoot + "cordova.js"
    };
});