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
    "1. ¿Cuál es el porcentaje de programas exitosos conforme a la estrategia estándar definida.?",
    "2. ¿Qué porcentaje de programas se encuentran alineados con el marco empresarial de gestión de riesgos?",
    "3. ¿Cuál porcentaje de programas cerrados con éxito lograron el valor deseado?",
    "4. ¿Cuál es el porcentaje de los requisitos validados a través de enfoques como revisión realizada por colegas, validación del modelo o construcción de prototipos operativos?",
    "5. ¿Qué tan completa es la probabilidad estimada y el impacto del riesgo de los requisitos y las respuestas al riesgo enumerados?",
    "6. ¿Qué porcentaje de partes interesadas no aprueban la solución en relación con el caso de negocio?",
    "7. Número de diseños detallados para los procesos del negocio, servicios de soporte, aplicaciones e infraestructura y repositorios de información",
    "8. ¿Qué porcentaje de proyectos de desarrollo de soluciones que aplican las metodologías de desarrollo seleccionadas?",
    "9. ¿Cuál es el porcentaje de partes interesadas que aprueban los nuevos servicios de I&T.?",
    "10. ¿Cuál es el porcentaje de rendimiento real?",
    "11. ¿Qué porcentaje de comparaciones realizadas por la dirección sobre  la demanda actual de recursos contra la oferta y demanda estimadas?",
    "12. Porcentaje de incidencias de disponibilidad, rendimiento y capacidad sin resolver.", 
    "13. Nivel de participación  de la alta dirección.",
    "14. ¿En qué porcentaje se encuentran las  retroalimentaciones realizadas en cuanto a las partes interesadas sobre el nivel de comprensión del cambio?",
    "15. ¿Cuál es el porcentaje de planes desarrollados para la puesta en marcha y uso del cambio?",
    "16. ¿Cuál es el porcentaje de cambios sin éxito debidos a evaluaciones de impacto inadecuadas?",
    "17. ¿Qué porcentaje de cambios totales son correcciones de emergencia?",
    "18. ¿Qué porcentaje de actualizaciones de procedimientos y documentación de usuario son realizadas en el plazo oportuno?",
    "19. ¿Qué porcentaje de ajustes necesarios son realizados en los procedimientos (incluyendo la revisión de roles y responsabilidades y procedimientos de control)?",
    "20. ¿Cuál es el porcentaje de partes interesadas satisfechas con la completitud del proceso de prueba?",
    "21. Número de recursos adicionales del sistema de I&T  proporcionados para dar soporte.",
    "22. Número de actualizaciones de la estrategia de gestión de proyectos, buenas prácticas, herramientas y plantillas.",
    "23. ¿Qué porcentaje de actividades se encuentran alineadas con el alcance y los resultados esperados?",
    "24. ¿Cuál es el nivel de satisfacción de las partes interesadas expresado en la revisión de cierre del proyecto?"
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

    if(Object.keys(answers).length==24) {
      setErrors("")
      localStorage.setItem("p3", JSON.stringify(answers))
      console.log(JSON.stringify(answers))
      history.push("/base/form4")
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
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D'}} tag="button">3</PaginationLink></PaginationItem>
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
                <p>Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocieron los 
                    posibles tipos de evaluación para cada área existente, damos paso a realizar la siguiente encuesta 
                    adecuada con el tipo de calificación para las actividades los procesos del dominio BAI: </p>
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
                    <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor:'#43425D' }} tag="button">3</PaginationLink></PaginationItem>
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