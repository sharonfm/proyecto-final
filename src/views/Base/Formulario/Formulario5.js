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

const Forms5 = () => {
  //Preguntas de MEA
  const [questionGroup] = useState([
    "1. ¿Cuál es el porcentaje de procesos con metas y métricas definidos?",
    "2. ¿Qué porcentaje del entorno de controles es supervisado, analizado comparativamente y mejorado para cumplir con los objetivos de la organización?",
    "3. ¿Qué porcentaje de metas y métricas se encuentran alineadas con el sistema de supervisión de la empresa?",
    "4. ¿Cuál es el porcentaje de entorno de controles y marco supervisados, analizados comparativamente y mejorados continuamente para cumplir con los objetivos de la organización?",
    "5. Número de controles supervisados y probados para garantizar que los controles de los procesos de negocio operan de forma eficaz.",
    "6. ¿Qué porcentaje de implementación de acciones correctivas son derivadas de las evaluaciones de control?",
    "7. ¿Cuál es el porcentaje de satisfacción del personal relevante con la comunicación de los requisitos de cumplimiento regulatorio, nuevos y modificados?",
    "8. ¿Qué porcentaje de dueños de procesos aprueban y confirman el cumplimiento de éstos?",
    "9. Número de informes de acciones  correctivas que tratan brechas de cumplimiento  cerradas oportunamente",
    "10. ¿Qué porcentaje de iniciativas de aseguramiento siguen los estándares del programa y plan de aseguramiento?",
    "11. ¿Cuál es el porcentaje de objetivos alcanzados durante la iniciativa de aseguramiento?",
    "12. ¿Cuál es el  número de debilidades identificadas resueltas?", 
  ])
  const [optionsGroup] = useState([
    "Calificación cero: menos del 15%",
    "Calificación uno: entre 15% y 30%",
    "Calificación dos: entre 30% y 45%",
    "Calificación tres: entre 45% y 60%",
    "Calificación cuatro: entre 60% y 75%",
    "Calificación cinco: más del 75%"
  ])

  const [answers,setAnswers] = useState([])
  const [error,setErrors] = useState("")

  const history = useHistory()

  const handleChange =(event,index) => {
    const tempAnswers = Object.assign({}, answers);
    tempAnswers[index] = event.target.value;   
    setAnswers(tempAnswers);
    console.log(tempAnswers)
  }
  const resetAnswers = () => {
    setErrors("")
    setAnswers([]);
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    if(Object.keys(answers).length==12) {
      setErrors("")
      localStorage.setItem("p5", JSON.stringify(answers))
      console.log(JSON.stringify(answers))
      history.push("/views/estadisticas")
    } else {
      setErrors("Debe llenar todas las opciones")
    }   
  }


  return (
    <div className="animated fadeIn">
      <Row style={{ justifyContent: 'center' }}>
        <Col xs="12" md="10">
          <Card>
            <CardHeader align="center" style={{ color: '#43425D' }}>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form4">
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
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <PaginationItem disabled><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                </Pagination>
              </Row>
              <h1>Revisión de estructura TI </h1>
              <h1>Componentes del dominio "MEA"</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal">
                <FormGroup >
                <p>Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocieron los 
                    posibles tipos de evaluación para cada área existente, damos paso a realizar la siguiente encuesta 
                    adecuada con el tipo de calificación para las actividades los procesos del dominio MEA: </p>
                </FormGroup>

                {questionGroup.map((question, index1) => {
                  return (
                    <FormGroup key={index1} >
                      <Card><CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
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
                <Row style={{justifyContent:'center', color: 'red', padding:'15px'}}>
                  {error}
                </Row>
                <Row style={{justifyContent:'center'}}>
                  <div>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-check-square" value="Enviar datos"></i> Enviar</Button>{' '}
                    <Button onClick = {resetAnswers} size="sm" color="danger"><i className="fa fa-refresh"></i> Reiniciar</Button>        
                  </div>
                </Row>
              </Form>
            </CardBody>

            <CardFooter>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form4">
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
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <PaginationItem disabled><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                </Pagination>
              </Row>

            </CardFooter>
          </Card>
        </Col>
      </Row>

    </div>
  );

}

export default Forms5;