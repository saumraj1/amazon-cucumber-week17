package com.amazon.cucumber.steps;

import com.amazon.pages.AddToCartPage;
import com.amazon.pages.FindYourProductPage;
import com.amazon.pages.HomePage;
import com.amazon.pages.ProductPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ProductFindSteps {
    @Given("^User is on the Amazom Homepage$")
    public void userIsOnTheAmazomHomepage() {
        System.out.println("I am on Homepage");

    }

    @When("^User search for \"([^\"]*)\" laptop in the search bar$")
    public void userSearchForLaptopInTheSearchBar(String item) {
        new HomePage().enterDataInSearchBox(item);

    }

    @And("^click on the search button$")
    public void clickOnTheSearchButton() {
        new HomePage().clcikOnTheSearchButton();
    }

    @And("^find the selection from the pages \"([^\"]*)\"$")
    public void findTheSelectionFromThePages(String laptopDescription) throws InterruptedException {
        new FindYourProductPage().findSelection(laptopDescription);
    }

    @And("^select the Quantity \"([^\"]*)\"$")
    public void selectTheQuantity(String laptopQty) {
        new ProductPage().selectQuantity(laptopQty);

    }

    @And("^click on add to cart button$")
    public void clickOnAddToCartButton() {
        new ProductPage().addItemToCart();
    }

    @Then("^verify the add to cart message \"([^\"]*)\"$")
    public void verifyTheAddToCartMessage(String message) throws InterruptedException {
        new AddToCartPage().verifyTheAddToCartMessage(message);


    }


    @Given("^User is on the amazone homepage$")
    public void userIsOnTheAmazoneHomepage() {

    }

}