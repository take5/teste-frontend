# Take 5 - Teste para programador Front End

O objetivo desse teste é avaliar as competências do candidato como um desenvolvedor Front End com conhecimentos no framework **VueJS**.

## Geral
Execute um fork desse repositório para iniciar o seu trabalho. Você deve realizar todos os passos referente ao nível da vaga que a qual você está aplicando e todos os níveis anteriores (ex.: desenvolvedores pleno devem realizar todos os passos de júnior e pleno, desenvolvedores sênior devem realizar todos os passos de júnior, pleno e sênior).

O repositório deve conter um README com os passos para rodar o seu projeto e um link do mesmo em funcionamento (você pode realizar o deploy no [Vercel](https://quasar.dev/quasar-cli/developing-spa/deploying#deploying-with-vercel "Vercel"), [Heroku](https://quasar.dev/quasar-cli/developing-spa/deploying#deploying-with-heroku "Heroku"), [Surge](https://quasar.dev/quasar-cli/developing-spa/deploying#deploying-with-surge "Surge"), [Github Pages](https://quasar.dev/quasar-cli/developing-spa/deploying#deploying-on-github-pages "Github Pages") ou outro local que preferir.

O link com o repositório contendo o resultado final do seu trabalho deve ser enviado por email para alex.vieira@take5.com.br em até 2 dias úteis após o recebimento da tarefa.


## Júnior

- [ ] Deve-se desenvolver uma Single Page Application que liste os 151 Pokémons originais utilizando [VueJS](https://vuejs.org/ "Documentação VueJS") e [Quasar Framework](https://quasar.dev/ "Documentação Quasar Framework")
- [ ] A lista de Pokémons deve ser carregada utilizando a API do site https://pokeapi.co/ com a utilização do cliente HTTP [Axios](https://github.com/axios/axios "Github Axios")
- [ ] Na listagem devem ser exibidos o número do Pokémon, o nome do mesmo e um link para o seu perfil completo
- [ ] Na listagem deve haver um campo para que seja filtrado o Pokémon pelo seu nome, sem que seja feita uma nova chamada a API
- [ ] O link para o perfil completo deve ser tratado internamente pelo [Vue Router](https://router.vuejs.org/ "Documentação Vue Router")
- [ ] Na página do perfil completo devem ser exibidas informações do Pokémon que também devem ser carregadas da API


## Pleno

- [ ] A SPA deve possuir um botão para que o idioma seja alterado (português / inglês)
- [ ] O idioma inicial da aplicação deve detectar o idioma do navegador do usuário. Utilize português como idioma padrão
- [ ] A seleção do idioma deve ser armazenado em uma store do [Vuex](https://vuex.vuejs.org/ "Documentação Vuex") e essa store deve ser persistida entre sessões
- [ ] Os dados de peso (weight) e altura (height) do Pokémon devem ser localizadas. Por padrão a API entrega as informações em libras (peso) e polegadas (altura). Deve ser convertido para quilos (peso) e metros (altura), além do exibir o sinal correto na frente do valor (kg, m, lb, ft)
- [ ] Na listagem dos Pokémons deve haver filtros para que sejam exibidos apenas Pokémons de um tipo específico (normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown e shadow)
- [ ] Os tipos devem ser localizados para o idioma selecionado pelo usuário


## Sênior

- [ ] A SPA deve possuir integração com o [Firebase](https://firebase.google.com/ "FIrebase"), utlizando seu módulo de autenticação de usuários
- [ ] O usuário que não estiver autenticado deve ver um botão para criação de conta e um botão para login
- [ ] O formulário de criação de conta deve possuir os campos Nome, Email, Senha e Confirmação de Senha
- [ ] O formulário de login deve possuir os campos Email e Senha
- [ ] Todos os campos são obrigatórios e devem ser validados utilizando a biblioteca [Vuelidate](https://vuelidate.js.org/ "Documentação Vuelidate")
- [ ] Após o login o usuário deve ver um botão para realizar o logout
- [ ] A SPA deverá ter uma tela onde o usuário pode fazer a atualização de seu nome
