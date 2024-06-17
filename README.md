# Projeto Final WEB

Repositorio para o trabalho final de web back + front

## Indice

- [Projeto Final WEB](#projeto-final-web)
  - [Indice](#indice)
  - [Definição do escopo](#definição-do-escopo)
    - [TODO](#todo)
  - [Definição de Funções](#definição-de-funções)
    - [Front](#front)
    - [Back](#back)
    - [Full-Stack](#full-stack)
    - [Design](#design)
  - [Tecnologias e recursos](#tecnologias-e-recursos)
  - [Processo de desenvolvimento do projeto](#processo-de-desenvolvimento-do-projeto)
  - [Git Flow](#git-flow)

## Definição do escopo

Esse projeto visa criar um fórum de discussão sobre albums de músicas presentes no spotify, semelhante a outros projetos existentes como o last.fm e Rate Your Music.

Para tal, esse projeto se propõe a criar uma tela inicial com uma listagem de albuns do spotify distribuidos em carrosseis e grids ao longo da página. Além desta, cada album possuirá sua propria página, onde será possível visualizar suas notas e avaliações feitas por você e outras pessoas que também utilizarem a plataforma. Para que isso possa ocorrer, será necessário que a aplicação lide no back-end com cadastro e login de usuários que deverão ser autenticados e cumprir um padrão de credenciais como email válido, senha segura, entre outros. Além disso, é necessário que cada usuário tenha atrelado a si suas avaliações, que serão também cadastradas no banco de dados do projeto, além de atrelá-las a albuns. Essas avaliações poderão ser posteriormente editadas e deletadas pelo usuário, bem como visualizadas por qualquer outro usuário da plataforma.

Por fim, o site terá uma página de apresentação que explicará seu funcionamento e direcionará o usuário para o cadastro / login.

### TODO

- [ ] Página de intodução
- [x] Sistema de Leitura / Escrita em arquivo
- [ ] Cadastro / Login
  - [ ] Formulário de cadastro
    - [ ] Verificação de padrão de credenciais
  - [ ] CRUD de usuários no banco de dados
  - [ ] Autenticação de usuário
  - [ ] Página de perfil
- [ ] Página inicial
  - [ ] Consulta dos albuns
- [ ] Página do album
  - [ ] Consulta do album
  - [ ] Sistema de avaliação (CRUD)

## Definição de Funções

### Front

- Beatriz

### Back

- Gabriel
- Carol

### Full-Stack

- Zino

### Design

- Carol

## Tecnologias e recursos

- NodeJS
- ExpressJS
- Gerência de Arquivos (path, fs, cwd)
- NextJS
- NPM
- JWT
- Biblioteca para gerência de padrão de credenciais (a definir)
- TypeScipt
- Tailwind
- Axios
- Embla Carousel

## Processo de desenvolvimento do projeto

- 1 - Definição das tarefas mais importantes e a ordem de realização delas para um periodo de tempo definido.
- 2 - Divisão das tarefas entre os membros de acordo com as funções designadas.
- 3 - Realização das tarefas designadas. Nesta etapa, deixar comentários claros que descrevam bem o funcionamento do código para facilitar e acelerar as etapas seguintes.
- 4 - Commitar o código em uma nova branch no github com o comando `git push -u origin nome_da_branch` (se commitar na master, morre) e criar pull request.
- 5 - Avaliação, entendimento e aprovação da pull requst por todos os membros. Essa etapa irá servir pra todo mundo entender todas as partes do código e tirar dúvidas.
- 6 - Merge na develop.
- 7 - Recomeça.

## Git Flow

Para implementar uma nova funcionalidade, criar uma branch nova com o nome `feat/nome_funcionalidade`. Esse será o nome utilizado no push. Lembre-se de dar um `git pull origin develop` para garantir que está utilizando o código mais atualizado possível.

Quando a funcionalidade estiver pronta, faz o commit e envia ela pro github como descrito na seção anterior e cria a pull request para a develop.

Quando o projeto estiver concluido, é só fazer o merge da develop na master.
