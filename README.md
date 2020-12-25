## Practical test using React Native

## Teste prático usando o React Native

## Screen Preview

## Preview da tela

![Hook Preview](https://raw.githubusercontent.com/natanaeldiego/teste-pratico/master/img/Screenshot.gif)

## Install at local

## Instale no local

Open Terminal, then type command:
Abra o Terminal e digite o comando:

> git clone https://github.com/natanaeldiego/teste-pratico.git

Go to project folder:
Vá para a pasta do projeto:

> cd teste-pratico

Type following command:
Digite o seguinte comando:

> npm install or yarn

You must have ANDROID_HOME environtment variable, to check if you already have, type in your terminal:
Você deve ter a variável de ambiente ANDROID_HOME, para verificar se você já possui, digite seu terminal:

> echo \$ANDROID_HOME

If blank, you can read at / Se estiver em branco, você pode ler AQUI [HERE](https://goo.gl/XSBmwE)

Enter the folder: src/services and open the api.ts file, after it opens replace: "IP-SERVER" with the server's ip
where the backend is working.

Entre na pasta: src/services e abra o arquivo api.ts, depois dele aberto substitua: "IP-SERVER" pelo ip do servidor
aonde o back-end está funcionando.

const apiServer = axios.create({
baseURL: 'IP-SERVER:3000/',
});

Link to the BACK-END project / Link para o projeto BACK-END AQUI [HERE](https://github.com/natanaeldiego/teste-pratico-back-end)

At this point, you should be able to run the project.
Neste ponto, você deve poder executar o projeto.
To run your project on your device/emulator at Debug configuration, type:
Para executar seu projeto no seu dispositivo / emulador na configuração Debug, abra primeiramente duas abas:

Android version
Versão android

Tab One
Aba um

> 1° - yarn start --reset-cache

Tab Two
Aba dois

> 2° - npx react-native run-android

Or if you want to run at iOS simulator, run:
Ou se você deseja executar no simulador do iOS, execute:

> 1° - cd ios/ && npx pod-install

Inside the project's root folder
Dentro da pasta raiz do projeto

> 2° - npx react-native run-ios

If you have error message like / Se você tiver uma mensagem de erro como `Execution failed for task ':app:dexDebug'.` run this on your terminal:
execute isto no seu terminal:

> npx react-native run-android-clean

## Available Command

## Comandos disponíveis

| npm or yarn                  | Description / Descrição                         |
| ---------------------------- | ----------------------------------------------- |
| yarn start --reset-cache     | Run server                                      |
| npx react-native run-ios     | Run iOS project / Execute o projeto             |
| npx react-native run-android | Run Android project / Execute o projeto         |
| cd ios/ && npx pod-install   | Installing dependencies / Instalar dependências |

## Copyright and License

Copyright 2013-2020 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-resume/blob/gh-pages/LICENSE) license.
