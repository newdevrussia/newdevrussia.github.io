# Сборка веб-сценария на примере webpack и moment.js

Решение находится по адресу https://norzserge.github.io/itmo-tasks/webpack-moment/
Исходный код https://github.com/norzserge/itmo-tasks/tree/master/webpack-moment

Команды:

- установка Webpack `yarn -D webpack webpack-CLI`
- установка moment.js `yarn add moment`
- сборка бандла `yarn webpack . -o ./bundle.js` , где `.` символизирует исходный файл index.js, `-o` это output, т.е. вывод в файл `./bundle.js`, куда сольется moment.js и сам скрипт
