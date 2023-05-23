import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const NavbarPrincial = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Acedemico Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/">Disciplinas</Nav.Link>
            <Nav.Link href="/">Alunos</Nav.Link>
            <Nav.Link href="/">Professores</Nav.Link>
            <Nav.Link href="/">Salas</Nav.Link>
            <Nav.Link href="/">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarPrincial