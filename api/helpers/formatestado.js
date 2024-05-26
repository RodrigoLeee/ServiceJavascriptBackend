module.exports = {


  friendlyName: 'Check state abbreviation',


  description: 'Transforms input to uppercase and checks if it matches any Brazilian state abbreviation',


  inputs: {
    abbreviation: {
      type: 'string', //Precisa ser string
      required: true, 
      description: 'The state abbreviation to check' //Descrição do input
    }
  },


  exits: {
    success: { // Saidas no console de acordo com o resultado - sucesso
      description: 'Is valid abbreviation',
    },
    invalidState: { // Saidas no console de acordo com o resultado - falha
      oescription: 'Abbreviation not valid',
    }
  },


  fn: async function (inputs, exits) {
    // List of Brazilian state abbreviations
    const stateAbbreviations = [ // Lista de abreviações de estados brasileiros para serem checados
      'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
      'SP', 'SE', 'TO'
    ];

    // Transforma input em letra maisucula
    const uppercasedAbbreviation = inputs.abbreviation.toUpperCase(); //Coloca input em letra maiuscula

    // Verficia se abreviação do usuário corresponde a lista chamada "stateAbbreviations"
    const isValid = stateAbbreviations.includes(uppercasedAbbreviation); 

    // Retorna resultado ou de sucesso, sendo a abreviação válida, ou de falha, sendo uma mensagem no console.
    if (isValid) {
      return exits.success(uppercasedAbbreviation);
    }
    else if (!isValid) {
      return exits.invalidState("O estado não é válido.");
    }
  }


};