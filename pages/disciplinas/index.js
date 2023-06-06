import { FiEdit, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from "axios";

const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data)
    })
  }

  function excluir(id) {
    if(confirm('Deseja relamente excluir?')) {
      axios.delete('/api/disciplinas/' + id)
    }
    getAll()
  }

  return (
    <Pagina titulo="Disciplina">
      <Link href={'/disciplinas/form'} className='btn btn-primary my-3'> <FiPlusCircle /> Novo</Link>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Disciplina</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item) => (
            <tr key={item.id}>
              <td className='d-flex justify-content-evenly'>
                <Link href={'/disciplinas/' + item.id} className='p-0'>
                  <FiEdit  className="text-primary"/>
                </Link>
                <span>
                  <FiTrash2 onClick={() => excluir(item.id)} className="text-danger" />
                </span>
              </td>
              <td>{item.nome}</td>
              <td className="text-center">{item.curso}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Pagina>
  )
}

export default index