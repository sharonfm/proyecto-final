import React, { Component, useState, FormControlLabel, Radio, RadioGroup, renderCount} from 'react';
import {Controller, useForm} from 'react-hook-form'

import { Link,useHistory } from 'react-router-dom';
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

  const history = useHistory()

  const [selectedOption1, setSelectedOption1] = useState(null)
  const [selectedOption2, setSelectedOption2] = useState(null)

  const onValueChange1 = (event) => {
    setSelectedOption1(event.target.value)
    console.log(selectedOption1) 
  }
  const onValueChange2 = (event) => {
    setSelectedOption2(event.target.value)
    console.log(selectedOption2) 
  }

  
  const handleSubmit = (event) => {
    event.preventDefault()
    const selectedGroup = {
      ...selectedOption1,
      ...selectedOption2
    }
    localStorage.setItem("p1",JSON.stringify(selectedGroup))
    history.push("/base/form2")

  }
  //const [data, setData] = useState(null);
  //renderCount++;


  
    return (
      <div className="animated fadeIn">
        <Row style={{justifyContent: 'center'}}>
          <Col xs="12" md="10">
            <Card>
              <CardHeader align="center" style={{color:'#43425D'}}>
                <Row style={{justifyContent: 'center'}}>
                  <Pagination>
                    <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{color:'#43425D'}} previous></PaginationLink></PaginationItem>
                    </Link>
                    <Link to="/base/form0">
                      <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                    </Link>
                    <PaginationItem active>
                    <PaginationItem><PaginationLink style={{color:'#F2F2F2', backgroundColor:'#43425D'}} tag="button">1</PaginationLink></PaginationItem>
                    </PaginationItem>
                    <Link to="/base/form2">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">2</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form3">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">3</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form4">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">4</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form5">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">5</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form2">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} next></PaginationLink></PaginationItem>
                    </Link> 
                  </Pagination>
                </Row>
                <h1>Revisión de estructura TI</h1> 
              </CardHeader>
              <CardBody>
                <Form onSubmit = {handleSubmit}  encType="multipart/form-data" className="form-horizontal">
                  <FormGroup >
                    <p>En este espacio se estará explicando de forma detallada el proceso que se estará evaluando. 
                    Teniendo en cuenta la previa observación de la sección "Criterios" donde se conocerán los criterios de evaluación para cada área.</p>
                  </FormGroup>
                  <FormGroup onChange = {onValueChange1}>
                    <Card className= "card-accent-primary" >
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}> 1. Considera usted que Cristian Yepes es hermoso?</h5>
                        </Row> 
                        <FormGroup  check className="radio">
                          <Input checked={selectedOption1 ==="0"} className="form-check-input" type="radio" id="radio0" name="radios1" value= "0" required />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                
                        <FormGroup check className="radio">
                          <Input checked={selectedOption1 ==="1"} className="form-check-input" type="radio" id="radio1" name="radios1" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption1 ==="2"} className="form-check-input" type="radio" id="radio2" name="radios1" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption1 ==="3"} className="form-check-input" type="radio" id="radio3" name="radios1" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption1 ==="4"} className="form-check-input" type="radio" id="radio4" name="radios1" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption1 ==="5"} className="form-check-input" type="radio" id="radio5" name="radios1" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup> 
                      </CardBody>
                    </Card>
                  </FormGroup>

                  <FormGroup onChange = {onValueChange2}>
                    <Card className= "card-accent-primary" >
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}> 2. Considera usted que Cristian Yepes es hermoso?</h5>
                        </Row> 
                        <FormGroup  check className="radio">
                          <Input checked={selectedOption2 ==="0"} className="form-check-input" type="radio" id="radio0" name="radios2" value= "0" required/>
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                
                        <FormGroup check className="radio">
                          <Input checked={selectedOption2 ==="1"} className="form-check-input" type="radio" id="radio1" name="radios2" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption2 ==="2"} className="form-check-input" type="radio" id="radio2" name="radios2" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption2 ==="3"} className="form-check-input" type="radio" id="radio3" name="radios2" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption2 ==="4"} className="form-check-input" type="radio" id="radio4" name="radios2" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input checked={selectedOption2 ==="5"} className="form-check-input" type="radio" id="radio5" name="radios1" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup> 
                      </CardBody>
                    </Card>
                  </FormGroup>

                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>3. Pregunta 3</h5>
                        </Row>         
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios3" value="0" required/>
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                    
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios3" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios3" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios3" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios3" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios3" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>4. Pregunta 4</h5>
                        </Row>    
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios4" value="0" required/>
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                         
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios4" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios4" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios4" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios4" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios4" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>5. Pregunta 5</h5>
                        </Row>   
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios5" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                          
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios5" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios5" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios5" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios5" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios5" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>6. Pregunta 6</h5>
                        </Row>   
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios6" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                          
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios6" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios6" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios6" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios6" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios6" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>7. Pregunta 7</h5>
                        </Row> 
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios7" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios7" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios7" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios7" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios7" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios7" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>8. Pregunta 8</h5>
                        </Row>         
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios8" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                    
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios8" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios8" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios8" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios8" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios8" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>9. Pregunta 9</h5>
                        </Row> 
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios9" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios9" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios9" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios9" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios9" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios9" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>  
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>10. Pregunta 10</h5>
                        </Row>     
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios10" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                        
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios10" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios10" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios10" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios10" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios10" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>      
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>11. Pregunta 11</h5>
                        </Row>   
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios11" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                          
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios11" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios11" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios11" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios11" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios11" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>12. Pregunta 12</h5>
                        </Row>     
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio0" name="radios12" value="0" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 0</Label>
                        </FormGroup>                        
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios12" value="1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios12" value="2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios12" value="3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios12" value="4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios12" value="5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <Button  type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o" value="Enviar datos"></i> Enviar</Button>
                  <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reiniciar</Button>
                </Form>
              </CardBody>
              <CardFooter>
              <Row style={{justifyContent: 'center'}}>
                  <Pagination>
                    <Link to="/base/form0">
                    <PaginationItem><PaginationLink style={{color:'#43425D'}} previous></PaginationLink></PaginationItem>
                    </Link>
                    <Link to="/base/form0">
                      <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">Criterios</PaginationLink></PaginationItem>
                    </Link>
                    <PaginationItem active>
                    <PaginationItem><PaginationLink style={{color:'#F2F2F2', backgroundColor:'#43425D'}} tag="button">1</PaginationLink></PaginationItem>
                    </PaginationItem>
                    <Link to="/base/form2">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">2</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form3">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">3</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form4">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">4</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form5">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">5</PaginationLink></PaginationItem>
                    </Link> 
                    <Link to="/base/form2">
                      <PaginationItem><PaginationLink style={{color:'#43425D'}} next></PaginationLink></PaginationItem>
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

