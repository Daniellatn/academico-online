import Pagina from '@/components/Pagina'
import alunoValidator from '@/validators/alunoValidator'
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
    axios.post('/api/alunos', dados)
    push('/alunos')
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(value, mascara))
  }

  return (
    <Pagina titulo="Cadastro de alunos">
      <Form className='my-3'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register('nome', alunoValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" mask='999.999.999-99' {...register('cpf', alunoValidator.cpf)} onChange={handleChange}/>
          {
            errors.cpf &&
            <small className='text-danger'>{errors.cpf.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" {...register('matricula', alunoValidator.matricula)} />
          {
            errors.matricula &&
            <small className='text-danger'>{errors.matricula.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text" {...register('email', alunoValidator.email)} />
          {
            errors.email &&
            <small className='text-danger'>{errors.email.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" mask='(99) 99999-9999' {...register('telefone', alunoValidator.telefone)} onChange={handleChange}/>
          {
            errors.telefone &&
            <small className='text-danger'>{errors.telefone.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" mask='99.999-999' {...register('cep', alunoValidator.cep)} onChange={handleChange} />
          {
            errors.cep &&
            <small className='text-danger'>{errors.cep.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" {...register('logradouro', alunoValidator.logradouro)} />
          {
            errors.logradouro &&
            <small className='text-danger'>{errors.logradouro.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" {...register('complemento', alunoValidator.complemento)} />
          {
            errors.complemento &&
            <small className='text-danger'>{errors.complemento.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número</Form.Label>
          <Form.Control type="text" {...register('numero', alunoValidator.numero)} />
          {
            errors.numero &&
            <small className='text-danger'>{errors.numero.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" {...register('bairro', alunoValidator.bairro)} />
          {
            errors.bairro &&
            <small className='text-danger'>{errors.bairro.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className='btn btn-primary p-2 px-4' href={'/disciplinas'}>
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