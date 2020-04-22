import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  CardGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  auth,
  generateUserDocument,
  firebase,
} from "../../../services/firebase";

//import { purple } from '@material-ui/core/colors';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        const userRef = db.collection("users").add({
          userEmail: email,
          username: userName,
        });
      // generateUserDocument(user, {email, userName});
    } catch (error) {
      setError("Error Signing up with email and password");
    }
    setEmail("");
    setPassword("");
    setUserName("");
    setConfirmPassword("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
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
                style={{ backgroundColor: "#43425D" }}
              >
                <CardBody className="text-center">
                  <div>
                    <h2>Únete a nosotros!</h2>
                    <p>
                    Mediante esta plataforma te ayudaremos a conocer y calificar todos 
                    los procesos que puedes tener en el dpto de TI de tu empresa. Registrate, ingresa y actúa!
                    </p>
                  </div>
                </CardBody>
              </Card>

              <Card className="p-4">
                <CardBody>
                  <Form align="center">
                    <h1 style={{ color: "#43425D" }}>G&G TI</h1>
                    <p className="text-muted">Registra aquí una nueva cuenta</p>
                    {error ? <span>{error}</span> : null}

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="userName"
                        placeholder="Usuario"
                        value={userName}
                        autoComplete="userName"
                        onChange={(event) => onChangeHandler(event)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="userEmail"
                        value={email}
                        placeholder="Correo electrónico"
                        autoComplete="email"
                        onChange={(event) => onChangeHandler(event)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="userPassword"
                        value={password}
                        placeholder="Contraseña"
                        autoComplete="new-password"
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
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirmar contraseña"
                        autoComplete="new-password"
                        onChange={(event) => onChangeHandler(event)}
                      />
                    </InputGroup>
                    <Link to="/login">
                      <Button
                        style={{ backgroundColor: "#43425D" }}
                        onClick={(event) =>
                          createUserWithEmailAndPasswordHandler(
                            event,
                            email,
                            password
                          )
                        }
                        className="mt-3"
                      >
                        <medium style={{ color: "#F2F2F2" }}>
                          Registrarme
                        </medium>
                      </Button>
                    </Link>
                  </Form>
                </CardBody>
                <CardFooter align="center">
                  <Link to="/">
                    <Col>
                      <Button
                        style={{ color: "#43425D" }}
                        color="link"
                        className="px-0"
                      >
                        Ya tienes una cuenta? Ingresa aquí!
                      </Button>
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
};

export default Register;