import Pagina from '@/components/Pagina'
import disciplinaValidator from '@/validators/disciplinaValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiArrowLeftCircle, FiSave } from 'react-icons/fi'

const form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { push } = useRouter()

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    getCursos()
  }, [])

  function getCursos() {
    axios.get('/api/cursos').then(resultado => {  
      setCursos(resultado.data)
    })
    console.log(errors)
  }

  function salvar(dados) {
    axios.post('/api/disciplinas', dados)
    push('/disciplinas')
  }

  return (
    <Pagina titulo="Cadastro de disciplina">
      <Form className='my-3'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register('nome', disciplinaValidator.nome)} />
          {
            errors.nome &&
            <small className='text-danger'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Select id="selectCurso" {...register('curso', disciplinaValidator.curso)}>
            <option value=''>Selecione</option>
            {cursos.map((item) => (
              <option key={item.id} value={item.nome}>{item.nome}</option>
            ))}
          </Form.Select>
          {
            errors.curso &&
            <small className='text-danger'>{errors.curso.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Link className='btn btn-primary p-2 px-4' href={'/disciplinas'}>
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