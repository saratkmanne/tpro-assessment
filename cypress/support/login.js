import LoginPage from "../pages/LoginPage.po";

Cypress.Commands.add("userLoginSession", () => {
  cy.session([username, password], () => {
    cy.visit("/authentication");

    // enter username and password
    LoginPage.emailInput.type(username);
    LoginPage.passwordInput.type(password);

    // click login button
    LoginPage.submitLogin.click();

    // Assert the redirection to /tasks/live
    cy.url().should("include", "/tasks/live");
  });
});

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/authenticate");

  // enter username and password
  LoginPage.fillEmail(username);
  LoginPage.fillPassword(password);

  // click login button
  LoginPage.submitLogin();

  
});
