import React, { Component, useState, FormControlLabel, Radio, RadioGroup, renderCount, Alert } from 'react';
import { Controller, useForm } from 'react-hook-form'

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
  ButtonGroup
} from 'reactstrap';
import { func } from 'prop-types';




// const handleInputChange = (e) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };


const Forms = () => {
  //Preguntas de EDM
  const [questionGroup] = useState([
    "1. Número de principios guía definidos para el gobierno y la toma de decisiones IT.",
    "2. Número de altos ejecutivos implicados en establecer el rumbo del gobierno para el IT.",
    "3. Porcentaje en el cual  los principios de gobierno de I&T acordados son evidentes en procesos y prácticas (porcentaje de procesos y prácticas que se atribuyen a los principios).",
    "4. ¿Qué porcentaje de riesgo de I&T excede la tolerancia al riesgo de la empresa?",
    "5. ¿Qué porcentaje de proyectos de la empresa se consideran con riesgo de TI? ",
    "6. ¿Qué porcentaje de planes de acción de riesgo de I&T son ejecutados a tiempo?",
    "7. ¿Qué porcentaje de estrategias del plan de recursos y arquitectura empresarial  proporcionan valor y mitiga el riesgo con recursos asignados?",
    "8. ¿Cuál es el porcentaje de reutilización de componentes de la arquitectura?",
    "9. ¿Cuál es el porcentaje de proyectos con asignaciones de recursos adecuadas?",
    "10. ¿Qué porcentaje de partes interesadas son incluidas en los requisitos de informes?",
    "11. ¿Cuál es el porcentaje de satisfacción de las partes interesadas con la comunicación y elaboración de informes?",
    "12. ¿Cuál es el nivel de participación de las partes interesadas en I&T de la empresa?", 
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
      localStorage.setItem("p1", JSON.stringify(answers))
      history.push("/base/form2")
    } else {
      setErrors("Debe responder todas las preguntas!")
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
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D'}} tag="button">1</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                  </Link>
                </Pagination>
              </Row>
              <h1>Revisión de estructura TI </h1>
              <h1>Componentes del dominio "EDM"</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal">
                <FormGroup >
                  <p>Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocieron los 
                    posibles tipos de evaluación para cada área existente, damos paso a realizar la siguiente encuesta 
                    adecuada con el tipo de calificación para las actividades los procesos del dominio EDM: </p>
                </FormGroup>

                {questionGroup.map((question, index1) => {
                  return (
                    <FormGroup key ={index1} >
                      <Card><CardHeader style={{backgroundColor:'#696791'}}></CardHeader>
                        <CardBody>
                          <Row>
                            <h5 style={{ color: '#43425D' }}> {question}</h5>
                          </Row>
                          {optionsGroup.map((option, index) => {
                            return (
                              <FormGroup key = {index} check className="radio">
                                <Input required = "required" onChange={(event)=>handleChange(event,index1)} checked={answers[index1] === index+""} className="form-check-input" type="radio" value={index} />
                                <Label htmlFor = {"radio"+index} className="form-check-label">{option}</Label>
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
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D'}} previous></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <Link to="/base/form2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form2">
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


export default Forms;

