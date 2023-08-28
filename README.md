Backend

- Restrições

    - Liberação do IP para conexão com o banco de dados. Ou criação de cluster MongoDB com os seguintes requisitos:

        - Database: oEsporte
        - Collections: local-items, sequences, users

    - Criação do arquivo secret na pasta "conf" com as secrets para conexão no banco de dados e secret para geração e validação de token JWT (um secret alternativo foi submetido via moodle).

- Para executar

Necessário ter o nodejs e npm instalados. Basta executar os seguintes comandos.

    - npm install: Download de dependencias

    - npm install ts-node: Caso o comando acima ainda não tenha adicionado a dependencia.

    - npm install nodemon: Caso o comando acima ainda não tenha adicionado a dependencia.

    - npm run watch: Executar o servidor



Frontend

- Para executar

Necessário ter o nodejs e npm instalados. Basta executar os seguintes comandos.

    - npm install: Download de dependencias

    - npm install -g @angular/cli: Adicionar o Angular caso não seja instalado com o comando anterior.

    - ng add @angular/material: Adicionar o bootstrap caso não seja instalado com o comando anterior.

    - ng s: Executar o projeto.