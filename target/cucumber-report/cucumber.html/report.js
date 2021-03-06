$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("laptoptest.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop Product Find Test",
  "description": "",
  "id": "laptop-product-find-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4395467900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is On Amazon HomePage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Amazom Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductFindSteps.userIsOnTheAmazomHomepage()"
});
formatter.result({
  "duration": 100970600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to purchase laptop successfully.",
  "description": "",
  "id": "laptop-product-find-test;user-should-be-able-to-purchase-laptop-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User search for \"Laptop\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "find the selection from the pages \"2020 Newest Hp stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 Gb RAM,64 GB eMMC, Webcam,HDMI,Windows 10\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select the Quantity \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify the add to cart message \"\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 17
    }
  ],
  "location": "ProductFindSteps.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 199191900,
  "status": "passed"
});
formatter.match({
  "location": "ProductFindSteps.clickOnTheSearchButton()"
});
formatter.result({
  "duration": 2634661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020 Newest Hp stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 Gb RAM,64 GB eMMC, Webcam,HDMI,Windows 10",
      "offset": 35
    }
  ],
  "location": "ProductFindSteps.findTheSelectionFromThePages(String)"
});
formatter.result({
  "duration": 114802743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "ProductFindSteps.selectTheQuantity(String)"
});
formatter.result({
  "duration": 20052686800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#quantity\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4eddd86f9c0f8ce41790deffeb38c496, findElement {using\u003did, value\u003dquantity}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57740}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57740/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4eddd86f9c0f8ce41790deffeb38c496\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:46)\r\n\tat com.amazon.utility.Utility.selectByValueFromDropDown(Utility.java:148)\r\n\tat com.amazon.pages.ProductPage.selectQuantity(ProductPage.java:26)\r\n\tat com.amazon.cucumber.steps.ProductFindSteps.selectTheQuantity(ProductFindSteps.java:38)\r\n\tat ???.And select the Quantity \"3\"(laptoptest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProductFindSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "ProductFindSteps.verifyTheAddToCartMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 945759100,
  "status": "passed"
});
formatter.uri("mobiletest.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile product find test",
  "description": "",
  "id": "mobile-product-find-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3014905600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "User is on amazone home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User is on the amazone homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductFindSteps.userIsOnTheAmazoneHomepage()"
});
formatter.result({
  "duration": 40100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to purchese mobile phone successfully",
  "description": "",
  "id": "mobile-product-find-test;user-should-be-able-to-purchese-mobile-phone-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User search for \"Mobile phone\" laptop in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "find the selection from the pages \"Nokia XR20 5G| Android 11 | Unlocked smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night \"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the add to cart message \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile phone",
      "offset": 17
    }
  ],
  "location": "ProductFindSteps.userSearchForLaptopInTheSearchBar(String)"
});
formatter.result({
  "duration": 165215600,
  "status": "passed"
});
formatter.match({
  "location": "ProductFindSteps.clickOnTheSearchButton()"
});
formatter.result({
  "duration": 1730024900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia XR20 5G| Android 11 | Unlocked smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night ",
      "offset": 35
    }
  ],
  "location": "ProductFindSteps.findTheSelectionFromThePages(String)"
});
formatter.result({
  "duration": 112357933000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ProductFindSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 730218700,
  "status": "passed"
});
});