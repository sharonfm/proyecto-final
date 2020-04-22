import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../services/firebase";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card
                className="text-white  py-5 d-md-down-none"
                style={{ width: "50%", backgroundColor: "#43425D" }}
              >
                <CardBody className="text-center">
                  <div>
                    <h2>Únete a nosotros!</h2>
                    
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Row style={{ justifyContent: "center" }}>
                      <Link to="/register">
                        <Button
                          className="mt-3"
                          tabIndex={-1}
                          style={{ backgroundColor: "#F2F2F2" }}
                        >
                          <medium style={{ color: "#43425D" }}>
                            {" "}
                            Regístrate ahora!
                          </medium>
                        </Button>
                      </Link>
                    </Row>
                  </div>
                </CardBody>
              </Card>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1 style={{ color: "#43425D" }} align="center">
                      G&G TI
                    </h1>
                    <p align="center" className="text-muted">
                      Bienvenido! Inicie sesión con tu usuario y contraseña.
                    </p>
                    {error ? <span>{error}</span> : null}
                    <InputGroup className="mb-3">

                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        name="userEmail"
                        value={email}
                        onChange={(event) => onChangeHandler(event)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="userPassword"
                        value={password}
                        onChange={(event) => onChangeHandler(event)}
                      />
                    </InputGroup>
                    <Row style={{ justifyContent: "center" }}>
                      <Link to="/base/info">
                        <Col xs="6">
                          <Button
                            className="px-4"
                            onClick={(event) => {
                              signInWithEmailAndPasswordHandler(
                                event,
                                email,
                                password
                              );
                            }}
                            tabIndex={-1}
                            style={{ backgroundColor: "#43425D" }}
                          >
                            {" "}
                            <medium style={{ color: "#F2F2F2" }}>
                              Ingresar
                            </medium>{" "}
                          </Button>
                        </Col>
                      </Link>
                      <Col xs="6" className="text-right">
                        <Button
                          style={{ color: "#43425D" }}
                          color="link"
                          className="px-0"
                        >
                          Olvidé mi contraseña
                        </Button>
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
};

export default Login;