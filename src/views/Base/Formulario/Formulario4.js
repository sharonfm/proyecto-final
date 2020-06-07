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

const Forms4 = () => {
  //Preguntas de DSS
  const [questionGroup] = useState([
    "1. Número de KPI específicos/SMART incluidos en los contratos de externalización.",
    "2. ¿Cuál es el porcentaje de activos de infraestructura monitorizados conforme a la criticidad del servicio y la relación entre los elementos de configuración y servicios que dependen de ellos?",
    "3. Número de personas capacitadas para responder a los procedimientos de alarma medioambiental.",
    "4. Califique el tiempo promedio transcurrido para la gestión de cada tipo de solicitud de servicio",
    "5. ¿Qué porcentaje de solicitudes de servicio cumplen con los criterios de solicitud definidos?",
    "6. ¿Cuál es el nivel de satisfacción del usuario con el cumplimiento  de la petición de servicio?",
    "7. ¿Qué porcentaje de personas reciben formación de concienciación relacionada con el uso de dispositivos endpoint?",
    "8. Calificación promedio de las evaluaciones de seguridad física.",
    "9. ¿Cuál es el porcentaje de tickets creados de forma oportuna cuando los sistemas de monitorización identifican posibles incidentes de seguridad?"

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

    localStorage.setItem("p4", JSON.stringify(answers))
    history.push("/base/form5")

  }


  return (
    <div className="animated fadeIn">
      <Row style={{ justifyContent: 'center' }}>
        <Col xs="12" md="10">
          <Card>
            <CardHeader align="center" style={{ color: '#43425D' }}>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form3">
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
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#3b6978', borderColor:'#3b6978' }} tag="button">4</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                  </Link>
                </Pagination>
              </Row>
              <h1>Revisión de estructura TI </h1>
              <h1>Componentes del dominio "DSS"</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal">
                <FormGroup >
                <p>Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocieron los 
                    posibles tipos de evaluación para cada área existente, damos paso a realizar la siguiente encuesta 
                    adecuada con el tipo de calificación para las actividades los procesos del dominio DSS: </p>
                </FormGroup>

                {questionGroup.map((question, index1) => {
                  return (
                    <FormGroup key={index1} >
                      <Card><CardHeader style={{backgroundColor:'#3b6978'}}></CardHeader>
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
                <Row style={{justifyContent:'center'}}>
                  <div>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-check-square" value="Enviar datos"></i> Enviar</Button>{' '}
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-refresh"></i> Reiniciar</Button>                  
                  </div>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form3">
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
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#3b6978', borderColor:'#3b6978' }} tag="button">4</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
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

export default Forms4;