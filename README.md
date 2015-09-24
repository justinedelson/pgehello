# AEM Apps / PhoneGap Enterprise Hello World

This project contains an AEM Apps project demonstrating the simplest PhoneGap Enterprise application possible. The "Hello World" of AEM Apps. It is intentionally not particular attractive. It can be considered the opposite of the [Kitchen Sink](https://github.com/blefebvre/aem-phonegap-kitchen-sink) sample app.

A detailed guide to the anatomy of this project can be found [here](https://github.com/justinedelson/pgehello/blob/master/anatomy.md).

## Features

The application includes:

* Over the Air (OTA) content updates (using a manual button press)
* Lifecycle & Action tracking with Adobe Mobile Services
* In-App Messaging with Adobe Mobile Services

## Requirements

* AEM 6.1
* [NodeJS](https://nodejs.org/) 0.10.x+ (*not* 4.x)
* One of:
    * `cordova` CLI 5.3.1+ ([Installation Instructions](https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html))
    * `phonegap` CLI 5.3.4+ ([Installation Instructions](http://phonegap.com/install/))
* Adobe Mobile Services account (optional)

## Usage

1. Install both content packages by running this command from the project root:

    `$ mvn -PautoInstallPackage clean install`

2. Navigate to the Apps Control Center, i.e. open [http://localhost:4502/libs/mobileapps/admin/content/dashboard.html/content/phonegap/helloworld/shell](http://localhost:4502/libs/mobileapps/admin/content/dashboard.html/content/phonegap/helloworld/shell) in your browser.
3. (Optional) [Configure Adobe Mobile Services](http://docs.adobe.com/docs/en/aem/6-1/develop/mobile-apps/apps/intro-to-app-analytics.html)
4. Download the Application Source (using the dropdown menu in the PhoneGap Build section).
5. Unzip the resulting zip file.
6. Add the appropriate PhoneGap/Cordova platforms, e.g.

    `$ phonegap platform add ios`
    
7. Run/emulate the application, e.g.

    `$ phonegap emulate ios`

### Updating

To update the content within the application:

1. Ensure you have an AEM publish instance running and that the Update URL in the AEM App is properly configured.
2. Modify the home screen in AEM Apps (e.g. change the text or add an image).
3. Stage and Publish a content update.
4. Within the application, click the Check for Update button.
