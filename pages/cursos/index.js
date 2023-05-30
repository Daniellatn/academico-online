import { FiEdit, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja relamente excluir?')) {
      const cursos = getAll()
      cursos.splice(id, 1)
      window.localStorage.setItem('cursos', JSON.stringify(cursos))
      setCursos(cursos)
    }
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
          {cursos.map((item, index) => (
            <tr key={index}>
              <td className='d-flex justify-content-evenly'>
                <Link href={'/cursos/' + index} className='p-0'>
                  <FiEdit  className="text-primary"/>
                </Link>
                <span>
                  <FiTrash2 onClick={() => excluir(index)} className="text-danger " />
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