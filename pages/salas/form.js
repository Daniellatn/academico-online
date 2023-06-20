import Pagina from '@/components/Pagina'
import salaValidator from '@/validators/salaValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiArrowLeftCircle, FiSave } from 'react-icons/fi'
import { mask } from 'remask'

const form = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const { push } = useRouter()

  function salvar(dados) {
    axios.post('/api/salas', dados)
    push('/salas')
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }
  
  return (
    <Pagina titulo="Cadastro de salas">
      <Form className='my-3'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register('nome', salaValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="capacidade">
          <Form.Label>Capacidade</Form.Label>
          <Form.Control type="text" mask='999' {...register('capacidade', salaValidator.capacidade)} onChange={handleChange} />
          {
            errors.capacidade &&
            <small className='text-danger'>{errors.capacidade.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Control type="text" {...register('tipo', salaValidator.tipo)} />
          {
            errors.tipo &&
            <small className='text-danger'>{errors.tipo.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className='btn btn-primary p-2 px-4' href={'/salas'}>
            <FiArrowLeftCircle className='me-2 mb-1'/>
            Voltar
          </Link>
          <Button className='p-2 px-4 ms-2 align-items-center' variant='success' onClick={handleSubmit(salvar)}>
            <FiSave className='me-2 mb-1'/>
            Salvar
          </Button>
        </div>
      </Form>

    </Pagina>
  )
}

export default form