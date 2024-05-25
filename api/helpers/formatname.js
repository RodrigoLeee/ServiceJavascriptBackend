// api/helpers/process-name.js

module.exports = {
  friendlyName: 'Process name',

  description: 'Performs data treatment on a name.',

  inputs: { //Recebe input, chamada name
    name: {
      type: 'string',
      required: true,
      description: 'The name to process',
    },
  },

  exits: { //duas saidas, sucesso e nome invalido
    success: {
      description: 'All done.',
    },
    invalidName: {
      description: 'The provided name is invalid.',
    },
  },

  fn: async function (inputs, exits) {
    const name = inputs.name.trim(); //Remove espaços em branco no inicio e no final da string

    // Verifica se nome possui de 1 a 50 caracteres
    if (name.length < 1 || name.length > 50) {
      return exits.invalidName('Nome precisa ser entre 1 a 50 caracteres.');
    }

    // Testa nome utilizando regex
    // Regex é uma sequência de caracteres que forma um padrão de pesquisa.
    // Regular expression
    // Depois aplica o regex para testar se o nome contem apenas letras, espaço, hifen e apóstrofo
    // Se regex não for TRUE, retorna erro
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    if (!nameRegex.test(name)) {
      return exits.invalidName('Nome contem caracteres não permitido.');
    }

    // Coloca em letra maiuscula a primeira letra de cada palavra
    const processedName = name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    // Retorna o nome processado
    return exits.success(processedName);
  }
};