import { RegisterPage } from '../support/pages/RegisterPage';

describe('Tela de Cadastro de Usuário', () => {
  const register = new RegisterPage();

  beforeEach(() => {
    register.visit();
  });

  it('CT001 - Cadastro com dados válidos', () => {
    const emailUnico = `tina${Date.now()}@email.com`;
    register.preencherNome('Tina Teste');
    register.preencherEmail(emailUnico);
    register.preencherSenha('SenhaSegura123');
    register.clicarCadastrar();
    register.validarMensagem('Cadastro realizado com sucesso');
  });

  it('CT002 - Cadastro com nome vazio', () => {
    register.preencherNome('');
    register.preencherEmail('tina@email.com');
    register.preencherSenha('SenhaSegura123');
    register.clicarCadastrar();
    register.validarMensagem('O campo nome é obrigatório');
  });

  it('CT003 - Cadastro com e-mail inválido', () => {
    register.preencherNome('Tina Teste');
    register.preencherEmail('email-invalido');
    register.preencherSenha('SenhaSegura123');
    register.clicarCadastrar();
    register.validarMensagem('E-mail inválido');
  });

  it('CT004 - Cadastro com senha vazia', () => {
    register.preencherNome('Tina Teste');
    register.preencherEmail('tina@email.com');
    register.preencherSenha('');
    register.clicarCadastrar();
    register.validarMensagem('O campo senha é obrigatório');
  });

  it('CT005 - Cadastro com e-mail já existente', () => {
    register.preencherNome('Tina Teste');
    register.preencherEmail('tina@email.com'); // e-mail já cadastrado
    register.preencherSenha('SenhaSegura123');
    register.clicarCadastrar();
    register.validarMensagem('E-mail já cadastrado');
  });
});