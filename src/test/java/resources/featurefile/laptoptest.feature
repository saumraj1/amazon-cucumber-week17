Feature: Laptop Product Find Test

  Background: User is On Amazon HomePage
    Given User is on the Amazom Homepage
@Smoke @Regression
  Scenario: User should be able to purchase laptop successfully.
    When User search for "Laptop" laptop in the search bar
    And  click on the search button
    And find the selection from the pages "2020 Newest Hp stream 11.6 inch HD Laptop, Intel Celeron N4000, 4 Gb RAM,64 GB eMMC, Webcam,HDMI,Windows 10"
    And select the Quantity "3"
    And click on add to cart button
    Then verify the add to cart message ""