# Criação de um Service em Javascript para o Backend
## Sobre

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arquivos/funções helpers para um projeto Javascript em Sails.js. Essas funções helpers devem simular o tratamento de dados, para uma plataforma VTM, de um projeto em grupo com a Parceiros Voltuntários. 

## Objetivo

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criar arquivos helpers, para um projeto utilizando o framework Sails.js, que façam o tratamento de dados básicos de cadastro de usuários. O tratamento de dados deve ser feito por funções assíncronas dentro de arquivos helpers (.js). Cada arquivo helpers deve receber um input, que é processado pela função, e retorna um output. Essse arquivos helpers podem ser testados a partir de uma interface views/HTML (.ejs) simples.

## Helpers

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Os arquivos helpers podem ser encontrados na pasta: "api/helpers". As funções assíncronas dos helpers fazem a verificação dos caracteres de inputs pelo usuário, que se condizentes, são enviadas para a base de dados, caso contrário não são enviadas.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Helpers criados:
- formatemail.js (Verifica/formata o e-mail)
- formatname.js (Verifica/formata o nome)
- formatestado.js (Verifica/formata o estado)

## Como Usar/Pré-requisitos

- Node.js e npm instalados.

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/RodrigoLeee/ServiceJavascriptBackend.git
   cd ServiceJavascriptBackend
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   ```

3. **Inicie a Aplicação:**

   ```bash
   sails lift
   ```

4. **Acesse a Aplicação:**

   Abra seu navegador e acesse `http://localhost:1337`.


