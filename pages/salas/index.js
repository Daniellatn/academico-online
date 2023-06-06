import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { FiEdit, FiPlusCircle, FiTrash2 } from 'react-icons/fi'

const index = () => {

  const [salas, setSalas] = useState([])

  useEffect(() => {
    getAll()
  },[])

  function getAll() {
    axios.get('/api/salas').then(resultado => {
      setSalas(resultado.data)
    })
  }

  function excluir(id) {
    if(confirm('Deseja relamente excluir?')) {
      axios.delete('/api/salas/' + id)
    }
    getAll()
  }

  return (
    <Pagina titulo="Salas">
      <Link href={'/salas/form'} className='btn btn-primary my-3'> <FiPlusCircle /> Novo</Link>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((item) => (
            <tr key={item.id}>
              <td className='d-flex justify-content-evenly'>
                <Link href={'/salas/' + item.id} className='p-0'>
                  <FiEdit  className="text-primary"/>
                </Link>
                <span>
                  <FiTrash2 onClick={() => excluir(item.id)} className="text-danger" />
                </span>
              </td>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Pagina>
  )
}

export default index