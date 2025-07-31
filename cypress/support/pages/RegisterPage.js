export class RegisterPage {
  visit() {
    cy.visit('https://automationpratice.com.br/register');
  }

  preencherNome(nome) {
    cy.get('input[name="name"]').clear().type(nome);
  }

  preencherEmail(email) {
    cy.get('input[name="email"]').clear().type(email);
  }

  preencherSenha(senha) {
    cy.get('input[name="password"]').clear().type(senha);
  }

  clicarCadastrar() {
    cy.get('button[type="submit"]').click();
  }

  validarMensagem(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}