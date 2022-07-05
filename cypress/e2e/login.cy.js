const { ViewIdentifiers } = require("../../src/helpers/ViewIdentifier");
const { StringConstants } = require("../../src/helpers/StringConstants");

describe("Testing home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Login Validations Testing", () => {
    /**
     * Test First Name
     */
    cy.get(`[data-test-id=${ViewIdentifiers.SUBMIT_ID}]`).click();
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_SNACKBAR_ID}]`).should(
      "be.visible"
    );
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_ALERT_ID}`).contains(
      StringConstants.FIRST_NAME_IS_NECESSARY
    );
    cy.wait(2000);

    /**
     * Test Last Name
     */
    cy.get(`[data-test-id=${ViewIdentifiers.FIRST_NAME_ID}]`).type("Ravi");
    cy.get(`[data-test-id=${ViewIdentifiers.SUBMIT_ID}]`).click();
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_SNACKBAR_ID}]`).should(
      "be.visible"
    );
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_ALERT_ID}]`).contains(
      StringConstants.LAST_NAME_IS_NECESSARY
    );
    cy.wait(2000);

    /**
     * Test Email is provided
     */
    cy.get(`[data-test-id=${ViewIdentifiers.LAST_NAME_ID}]`).type("Paul");
    cy.get(`[data-test-id=${ViewIdentifiers.SUBMIT_ID}]`).click();

    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_SNACKBAR_ID}]`).should(
      "be.visible"
    );
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_ALERT_ID}]`).contains(
      StringConstants.EMAIL_ID_IS_NECESSARY
    );
    cy.wait(2000);

    /**
     * Test Email is valid
     */
    cy.get(`[data-test-id=${ViewIdentifiers.EMAIL_NAME_ID}]`).type("Ravi");
    cy.get(`[data-test-id=${ViewIdentifiers.SUBMIT_ID}]`).click();
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_SNACKBAR_ID}]`).should(
      "be.visible"
    );
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_ALERT_ID}]`).contains(
      StringConstants.EMAIL_ID_FORMAT_IS_WRONG
    );
    cy.wait(2000);

    /**
     * Test Model is selected
     */
    cy.get(`[data-test-id=${ViewIdentifiers.EMAIL_NAME_ID}]`).type(
      "ravi@gmail.com"
    );
    cy.get(`[data-test-id=${ViewIdentifiers.SUBMIT_ID}]`).click();
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_SNACKBAR_ID}]`).should(
      "be.visible"
    );

    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_ALERT_ID}]`).contains(
      StringConstants.MODEL_IS_NECESSARY
    );
    cy.wait(6100);

    cy.get(`[data-test-id=${ViewIdentifiers.MODEL_NAME_ID}]`).click();
    cy.get(`[data-test-id=${ViewIdentifiers.MODEL_ITEMS + '1'}]`).click();
    cy.get(`[data-test-id=${ViewIdentifiers.MESSAGE_SNACKBAR_ID}]`).should(
        "not.exist"
      );
    cy.get(`[data-test-id=${ViewIdentifiers.SUBMIT_ID}]`).click();
    
  
  });
});
