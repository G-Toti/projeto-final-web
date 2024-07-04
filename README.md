# HGBC MUSIC

Repositorio para o trabalho final de web back + front: HGBC MUSIC, um forum de avaliação de músicas

![Imagem da Home do site](https://iili.io/dKM1UoN.png)

## 📖 Indice

- [HGBC MUSIC](#projeto-final-web)
  - [📖 Indice](#📖-indice)
  - [📚 Descrição do Projeto](#📚-descrição-do-projeto)
    - [❗ Problema a ser resolvido](#❗-problema-a-ser-resolvido)
    - [👩‍💻 Tecnologias e recursos](#👩‍💻-tecnologias-e-recursos)
      - [Back](#back)
      - [Front](#front)
      - [Gerenciar Dependencias](#gerenciar-dependencias)
  - [⬇ Instalação](#⬇-instalação)
    - [Clonar o projeto](#clonar-o-projeto)
    - [Inicializar o projeto](#inicializar-o-projeto)
  - [🖊 Autores](#🖊-autores)

## 📚 Descrição do Projeto

Esse projeto visa criar um fórum de discussão sobre músicas, semelhante a outros projetos existentes como o last.fm e Rate Your Music.

Para tal, esse projeto se propõe a criar uma tela de perfil com as informações do usuário e uma listagem de músicas avaliadas distribuidas em grids ao longo da página. Além desta, cada album possuirá sua propria página, onde será possível visualizar suas notas e avaliações feitas por você e outras pessoas que também utilizarem a plataforma.

Por fim, o site terá uma página de apresentação que explicará seu funcionamento e direcionará o usuário para o cadastro / login.

### ❗ Problema a ser resolvido

É bastante comum que comunidades se formem em torno de grupos e estilos musicais e que essas comunidades busquem formas de interagir e expor suas opniões sobre as músicas. Dessa forma, esse projeto visa integrar pessoas com interesses em diferentes tipos de músicas em um só lugar, permitido que todos opinem, deixem suas avaliações e discutam sobre as músicas presentes na plataforma.

### 👩‍💻 Tecnologias e recursos

#### Back

- NodeJS
- ExpressJS
- Gerência de Arquivos (path, fs, cwd)
- JWT

#### Front

- NextJS
- YUP
- TypeScipt
- Tailwind
- Axios
- last.fm API

#### Gerenciar Dependencias

- NPM

## ⬇ Instalação
  
  Para fazer a instalação do projeto, basta seguir as etapas a seguir
  
### Clonar o projeto
  
  ```bash
    git init
    git clone https://github.com/G-Toti/projeto-final-web.git
    cd projeto-final-web
  ```
  
  ### Inicializar o projeto
  
  Primero será necessário iniciar o back-end
  
  ```cmd
    cd back
    npm run dev
  ```
  
  Depois iniciar o front
  
  ```cmd
    cd front
    npm run dev
  ```
  
  <h3>⚠ Utilizar um console para cada inicialização</h3>

## 🖊 Autores

  <table>
    <tbody>
      <tr>
        <td align="center" valign="top">
          <a href="https://github.com/beatrizgnascimento">
            <img src="https://avatars.githubusercontent.com/u/131934165?v=4" width="110" />
            <br/>
            <p>Beatriz</p>
          </a>
        </td>
        <td align="center" valign="top">
          <a href="https://github.com/CarolinaRTC">
            <img src="https://avatars.githubusercontent.com/u/134518007?v=4" width="110" />
            <br/>
            <b>Carol</b>
          </a>
        </td>
        <td align="center" valign="top">
          <a href="https://github.com/G-Toti">
            <img src="https://avatars.githubusercontent.com/u/156110093?v=4" width="110" />
            <br/>
            <b>Gabriel</b>
          </a>
        </td>
        <td align="center" valign="top">
          <a href="https://github.com/zinoLath">
            <img src="https://avatars.githubusercontent.com/u/58287992?v=4" width="110" />
            <br/>
            <b>João Henrique</b>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
