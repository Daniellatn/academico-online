const campoObrigatorio = {
  required: '* O campo é obrigatório',
}

const professorValidator = {
  nome: {
    required: campoObrigatorio.required,
  },
  cpf: {
    required: campoObrigatorio.required,
    minLength: {
      value: 11,
      message: 'A quantidade de caracteres minima é 11'
    },
    maxLength: {
      value: 11,
      message: 'A quantidade de caracteres máxima é 11'
    },
  },
  matricula: {
    required: campoObrigatorio.required,
    maxLength: {
      value: 12,
      message: 'A quantidade de caracteres minima é 12'
    }
  },
  salario: {
    required: campoObrigatorio.required,
  },
  email: {
    required: campoObrigatorio.required,
  },
  telefone: {
    required: campoObrigatorio.required,
    minLength: {
      value: 11,
      message: 'A quantidade de caracteres minima é 11'
    },
    maxLength: {
      value: 11,
      message: 'A quantidade de caracteres máxima é 11'
    },
  },
  cep: {
    required: campoObrigatorio.required,
    minLength: {
      value: 8,
      message: 'A quantidade de caracteres minima é 8'
    },
    maxLength: {
      value: 8,
      message: 'A quantidade de caracteres máxima é 8'
    },
  },
  logradouro: {
    required: campoObrigatorio.required,
  },
  complemento: {
    required: campoObrigatorio.required,
  },
  numero: {
    required: campoObrigatorio.required,
    minLength: {
      value: 1,
      message: 'A quantidade de caracteres minima é 1'
    },
    maxLength: {
      value: 4,
      message: 'A quantidade de caracteres máxima é 4'
    },
  },
  bairro: {
    required: campoObrigatorio.required,
  },
}

export default professorValidator