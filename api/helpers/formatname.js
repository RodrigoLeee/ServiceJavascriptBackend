// api/helpers/process-name.js

module.exports = {
  friendlyName: 'Process name',

  description: 'Performs data treatment on a name.',

  inputs: {
    name: {
      type: 'string',
      required: true,
      description: 'The name to process',
    },
  },

  exits: {
    success: {
      description: 'All done.',
    },
    invalidName: {
      description: 'The provided name is invalid.',
    },
  },

  fn: async function (inputs, exits) {
    const name = inputs.name.trim();

    // Validation: Ensure name meets length requirements
    if (name.length < 1 || name.length > 50) {
      return exits.invalidName('Nome precisa ser entre 1 a 50 caracteres.');
    }

    // Validation: Allow only permissible characters (letters, hyphens, apostrophes, spaces)
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    if (!nameRegex.test(name)) {
      return exits.invalidName('Nome contem caracteres não permitido.');
    }

    // Normalization: Capitalize the first letter of each word
    const processedName = name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    // Return the processed name
    return exits.success(processedName);
  }
};