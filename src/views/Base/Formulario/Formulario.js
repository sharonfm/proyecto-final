import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
 
class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row style={{justifyContent: 'center'}}>
          <Col xs="12" md="10">
            <Card>
              <CardHeader align="center" style={{color:'#43425D'}}>
                <h1>Revisión de estructura TI</h1> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup >
                    <p>En este formulario se hablará de cosas vagas
                      en este formulario se hablará de cosas vagas 
                      en este formulario se hablará de cosas vagas 
                      en este formulario se hablará de cosas vagas 
                      en este formulario se hablará de cosas vagas</p>
                  </FormGroup>
                  
                  <FormGroup>
                    <Card className= "card-accent-primary" >
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                        <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  <FormGroup>
                    <Card className= "card-accent-primary">
                      <CardBody>
                        <Row>
                          <h5 style={{color:'#43425D'}}>1. Antes tú me pichabas ahora yo te picheo?</h5>
                        </Row>                            
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                          <Label check className="form-check-label" htmlFor="radio1">Option 1</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                          <Label check className="form-check-label" htmlFor="radio2">Option 2</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 3</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio4" name="radios" value="option4" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 4</Label>
                        </FormGroup>
                        <FormGroup check className="radio">
                          <Input className="form-check-input" type="radio" id="radio5" name="radios" value="option5" />
                          <Label check className="form-check-label" htmlFor="radio3">Option 5</Label>
                        </FormGroup>     
                      </CardBody>
                    </Card>
                  </FormGroup>
                  
                </Form>
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
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Enviar</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reiniciar</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Forms;

