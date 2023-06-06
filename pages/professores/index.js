import { FiEdit, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";
import axios from "axios";

const index = () => {

  const [professores, setProfessores] = useState([])

  useEffect(() => {
    getAll()
  },[])

  function getAll() {
    axios.get('/api/professores').then(resultado => {
      setProfessores(resultado.data)
    })
  }

  function excluir(id) {
    if(confirm('Deseja relamente excluir?')) {
      axios.delete('/api/professores/' + id)
    }
    getAll()
  }

  return (
    <Pagina titulo="Professores">
      <Link href={'/professores/form'} className='btn btn-primary my-3'> <FiPlusCircle /> Novo</Link>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matricula</th>
            <th>Salário</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Complemento</th>
            <th>Número</th>
            <th>Bairro</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((item) => (
            <tr key={item.id}>
              <td className='d-flex justify-content-evenly'>
                <Link href={'/professores/' + item.id} className='p-0'>
                  <FiEdit  className="text-primary"/>
                </Link>
                <span>
                  <FiTrash2 onClick={() => excluir(item.id)} className="text-danger" />
                </span>
              </td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.salario}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </Pagina>
  )
}

export default index