Projeto desenvolvido em 2018 durante o programa de desenvolvimento da DBC Company (https://www.dbccompany.com.br/)

# O jogo da forca

### Apenas um maravilhoso jogo, impolgante e divertido para jogas com os amigos.

---

### Preparendo o ambiente:

**Pacotes que devem estar instalodos "globalmente" no seu sistema. Para isso rose estes comandos:**

1. vue-cli: `npm install -g @vue/cli`
2. json-server: `npm install -g json-server`

Obs: Caso já possua tais pacotes não é necessário instalar novamente

**Para garantir que possui todas as dependencias instaladas e que o jogo execute corretamente.**
**Execute estes comandos:**

1. Atravéz do terminal entre na pasta app-jogo-da-forca: `cd app-jogo-da-forca`
2. Execute o comando: `npm install`

---

### Para iniciar o servidor e rodar o jogo siga os passos abaixo:

1. Atravéz do terminal entre na pasta db `cd app-jogo-da-forca/db`
2. Incie o servidor com o comando `json-server --watch db.json`
3. Atravéz de **OUTRO** terminal entre na pasta raiz do jogo `cd app-jogo-da-forca`
2. Incie o jogo com o comando `npm run serve`
5. Após o comando iniciar corretamente, entre no navegador no link [http://localhost:8080](http://localhost:8080)
