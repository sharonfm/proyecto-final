import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


// login() {

// }

// signUp() {

// }


class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="text-white  py-5 d-md-down-none" style={{ width: '50%' },{backgroundColor: '#43425D'}}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Únete a nosotros!</h2>
                      <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1} onClick = {this.signUp} >Regístrate ahora!</Button>
                      </Link>
                      <Row style={{justifyContent:'center'}}>
                        <Link to="/register">
                          <Button className="mt-3"  tabIndex={-1} style={{backgroundColor:'#F2F2F2'}}>Regístrate ahora!</Button>
                        </Link>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1 style={{color:'#43425D'}} align="center">G&G TI</h1>
                      <p align="center" className="text-muted">Bienvenido! Inicie sesión con tu usuario y contraseña.</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row style={{justifyContent: 'center'}}>
                        <Link to="/base/info">
<<<<<<< HEAD
                          <Col xs="6">
                            <Button color="primary" className="px-4" onClick = {this.login}>Ingresar </Button>
=======
                          <Col xs="6" >
                            <Button className="px-4" tabIndex={-1}  style={{backgroundColor:'#43425D'}}>Ingresar </Button>
>>>>>>> 99f3557b064132bbb07e41e316a0485942ad6747
                          </Col>
                        </Link>
                        <Col xs="6" className="text-right">
                          <Button style={{color:'#43425D'}} color="link" className="px-0" >Olvidé mi contraseña</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
