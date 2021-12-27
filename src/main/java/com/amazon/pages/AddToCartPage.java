package com.amazon.pages;

import com.amazon.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddToCartPage extends Utility {
    private static final Logger log= LogManager.getLogger(AddToCartPage.class.getName());

    public AddToCartPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Added to Cart')]")
    WebElement addToCartConFirMessage;

    public void verifyTheAddToCartMessage(String message) throws InterruptedException{
        String actualMessage=getTextFromElement(addToCartConFirMessage);
        Thread.sleep(5000);
        verifyElementsJU("Incorrect Message",message,actualMessage);
        log.info("Verifying the Add To Cart Message :" + message);

    }



}
