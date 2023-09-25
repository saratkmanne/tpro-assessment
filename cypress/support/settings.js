import SettingsPage from "../pages/UserSettingsPage.po";

Cypress.Commands.add("updatePassword", () => {
  SettingsPage.accountMenu.click().then(() => {
    SettingsPage.menuItemEdit.click().then(() => {
      SettingsPage.listItemPassword.click().then(() => {
        
      });
    });
  });
});
