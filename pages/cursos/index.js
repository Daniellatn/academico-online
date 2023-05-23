import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

const index = () => {
  
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(JSON.parse(window.localStorage.getItem('cursos')) || [])
  }, [])

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
          {cursos.map((item, index) => (
            <tr key={index}>
              <td >
                <FiTrash2 className="text-danger" />
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