import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiArrowLeftCircle, FiSave } from 'react-icons/fi'

const form = () => {

  const { register, handleSubmit, setValue } = useForm()
  const { push, query } = useRouter()

  useEffect(() => {
    if (query.idCurso) {
      axios.get('/api/cursos/' + query.idCurso).then(resultado => {
        const curso = resultado.data
        
        for(let atributo in curso) {
          setValue(atributo, curso[atributo])
        }
      })
    }
  }, [query.idCurso])

  function salvar(dados) {
    axios.put('/api/cursos/' + dados.id, dados)
    push('/cursos')
  }

  return (
    <Pagina titulo="Curso">
      <Form className='my-3'>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register('nome')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control type="text" {...register('duracao')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control type="text" {...register('modalidade')} />
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