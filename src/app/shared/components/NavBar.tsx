import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary" id="navBar">
      <Container>
        <Navbar.Collapse>
          <Navbar.Brand href="/">DevLearn</Navbar.Brand>
          <NavDropdown title="Categorias" id="basic-nav-dropdown" className="mx-3">
            <NavDropdown.Item href="/categories">Mostrar Categorias</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/categories/new">Criar Categoria</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Cursos" id="basic-nav-dropdown" className="mx-3">
            <NavDropdown.Item href="/courses">Mostrar Cursos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/courses/new">Criar Curso</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control type="text" placeholder="Pesquisar" className=" mr-sm-2" />
              </Col>
              <Col xs="auto">
                <Button variant="outline-primary">Enviar</Button>
              </Col>
            </Row>
          </Form>

          {/* <Navbar.Text className="ms-4">
            Bem vindo, <Link to="/users/3">Fulano</Link>
          </Navbar.Text> */}

          <Link className="mx-2" to="/login">
            Login
          </Link>
          <Link className="mx-2" to="/signup">
            Registrar
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
