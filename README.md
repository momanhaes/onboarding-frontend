# Onboarding OmniChat - Frontend

Bem-vindo ao projeto do onboarding de frontend da OmniChat! Basicamente, neste projeto, foi implementado um CRUD de clientes usando o Local Storage. A aplicação inicialmente vai carregar alguns clientes mockados, mas é possível também criar novos clientes manualmente, assim como editar, excluir, listar e pesquisar. Também foi implementado um _styleguide_ onde é possível ver os componentes disponíveis para uso na aplicação e sua uma respectiva documentação.
## Tecnologias utilizadas
O projeto foi desenvolvido com o _framework_ Angular na versão 15.

"Por baixo dos panos" foram utilizadas outras tecnologias como: 

* HTML, CSS, SASS, JavaScript e TypeScript
* Bootstrap, Angular Material e NGX Mask
* Jasmine 

## Inicialização da SPA
Clone o repositório usando o comando abaixo:

```sh
git clone https://github.com/momanhaes/onboarding-frontend
```

Instale as dependências do projeto rodando o comando abaixo:

```sh
npm install
```

Suba o projeto rodando o comando abaixo:

```sh
npm start
```

Abra [http://localhost:4200](http://localhost:4200) em seu navegador.

## Documentação das features

### Rotas públicas da aplicação

* `/home` - Página inicial de apresentação do projeto.

* `/customer/list` - Página de acesso à listagem de clientes.

* `/customer/register` - Página de acesso ao registro de clientes.

* `/styleguide/typography` - Página do _styleguide_ referente a tipografia do projeto.

* `/styleguide/colors` - Página do _styleguide_ referente a paleta de cores do projeto.

* `/styleguide/inputs` - Página do _styleguide_ referente aos _inputs_ do projeto.

* `/styleguide/buttons` - Página do _styleguide_ referente aos botões do Angular Material implementados no projeto.

* `/styleguide/items` - Página do _styleguide_ referente aos itens _(label + value)_ do projeto.

* `/styleguide/icons` - Página do _styleguide_ referente aos ícones do projeto.

* `/styleguide/pipes` - Página do _styleguide_ referente aos _pipes_ do Angular implementados no projeto.

* `/**` - Página _default_ para erros 404 _(not found)_ a fim lidar com rotas não programadas do sistema.

## Testes

Foram implementados testes unitários com Jasmine. Para rodar os testes unitários digite o comando abaixo:

```sh
npm run test
```

## Chamadas HTTP

Na página de registro de cliente foi implementado um componente chamado _app-cep_ que recebe um número referente ao CEP e retorna o endereço completo do cliente. Para tornar essa feature possível, foi consumida a API gratuita do [ViaCEP](https://viacep.com.br/). Foi usada a URL `viacep.com.br/ws/` com chamadas para o _endpoint_ /{cep}/json.

## Outras informações

* O projeto foi construído considerando boas práticas do Clean Code, conceitos como Single Responsiblity Principle do SOLID e aproveitando os recursos da programação reativa ao lidar com _observables_ da biblioteca RxJS.
* As transições de tela possuem animações feitas a partir do módulo nativo do Angular para tornar a navegação do usuário mais fluida.
* As páginas foram desenvolvidas visando responsividade e usabilidade.
* Os fluxos possuem tratamento de erro e _loading_.