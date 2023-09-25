class LoginPage {
  visit() {
    cy.visit("https://app.tpro.rocks/authenticate");
  }

  clickEmail() {
    cy.get('[type="email"]').click();
  }

  fillEmail(email) {
    cy.get('[type="email"]').clear().type(email);
  }

  clickPassword(password) {
    cy.get('[type="password"]').click();
  }

  fillPassword(password) {
    cy.get('[type="password"]').clear().type(password);
  }

  submitLogin() {
    cy.get("button[type='submit']").click();
  }
}

export default new LoginPage();
