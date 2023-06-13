const campoObrigatorio = {
  required: '* O campo é obrigatório',
}

const salaValidator = {
  nome: {
    required: campoObrigatorio.required,
  },
  capacidade: {
    required: campoObrigatorio.required,
    maxLength: {
      value: 3,
      message: 'A quantidade de caracteres máxima é 3'
    },
    max: {
      value: 100,
      message: 'O valor mínimo é 100'
    }
  },
  tipo: {
    required: campoObrigatorio.required,
  },
}

export default salaValidator