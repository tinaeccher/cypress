export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('input[id="user"]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('input[id="password"]').clear().type(password);
  }

  submit() {
    cy.get('button[id ="btnLogin"]').click();
  }

  clickForgotPassword() {
    cy.contains('Esqueceu sua senha?').click();
  }

  clickSucess() {
    cy.contains('Login realizado').click();
  }
  
  assertErrorMessage(message) {
    cy.contains(message).should('be.visible');
  }
}