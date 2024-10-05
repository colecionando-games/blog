module.exports = function (plop) {
  plop.setGenerator('game', {
    description: 'application game database',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Digite o nome do jogo'
      },
      {
        type: 'input',
        name: 'releaseYear',
        message: 'Ano de lançamento'
      },
      {
        type: 'input',
        name: 'developer',
        message: 'Desenvolvido por'
      },
      {
        type: 'list',
        name: 'firstPlatform',
        message: 'Escolha uma plataforma',
        choices: [
          'sms', 'md', '32x', 'sega-cd', 'saturn', 'dc', 'gg',
          'nes', 'snes', 'n64', 'gamecube', 'wii', 'wiiu', 'switch',
          'gb', 'gbc', 'gba', 'nds', '3ds', 
          'ps1', 'ps2', 'ps3', 'ps4', 'ps5', 'psp', 'ps-vita', 
          'xbox-360', 'xbox-one', 'xbox-series'
        ]
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../database/{{kebabCase name}}.json',
        templateFile: 'templates/game.tsx.hbs'
      }
    ]
  })
}