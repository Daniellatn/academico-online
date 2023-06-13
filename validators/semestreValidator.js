const campoObrigatorio = {
  required: '* O campo é obrigatório',
}

const semestreValidator = {
  nome: {
    required: campoObrigatorio.required,
  },
  dataInicio: {
    required: campoObrigatorio.required,
    maxLength: {
      value: 8,
      message: 'A quantidade de caracteres máxima é 8'
    },
  },
  dataFim: {
    required: campoObrigatorio.required,
    maxLength: {
      value: 8,
      message: 'A quantidade de caracteres máxima é 8'
    },
  },
}

export default semestreValidator