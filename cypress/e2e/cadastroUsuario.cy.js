import { RegisterPage } from '../support/pages/RegisterPage';
import { faker } from '@faker-js/faker';

describe('Tela de Cadastro de Usuário - com Faker', () => {
  const register = new RegisterPage();

  beforeEach(() => {
    register.visit();
  });

  it('CT001 - Cadastro com dados válidos', () => {
    const nome = faker.person.fullName(); // Gera nome completo
    const email = faker.internet.email(); // Gera e-mail único
    const senha = faker.internet.password({ length: 12 }); // Gera senha segura

    register.preencherNome(nome);
    register.preencherEmail(email);
    register.preencherSenha(senha);
    register.clicarCadastrar();
    register.validarMensagem('Cadastro realizado!');
  });

  it('CT002 - Cadastro com nome vazio', () => {
    const email = faker.internet.email();
    const senha = faker.internet.password();

    //register.preencherNome('Tina Teste');
    register.preencherEmail(email);
    register.preencherSenha(senha);
    register.clicarCadastrar();
    register.validarMensagem('O campo nome deve ser prenchido');
  });

  it('CT003 - Cadastro com e-mail inválido', () => {
    const nome = faker.person.fullName();
    const senha = faker.internet.password();

    register.preencherNome(nome);
    register.preencherEmail('email-invalido');
    register.preencherSenha(senha);
    register.clicarCadastrar();
    register.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  it('CT004 - Cadastro com senha vazia', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();

    register.preencherNome(nome);
    register.preencherEmail(email);
   // register.preencherSenha('');
    register.clicarCadastrar();
    register.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('CT005 - Cadastro com e-mail já existente', () => {
    const nome = faker.person.fullName();
    const senha = faker.internet.password();

    register.preencherNome(nome);
    register.preencherEmail('tina@email.com'); // e-mail fixo já cadastrado
    register.preencherSenha(senha);
    register.clicarCadastrar();
    register.validarMensagem('E-mail já cadastrado');
  });
});