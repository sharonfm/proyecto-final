import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

//import { purple } from '@material-ui/core/colors';



class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container >
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
              <Card className="text-white  py-5 d-md-down-none" style={{backgroundColor:'#43425D'}}>
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
                    <h1 style={{color:'#43425D'}}>G&G TI</h1>
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
                        <Button style={{backgroundColor:'#43425D'}} className="mt-3">Registrarme</Button>
                    </Link>
                  </Form>
                </CardBody>
                <CardFooter align="center">
                  <Link to= "/login">
                    <Col>
                    <Button style={{color:'#43425D'}} color="link" className="px-0" >Ya tienes una cuenta? Ingresa aquí!</Button>
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
