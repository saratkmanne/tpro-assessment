/// <reference types="cypress"/>

import LoginPage from "../pages/LoginPage.po";
import SettingsPage from "../pages/UserSettingsPage.po";

const username = Cypress.env("username");
const password = Cypress.env("password");
const updatePassword = Cypress.env("updatePassword");
const invalidPassword = Cypress.env("invalidPassword");
describe("Login Test", function () {
  beforeEach(function () {
    cy.openBrowser();
    cy.fixture("errormessages").then((data) => {
      this.data = data;
    });
  });
  it("verify user login successfully", () => {
    cy.login(username, password);

    // Assert the redirection to /tasks/live
    cy.url().should("include", "/tasks/live");
  });

  it("verify page after login test", function () {
    SettingsPage.navigateToUserSettings();

    // Go to Password tab
    SettingsPage.goToPasswordTab();

    // Update password
    SettingsPage.updatePassword(password, updatePassword);

    // Logout and retry login with new password
    SettingsPage.logout();

  });

  it("verify display errors for empty fields", function () {
    // Submit the login form without entering any credentials
    LoginPage.clickEmail();
    LoginPage.clickPassword();
    LoginPage.submitLogin();

    // Assert error messages for empty fields
    cy.contains(this.data.emailErrormessage).should("be.visible");
    cy.contains(this.data.passwordErrorMessage).should("be.visible");
  });

  it("verify invalid password login", function () {
    cy.login(username, invalidPassword);

    cy.contains(this.data.invalidErrormessage).should("be.visible");
  });
});
