export class RegisterPage {
  visit() {
    cy.visit('https://automationpratice.com.br/register');
  }

  preencherNome(nome) {
    cy.get('input[id="user"]').clear().type(nome);
  }

  preencherEmail(email) {
    cy.get('input[id="email"]').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('input[id="password"]').clear().type(senha);
  }

  clicarCadastrar() {
    cy.get('button[id="btnRegister"]').click();
  }

  validarMensagem(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }

  clicarOK() {
    cy.get('button[type="button"]').click();
  }
}