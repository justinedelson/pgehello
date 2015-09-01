# AEM Apps / PhoneGap Enterprise Hello World

This project contains an AEM Apps project demonstrating the simplest PhoneGap Enterprise application possible. The "Hello World" of AEM Apps. It is intentionally not particular attractive. It can be considered the opposite of the [Kitchen Sink](https://github.com/blefebvre/aem-phonegap-kitchen-sink) sample app.

## Features

The application includes:

* Over the Air (OTA) content updates (using a manual button press)
* Lifecycle & Action tracking with Adobe Mobile Services

## Requirements

* AEM 6.1
* `cordova` CLI 5.2.0+ ([Installation Instructions](https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html))
* Adobe Mobile Services (optional)

### Limitations

* This project currently does not work with PhoneGap Build. Only command line builds are possible.

## Usage

1. Install both content packages by running this command from the project root:

    `$ mvn -PautoInstallPackage clean install`

2. Navigate to the Apps Control Center, i.e. open [http://localhost:4502/libs/mobileapps/admin/content/dashboard.html/content/phonegap/helloworld/shell](http://localhost:4502/libs/mobileapps/admin/content/dashboard.html/content/phonegap/helloworld/shell) in your browser.
3. (Optional) [Configure Adobe Mobile Services](http://docs.adobe.com/docs/en/aem/6-1/develop/mobile-apps/apps/intro-to-app-analytics.html)
4. Download the Application Source (using the dropdown menu in the PhoneGap Build section).
5. Unzip the resulting zip file.
6. Add the appropriate Cordova platforms, e.g.

    `$ cordova platform add ios`
    
7. Run/emulate the application, e.g.

    `$ cordova emulate ios`
