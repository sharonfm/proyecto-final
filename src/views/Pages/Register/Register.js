import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { auth,generateUserDocument } from "../../../services/firebase";

//import { purple } from '@material-ui/core/colors';



const Register = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [username, setUser] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
      event.preventDefault();
      try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        generateUserDocument(user, {email,username});
      }
      catch(error){
        setError('Error Signing up with email and password');
      }

      setEmail("");
      setPassword("");
      
    };
    const onChangeHandler=(event)=> {
      const { name, value } = event.currentTarget;
      if (name === "userEmail") {
        setEmail(value);
      } else if (name === "userPassword") {
        setPassword(value);
      } else if (name =="username") {
        setUser(value)
      } else if (name == "confirmPassword") {
        setConfirmPassword(value)
      }

    }
  return (
    <div className="app flex-row align-items-center">
      <Container >
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="text-white  py-5 d-md-down-none" style={{ backgroundColor: '#43425D' }}>
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
                    <h1 style={{ color: '#43425D' }}>G&G TI</h1>
                    <p className="text-muted">Registra aquí una nueva cuenta</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name = "username" placeholder="Usuario" value={username} autoComplete="username" onChange={(event)=>onChangeHandler(event)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" name = "userEmail" value={email} placeholder="Correo electrónico" autoComplete="email" onChange={(event)=>onChangeHandler(event)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name = "userPassword" value={password} placeholder="Contraseña" autoComplete="new-password" onChange={(event)=>onChangeHandler(event)} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name = "confirmPassword" value={confirmPassword} placeholder="Confirmar contraseña" autoComplete="new-password" onChange={(event)=>onChangeHandler(event)} />
                    </InputGroup>
                    <Link to="/login">
                      <Button style={{ backgroundColor: '#43425D' }} onClick = {event => {createUserWithEmailAndPasswordHandler(event, email, password);}} className="mt-3"><medium style={{ color: '#F2F2F2' }}>Registrarme</medium></Button>
                    </Link>
                  </Form>
                </CardBody>
                <CardFooter align="center">
                  <Link to="/">
                    <Col>
                      <Button style={{ color: '#43425D' }} color="link" className="px-0" >Ya tienes una cuenta? Ingresa aquí!</Button>
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

export default Register;
