import React, { Component, useState, FormControlLabel, Radio, RadioGroup, renderCount } from 'react';
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
  Row
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
    "1. ¿Cómo cree usted que se encuentran completados porcentualmente los principios para el gobierno y la toma de decisiones TI y el número de altos ejecutivos empleados en este proceso?",
    "2. ¿En qué grado se encuentran los principios de  gobierno de I&T en los procesos y prácticas?",
    "3. Indique el nivel de satisfacción de la parte interesada (medido a partir de encuestas).",
    "4. Indique el grado de conocimiento del contexto de su organización en cuanto al riesgo de TI.",
    "5. ¿Qué porcentaje de proyectos de la empresa se consideran con riesgo de TI? ",
/*  "6. Indique el nivel de satisfacción en el que se encuentra la monitorización de las metas y métricas de los procesos de gobierno y gestión de riesgos contra  los objetivos presentes.",
    "7. ¿En que grado se encuentra la definición de los principios fundamentales de la asignación y gestión de recursos y capacidades (de manera que la TI pueda satisfacer las necesidades de la empresa conforme a las prioridades acordadas y los límites presupuestados?",
    "8. Califique la adopción de estrategias de gestión de recursos, principios y del plan de recursos y arquitectura empresarial acordados.",
    "9. Califique la monitoría del rendimiento de los recursos en relación a los objetivos, analizando la causa de las posibles desviaciones.",
    "10. Indique el porcentaje en el que se encuentra la identificación de todas las partes interesadas de I&T relevantes dentro y fuera de la empresa. Agrupando a las partes interesadas en categorías de partes interesadas con requisitos similares.",
    "11. Indique la satisfacción de las partes interesadas con la comunicación y elaboración de informes.",
    "12. Indique el grado de evaluación que se realiza de forma periódica sobre la efectividad de los mecanismos para la participación y comunicación con partes interesadas internas y externas.", */
  ])
  
  const [optionsGroup] = useState([
    "NO: (Menos del 15%)",
    "PARCIALMENTE (Entre el 15% y el 50%)",
    "LARGAMENTE (Entre el 50% y el 85%)",
    "COMPLETAMENTE (Más del 85%)",
  ])

  const [answers,setAnswers] = useState([])

  const history = useHistory()

  const handleChange =(event,index) => {
    const tempAnswers = Object.assign({}, answers);
    tempAnswers[index] = event.target.value;   
    setAnswers(tempAnswers);
    console.log(tempAnswers)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    localStorage.setItem("p1", JSON.stringify(answers))
    history.push("/base/form2")

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
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
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
                  <p>En este espacio se estará explicando de forma detallada el proceso que se estará evaluando.
                    Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocerán los criterios de evaluación para cada área.</p>
                </FormGroup>

                {questionGroup.map((question, index1) => {
                  return (
                    <FormGroup key ={index1} >
                      <Card className="card-accent-primary" >
                        <CardBody>
                          <Row>
                            <h5 style={{ color: '#43425D' }}> {question}</h5>
                          </Row>
                          {optionsGroup.map((option, index) => {
                            return (
                              <FormGroup key = {index} check className="radio">
                                <Input onChange={(event)=>handleChange(event,index1)} checked={answers[index1] === index+""} className="form-check-input" type="radio" value={index} required />
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
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o" value="Enviar datos"></i> Enviar</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reiniciar</Button>
              </Form>
            </CardBody>
            <CardFooter>
              <Row style={{ justifyContent: 'center' }}>
                <Pagination>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                  </Link>
                  <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                  </Link>
                  <PaginationItem active>
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
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

