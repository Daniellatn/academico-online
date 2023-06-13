import Pagina from '@/components/Pagina'
import semestreValidator from '@/validators/semestreValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiArrowLeftCircle, FiSave } from 'react-icons/fi'

const form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/semestres', dados)
    push('/semestres')
  }

  return (
    <Pagina titulo="Cadastro de semestres">
      <Form className='my-3'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register('nome', semestreValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="dataInicio">
          <Form.Label>Data Inicio</Form.Label>
          <Form.Control type="text" {...register('dataInicio', semestreValidator.dataInicio)} />
          {
            errors.dataInicio &&
            <small className='text-danger'>{errors.dataInicio.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="dataFim">
          <Form.Label>Data Fim</Form.Label>
          <Form.Control type="text" {...register('dataFim', semestreValidator.dataFim)} />
          {
            errors.dataFim &&
            <small className='text-danger'>{errors.dataFim.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className='btn btn-primary p-2 px-4' href={'/semestres'}>
            <FiArrowLeftCircle className='me-2 mb-1' />
            Voltar
          </Link>
          <Button className='p-2 px-4 ms-2 align-items-center' variant='success' onClick={handleSubmit(salvar)}>
            <FiSave className='me-2 mb-1' />
            Salvar
          </Button>
        </div>
      </Form>

    </Pagina>
  )
}

export default form