const campoObrigatorio = {
  required: '* O campo é obrigatório',
}

const disciplinaValidator = {
  nome: {
    required: campoObrigatorio.required,
  },
  curso: {
    required: campoObrigatorio.required,
  },
}

export default disciplinaValidator