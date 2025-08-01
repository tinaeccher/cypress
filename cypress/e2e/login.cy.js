import { LoginPage } from '../support/pages/LoginPage'; //abordando o conceito de Page objects

describe('QAzando - Tela de Login', () => {
  const loginPage = new LoginPage(); // Cria uma instância da página de login para reutilizar nos testes

  beforeEach(() => {
    loginPage.visit(); // Método que navega até a URL da tela de login
  }); // Executa antes de cada teste: acessa a página de login

  it('CT001 - Login com sucesso', () => {
    loginPage.fillEmail('qazando@teste.com.br');
    loginPage.fillPassword('senha123');
    loginPage.submit();
    loginPage.assertErrorMessage('Login realizado');
  });

  it('CT002 - Login com e-mail inválido', () => {
    loginPage.fillEmail('email-invalido');
    loginPage.fillPassword('senha123');
    loginPage.submit();
    loginPage.assertErrorMessage('E-mail inválido');
  });

  it('CT003 - Login com senha inválida', () => {
    loginPage.fillEmail('usuario@teste.com');
    loginPage.fillPassword('.');
    loginPage.submit();
    loginPage.assertErrorMessage('Senha inválida.');
  });

  it('CT004 - Login com e-mail vazio e senha correta', () => {
    //loginPage.fillEmail('');
    loginPage.fillPassword('senha123');
    loginPage.submit();
    loginPage.assertErrorMessage('E-mail inválido.');
  });

  it('CT005 - Login com e-mail correto e senha vazia', () => {
    loginPage.fillEmail('usuario@teste.com');
    //loginPage.fillPassword('');
    loginPage.submit();
    loginPage.assertErrorMessage('Senha inválida.');
  });

  /*
  it('CT006 - Acessar opção "Esqueceu a senha"', () => {
    loginPage.clickForgotPassword();
    cy.url().should('include', '/recuperar-senha');
    cy.contains('Recuperar Senha').should('be.visible');
  });
  */
});
