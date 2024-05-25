module.exports = {

  friendlyName: 'Format email',
  description: 'Formata um e-mail.',


  inputs: {
    email: {
      type: 'string', //tipo, string
      required: true, //obrigatorio
      description: 'The email address to format' //Recebe input do email a ser formatado
    },
  },


  exits: { //Saidas no console de acordo com o resultado
    success: {
      description: 'Sucesso.' //Sucesso em formatar e-mail
    },
    invalidEmail: { 
      description: 'O e-mail não é valido.' //Falha em formatar e-mail
    }
  },



  fn: async function (inputs, exits) {
    const email = inputs.email.trim();

    // Regular expression for validating an email address
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

    if (email.length < 1 || email.length > 320) {
      return exits.invalidEmail('Nome precisa ser entre 1 a 320 caracteres.');
    }

    if (!emailRegex.test(email.toLowerCase())) {
      return exits.invalidEmail('Email contem caracteres invalidos.');
    }

    // Return the validated email
    return exits.success(email);
  }
};