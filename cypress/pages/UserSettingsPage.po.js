class SettingsPage {
  get accountMenu() {
    return '[data-cy="accountMenu"]';
  }
  get menuItemEdit() {
    return "//span[contains(.,'Edit account')]";
  }

  get listItemPassword() {
    return "//mat-label[contains(.,'Password')]";
  }

  getCurrentPassword() {
    return "#mat-input-107";
  }

  getNewPassword() {
    return "//input[contains(@formcontrolname,'new_password')]";
  }

  getVerifyPassword() {
    return "//input[contains(@formcontrolname,'verify_password')]";
  }

  getUpdateButton() {
    return "(//span[@class='mdc-button__label'][contains(.,'Update')])[1]";
  }

  getLogoutButton() {
    return "//span[contains(.,'Log out')]";
  }

  navigateToUserSettings() {
    cy.get(this.accountMenu)
      .click()
      .then(() => {
        cy.xpath(this.menuItemEdit).click().wait(2000);
      });
  }

  goToPasswordTab() {
    cy.xpath(this.listItemPassword).as("btn").click();
    cy.get("@btn").click().wait(2000);
  }

  updatePassword(currentPassword, newPassword) {
    cy.document().then((doc) => {
      doc
        .querySelector(this.getCurrentPassword)
        .focus()
        .clear()
        .type(currentPassword);
      doc.querySelector(this.getNewPassword).clear().type(newPassword);
      doc.querySelector(this.getVerifyPassword).clear().type(newPassword);
    });
  }

  logout() {
    cy.xpath(this.getLogoutButton).click();
  }
}

export default new SettingsPage();
