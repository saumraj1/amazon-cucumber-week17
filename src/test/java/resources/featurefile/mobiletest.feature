Feature: Mobile product find test
  Background: User is on amazone home page
    Given User is on the amazone homepage
 @Sanity @Regression
    Scenario: User should be able to purchese mobile phone successfully
      When  User search for "Mobile phone" laptop in the search bar
      And click on the search button
      And find the selection from the pages "Nokia XR20 5G| Android 11 | Unlocked smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night "
      And select the quantity "2"
      And click on add to cart button
      Then Verify the add to cart message "Added to Cart"