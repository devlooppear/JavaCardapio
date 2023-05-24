# FrontCardapio
Este é um aplicativo React que implementa um CRUD (Create, Read, Update, Delete) a partir de um banco de dados acessado por 'localhost:8080/food' com o diretório `cardapio`, presente na pasta `JavaCardapio`. É um cardápio de itens de comida. Ele permite que os usuários visualizem, criem, editem e excluam itens de comida do cardápio. O projeto utiliza TypeScript para adicionar tipagem estática ao código e o bundler Vite para melhorar o processo de desenvolvimento.

## Instalação
- Clone o repositório ou faça o download do código-fonte.

- Abra um terminal e navegue até o diretório do projeto.

- Execute o seguinte comando para instalar as dependências:

```javascript
npm install
```
- Após a instalação ser concluída, você pode iniciar o aplicativo executando o seguinte comando:

```javascript
npm run dev
```
- Isso iniciará o servidor de desenvolvimento usando o Vite e abrirá o aplicativo em seu navegador padrão.

## Uso
Ao iniciar o aplicativo, você verá uma lista de itens de comida exibidos em um layout de grade.
Cada card de item de comida mostra o preço, título e uma imagem.
Você pode clicar no botão "Editar" em um card para abrir um modal para editar o item de comida selecionado.
Clicar no botão "Excluir" abrirá um modal de confirmação para excluir o item de comida selecionado.
Para criar um novo item de comida, clique no botão "Novo" na parte inferior da página. Isso abrirá um modal com um formulário para inserir os detalhes do novo item de comida.
Após fazer quaisquer alterações ou adições, o cardápio será atualizado automaticamente para refletir as modificações.
Para esse projeto também é necessário que seja ativado: `CardapioApplication.java`, rodando este arquivo que está no diretório `cardapio`, que segue o caminho: `src\main\CardapioApplication.java`
## Estrutura do Projeto
O projeto está estruturado da seguinte forma:

- App.css: Folha de estilo para o componente principal do aplicativo.
- components/card/card.tsx: Componente para renderizar um card de item de comida.
- components/create-modal/create-modal.tsx: Componente para o modal de criação de novo item de comida.
- components/edit-modal/edit-modal.tsx: Componente para o modal de edição de item de comida.
- components/delete-modal/delete-modal.tsx: Componente para o - modal de confirmação de exclusão de item de comida.
- hooks/useFoodData.ts: Hook personalizado para buscar e gerenciar os dados dos itens de comida.
- hooks/useFoodDataDelete.ts: Hook personalizado para excluir itens de comida.
- interface/FoodData.ts: Interface para definir a estrutura dos dados dos itens de comida.
- public/favicon.ico: Arquivo do favicon.
- src/App.tsx: Componente principal do aplicativo que interliga tudo.
- src/index.css: Estilos CSS globais para o aplicativo.
- src/index.tsx: Ponto de entrada do aplicativo.
- src/api.ts: Arquivo com as funções de API para realizar operações CRUD.
- src/types.ts: Arquivo com tipos personalizados utilizados no projeto.
## Dependências
O projeto possui as seguintes dependências:

- React: Uma biblioteca JavaScript para construir interfaces de usuário.
- react-dom: Fornece métodos específicos do DOM para o React.
- react-query: Uma biblioteca do React para busca e cache de dados.
- axios: Uma biblioteca para fazer requisições HTTP.
## Dependências de Desenvolvimento
TypeScript: Uma linguagem de programação que adiciona tipagem estática ao JavaScript.
Vite: Um bundler rápido e leve para projetos JavaScript e TypeScript.
- vitejs/plugin-react: Um plugin Vite para suporte ao React.
eslint: Uma ferramenta de linting para JavaScript e TypeScript.
- typescript-eslint/parser: Um analisador para analisar código TypeScript no ESLint.
- typescript-eslint/eslint-plugin: Um plugin do ESLint para suporte ao TypeScript.
eslint-plugin-react-hooks: Um plugin do ESLint para verificar as regras dos Hooks do React.
eslint-plugin-react-refresh: Um plugin do ESLint para suporte à atualização automática do React.
## Contribuição
Contribuições para este projeto são bem-vindas. Você pode contribuir abrindo issues para relatar bugs ou solicitar novas funcionalidades, e enviando pull requests com melhorias ou correções.
