import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Input,
  Label,
  Row,
} from 'reactstrap';

const Forms3 = () => {
  //Preguntas de BAI
  const [questionGroup] = useState([
    "1. Calificación para el establecimiento de una oficina de programas o una oficina de gestión de proyectos (PMO) que mantenga una estrategia estándar para la gestión de programas y proyectos en toda la organización.",
    "2. Califique la planificación, distribución y demás cargos necesarios y requeridos en los proyectos para lograr los resultados del programa, conforme a la revisión y aprobaciones de financiación en cada revisión de cambio de fase.",
    "3. En que grado se encuentra el establecimiento de una rendición de cuentas y procesos para garantizar que la empresa siga optimizando valor del servicio, activo o recursos.",
    "4. Califique la definición e implementación de un procedimiento para la definición y el mantenimiento de los requisitos, así como un repositorio de requisitos que sean apropiados para el tamaño, complejidad, objetivos y riesgo de la iniciativa que la empresa considera llevar a cabo.",
    "5. Indique el grado con el cual se dentifica el riesgo de requisitos de calidad, funcionales y técnica.",
/*  "6. Pregunta",
    "7. Pregunta",
    "8. Pregunta",
    "9. Pregunta",
    "10. Pregunta",
    "11. Pregunta",
    "12. Pregunta", 
    "13. Pregunta",
    "14. Pregunta",
    "15. Pregunta",
    "16. Pregunta",
    "17. Pregunta",
    "18. Pregunta",
    "19. Pregunta",
    "20. Pregunta",
    "21. Pregunta",
    "22. Pregunta",
    "23. Pregunta",
    "24. Pregunta",*/
  ])
  const [optionsGroup] = useState([
    "NO: (Menos del 15%)",
    "PARCIALMENTE (Entre el 15% y el 50%)",
    "LARGAMENTE (Entre el 50% y el 85%)",
    "COMPLETAMENTE (Más del 85%)",
  ])

  const [answers, setAnswers] = useState([])

  const history = useHistory()

  const handleChange = (event, index) => {
    const tempAnswers = Object.assign({}, answers);
    tempAnswers[index] = event.target.value;
    setAnswers(tempAnswers);
    console.log(tempAnswers)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem("p3", JSON.stringify(answers))
    history.push("/base/form4")

  }


  return (
    <div className="animated fadeIn">
      <Row style={{ justifyContent: 'center' }}>
        <Col xs="12" md="10">
          <Card>
            <CardHeader align="center" style={{ color: '#43425D' }}>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                  </Link>
                </Pagination>
              </Row>
              <h1>Revisión de estructura TI </h1>
              <h1>Componentes del dominio "BAI"</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}  encType="multipart/form-data" className="form-horizontal">
                <FormGroup >
                  <p>En este espacio se estará explicando de forma detallada el proceso que se estará evaluando.
                  Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocerán los criterios de evaluación para cada área.</p>
                </FormGroup>

                {questionGroup.map((question, index1) => {
                  return (
                    <FormGroup key={index1} >
                      <Card className="card-accent-primary" >
                        <CardBody>
                          <Row>
                            <h5 style={{ color: '#43425D' }}> {question}</h5>
                          </Row>
                          {optionsGroup.map((option, index) => {
                            return (
                              <FormGroup key={index} check className="radio">
                                <Input onChange={(event) => handleChange(event, index1)} checked={answers[index1] === index + ""} className="form-check-input" type="radio" value={index} required />
                                <Label check className="form-check-label">{option}</Label>
                              </FormGroup>
                            )
                          }
                          )}

                        </CardBody>
                      </Card>
                    </FormGroup>
                  )
                })}

              
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Enviar</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reiniciar</Button>
              </Form>
            </CardBody>
            <CardFooter>
            <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                  </Link>
                </Pagination>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>

    </div>
  );

}

export default Forms3;