const validations = {
  name: (data) => {
    if (data && data.length >= 4) {
      return { valid: true, showError: false };
    }
    return { valid: false, text: 'Nome deve ter ao menos 4 caracteres.', showError: true };
  },
  newEmail: (data) => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/);
    if (data && emailRegex.test(data)) {
      return { valid: true, showError: false };
    }
    return { valid: false, text: 'E-mail inválido.', showError: true };
  },
  newPassword: (data) => {
    if (data && data.length >= 6) {
      return { valid: true, showError: false };
    }
    return { valid: false, text: 'Senha deve ter ao menos 6 caracteres.', showError: true };
  },
  passwordConfirmation: (data) => {
    if (data) {
      return { valid: true, showError: false };
    }

    return { valid: false, text: 'As duas senhas devem ser iguais.', showError: true };
  },
};

export default validations;
