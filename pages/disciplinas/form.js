import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiArrowLeftCircle, FiSave } from 'react-icons/fi'

const form = () => {

  const { register, handleSubmit } = useForm()
  const { push } = useRouter()

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    getCursos()
  }, [])

  function getCursos() {
    axios.get('/api/cursos').then(resultado => {
      console.log(resultado.data)
      setCursos(resultado.data)
    })
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
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Select id="selectCurso" {...register('curso')}>
            <option>Selecione</option>
            {cursos.map((item) => (
              <option>{item.nome}</option>
            ))}
          </Form.Select>
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