import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
//import { purple } from '@material-ui/core/colors';



class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container >
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
              <Card className="text-white bg-primary py-5 d-md-down-none">
                  <CardBody className="text-center">
                    <div>
                      <h2>Únete a nosotros!</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    </div>
                  </CardBody>
                </Card>

                <Card className="p-4" >
                <CardBody>
                  <Form align="center">
                    <h1>Register</h1>
                    <p className="text-muted">Registra aquí una nueva cuenta</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Usuario" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Correo electrónico" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Contraseña" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Confirmar contraseña" autoComplete="new-password" />
                    </InputGroup>
                    <Link to="/login">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Registrarme</Button>
                      </Link>
                  </Form>
                </CardBody>
                <CardFooter align="center">
                  <Link to= "/login">
                    <Col>
                      <Button color="link" className="px-0">Ya tienes una cuenta? Ingresa aquí!</Button>
                    </Col>
                  </Link>
                </CardFooter>
              </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
