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

const Forms2 = () => {
  //Preguntas de APO
  const [questionGroup] = useState([
    "1. Califique el conocimiento de la visión, dirección y estrategia empresarial, así como el contexto empresarial actual y sus desafíos.",
    "2. ¿En que grado se encuentra la comprobación regular de la adecuación y eficacia de las estructuras organizativas?",
    "3. ¿Que porcentaje se aplica prácticas de gestión de la calidad para actualizar el proceso?",
    "4. ¿Que porcentaje de entendimiento cumplen las metas y objetivos estratégicos empresariales actuales? Teniendo en cuenta el proceso de planificación estratégico que garantiza que se aprovechen las oportunidades de la arquitectura empresarial de TI para el desarrollo del plan estratégico.",
    "5. Indique el grado de manutención de un repositorio  de arquitectura que contiene estándares, componentes reutilizables, artefactos de modelado, relaciones, dependencias y visualizaciones que permiten la uniformidad de la organización y el mantenimiento de la arquitectura.",
 /* "6. Califique la identificación de las prioridades de la arquitectura empresarial. Teniendo en cuenta la alineación de las prioridades con los factores que proporcionan valor, definir y recopilar métricas de valor y la medición y comunicación del valor de la arquitectura empresarial.",
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
    "24. Pregunta",
    "25. Pregunta",
    "26. Pregunta",
    "27. Pregunta",*/

  ])
  const [optionsGroup] = useState([
    "Calificación cero: menos del 15%",
    "Calificación uno: entre 15% y 30%",
    "Calificación dos: entre 30% y 45%",
    "Calificación tres: entre 45% y 60%",
    "Calificación cuatro: entre 60% y 75%",
    "Calificación cinco: más del 75%"
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

    localStorage.setItem("p2", JSON.stringify(answers))
    history.push("/base/form3")

  }

  return (
    <div className="animated fadeIn">
      <Row style={{ justifyContent: 'center' }}>
        <Col xs="12" md="10">
          <Card>
            <CardHeader align="center" style={{ color: '#43425D' }}>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous tag="button"></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} next tag="button"></PaginationLink></PaginationItem>
                  </Link>
                </Pagination>
              </Row>
              <h1>Revisión de estructura TI </h1>
              <h1>Componentes del dominio "APO"</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal">
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
                  <Link to="/base/form">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous tag="button"></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} next tag="button"></PaginationLink></PaginationItem>
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

export default Forms2;