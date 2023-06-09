import { FiEdit, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from "axios";

const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/cursos').then(resultado => {
      setCursos(resultado.data)
    })
  }

  function excluir(id) {
    if(confirm('Deseja relamente excluir?')) {
      axios.delete('/api/cursos/' + id)
    }
    getAll()
  }

  function editar() {
    console.log('Editar')
  }

  return (
    <Pagina titulo="Cursos">
      <Link href={'/cursos/form'} className='btn btn-primary my-3'> <FiPlusCircle /> Novo</Link>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Curso</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item) => (
            <tr key={item.id}>
              <td className='d-flex justify-content-evenly'>
                <Link href={'/cursos/' + item.id} className='p-0'>
                  <FiEdit  className="text-primary"/>
                </Link>
                <span>
                  <FiTrash2 onClick={() => excluir(item.id)} className="text-danger " />
                </span>
              </td>
              <td>{item.nome}</td>
              <td className="text-center">{item.duracao}</td>
              <td className="text-center">{item.modalidade}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Pagina>
  )
}

export default index