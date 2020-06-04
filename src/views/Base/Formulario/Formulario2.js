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
    "1. ¿Qué porcentaje de  los componentes de gobierno se encuentran  integrados y alineados con el gobierno, filosofía de gestión y estilo operativo de la empresa?",
    "2. ¿Cuál es el nivel de satisfacción ejecutiva en cuanto a la toma de decisiones de gestión?",
    "3. ¿Cuál porcentaje de políticas y procedimientos activos , se encuentran documentados y actualizados?",
    "4. ¿Cuál es el porcentaje de partes interesadas clave del negocio y de TI para evaluar la disposición de transformación de la empresa, e identificar oportunidades, soluciones y todas las restricciones de implementación?",
    "5. ¿En qué porcentaje se encuentra la claridad de los requisitos de gobierno para  la implementación de la arquitectura?",
    "6. ¿Qué porcentaje de proyectos que utilizan servicios de arquitectura empresarial?",

    "7. ¿Qué porcentaje de oportunidades son habilitadas por nuevas tecnologías identificadas",
    "8. ¿Qué porcentaje de las iniciativas implementadas logran los beneficios previstos?",
    "9. Número de lecciones aprendidas y oportunidades de mejora captadas para su uso futuro",

    "10. ¿Cuánto es la utilidad de la información financiera como información para casos de negocio para nuevas inversiones en activos y servicios de I&T.?",
    "11. ¿Qué porcentaje de costes generales de I&T que se asignan de acuerdo con los modelos de costes acordados?",
    "12. ¿Cuál es el porcentaje de variación entre presupuestos, previsiones y costes reales?",

    "13. ¿Qué porcentaje de roles y responsabilidades en las relaciones se encuentran definidos, asignados y comunicados?",
    "14. ¿Cuál es el porcentaje de satisfacción del dueño de negocio con la coordinación de la prestación íntegra de servicios y soluciones de I&T?",
    "15. ¿Qué porcentaje  de servicios de I&T están alineados con los requisitos de negocio de la empresa?",

    "16. ¿Cuál es el número de actividades empresariales que no reciben el apoyo de ningún servicio de I&T?",
    "17. ¿Qué porcentaje de servicios monitorizados contra los niveles de servicio?",
    "18. ¿Cuál es el porcentaje de objetivos de servicio alcanzados?",

    "19. ¿Qué porcentaje de requisitos y expectativas del cliente son comunicadas a la empresa y la organización de TI?",
    "20. ¿Cuál es el porcentaje de proyectos revisados que cumplen con las metas y los objetivos de calidad esperados?",
    "21. ¿Qué porcentaje de servicios y productos son completados dentro del plazo?",
    "22. ¿Cuál es el nivel de satisfacción de las partes interesadas con el plan de seguridad de toda la empresa?",
    "23. Número de empleados que han completado con éxito una formación de concienciación sobre seguridad de la información.",
    "24. ¿Cuál es el nivel de satisfacción de las partes interesadas con el plan de seguridad?",
    "25. ¿Cuál es el porcentaje de metadatos que contienen medidas y métricas para evaluar la precisión y adopción de metadatos?",
    "26. ¿Qué número de esfuerzos  de mejora de la calidad de los datos identificados y registrados en un plan secuencial?",
    "27. Número de problemas identificados en los resultados de evaluaciones de la calidad de los datos"

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
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D' }} tag="button">2</PaginationLink></PaginationItem>
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
                <Button style={{ position: "absolute", left: "107px", right: "20px"}} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reiniciar</Button>

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
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D' }} tag="button">2</PaginationLink></PaginationItem>
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