module.exports = {

  friendlyName: 'Format email',
  description: 'Formata um e-mail.',


  inputs: {
    email: {
      type: 'string', // tipo, string
      required: true, // obrigatorio
      description: 'The email address to format' // Recebe input do email a ser formatado
    },
  },


  exits: { // Saidas no console de acordo com o resultado
    success: { // nome da saida
      description: 'Sucesso.' //Sucesso em formatar e-mail
    },
    invalidEmail: { // nome da saida
      description: 'O e-mail não é valido.' // Falha em formatar e-mail
    }
  },



  fn: async function (inputs, exits) {
    const email = inputs.email.trim(); //.trim remove espaços em branco no inicio e no final da string

    // "Regular expression", ou regex, para validar o email
    // Regex é uma sequência de caracteres que forma um padrão de pesquisa.
    // Essa padrão é usado para verificar se uma string contém o padrão de pesquisa especificado.
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

    // Testa se e-mail tem entre 1 a 320 caracteres
    // 320 e o tamanho maximo de um e-mail padrão
    // Se for menor que 1 ou maior que 320, retorna erro
    if (email.length < 1 || email.length > 320) {
      return exits.invalidEmail('Nome precisa ser entre 1 a 320 caracteres.');
    }

    // Testa se e-mail é valido utilizando padrão regex
    // Se não for valido, retorna erro
    if (!emailRegex.test(email.toLowerCase())) {
      return exits.invalidEmail('Email contem caracteres invalidos.');
    }

    // Retorna sucesso se e-mail for valido
    return exits.success(email);
  }
};