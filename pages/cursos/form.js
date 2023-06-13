import Pagina from '@/components/Pagina'
import cursoValidator from '@/validators/cursoValidator'
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
    axios.post('/api/cursos', dados)
    push('/cursos')
  }

  

  return (
    <Pagina titulo="Cadastro de curso">
      <Form className='my-3'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control isInvalid={errors.duracao} type="text" {...register('duracao', cursoValidator.duracao)} />
          {
            errors.duracao &&
            <small className='text-danger'>{errors.duracao.message}</small>
          }

        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control isInvalid={errors.modalidade} type="text" {...register('modalidade', cursoValidator.modalidade)} />
          {
            errors.modalidade &&
            <small className='text-danger'>{errors.modalidade.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className='btn btn-primary p-2 px-4' href={'/cursos'}>
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