package com.amazon.pages;

import com.amazon.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FindYourProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(FindYourProductPage.class.getName());

    public FindYourProductPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//span[@class='a-size-medium a-color-base a-text-normal']")
    List<WebElement> searchList;

    @CacheLookup
    @FindBy(linkText = "Next")
    WebElement nextButton;


    public boolean findSelection(String item) throws InterruptedException {
        boolean myBreak = true;
        boolean selection = false;
        while (myBreak) {
            for (WebElement e : searchList) {
                if (e.getText().equalsIgnoreCase(item)) {
                    System.out.println(e.getText());
                    clickOnElement(e);
                    selection = true;
                    myBreak = false;
                    break;
                }
            }
            if (myBreak) {
                if (!driver.getCurrentUrl().contains("page=20")) {
                    waitUntilVisibilityOfElementLocated(By.linkText("Next"), 100).click();
                } else {
                    selection = false;
                    myBreak = false;
                }
                PageFactory.initElements(driver, this);
                Thread.sleep(5000);
            }
        }
        return selection;
    }






}


