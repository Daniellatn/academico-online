const campoObrigatorio = {
  required: '* O campo é obrigatório',
}

const cursoValidator = {
  nome: {
    required: campoObrigatorio.required,
    minLength: {
      value: 3,
      message: 'A quantidade de caracteres minima é 3'
    },
    maxLength: {
      value: 15,
      message: 'A quantidade de caracteres máxima é 15'
    }
  },
  duracao: {
    required: campoObrigatorio.required,
    maxLength: {
      value: 2,
      message: 'A quantidade de caracteres máxima é 2'
    },
    min: {
      value: 5,
      message: 'O valor mínimo é 5'
    },
    max: {
      value: 12,
      message: 'O valor mínimo é 12'
    }
  },
  modalidade: {
    required: campoObrigatorio.required,
    maxLength: {
      value: 20,
      message: 'A quantidade de caracteres minima é 20'
    }
  }
}

export default cursoValidator