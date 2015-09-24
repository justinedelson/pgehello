(function(contentUpdate, $) {
    $(function(){
        var contentPackageName = $("html").data("content-package-name"),
            updating = false,
            contentUpdater = contentUpdate();

        function disable($element) {
            $element.prop("disabled", "disabled");
        }
        function enable($element) {
            $element.prop("disabled", "");
        }
    
        $(document).on("click", "#pge-app-update", function(e) {
            var button = $(e.target);
            if (updating) {
                return;
            }
            if (window.ADB) {
                window.ADB.trackAction('CheckForUpdate');
            }
            updating = true;
            disable(button);
            contentUpdater.isContentPackageUpdateAvailable(contentPackageName,
                    function callback(error, isUpdateAvailable) {
                        if (error) {
                            updating = false;
                            enable(button);
                            // Alert the error details.
                            return navigator.notification.alert(error, null, 'Content Update Error');
                        }

                        if (isUpdateAvailable) {
                            // Confirm if the user would like to update now
                            navigator.notification.confirm('Update is available, would you like to install it now?',
                                function onConfirm(buttonIndex) {
                                    if (buttonIndex == 1) {
                                        // user selected 'Update'
                                        if (window.ADB) {
                                            window.ADB.trackAction("DownloadUpdate");
                                        }
                                        contentUpdater.updateContentPackageByName(contentPackageName,
                                            function callback(error, pathToContent) {
                                                updating = false;
                                                enable(button);
                                                if (error) {
                                                    return navigator.notification.alert(error, null, 'Error');
                                                }
                                                window.location.reload( true );
                                            });
                                    }
                               },
                               'Content Update',               // title
                               ['Update', 'Later']     // button labels
                            );
                        } else {
                            updating = false;
                            enable(button);
                            navigator.notification.alert('App is up to date.', null, 'Content Update', 'Done');
                        }
                }
            );
        });
        
    });
})(CQ.mobile.contentUpdate, Zepto);