import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem,  Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Forms from '../Formulario/Formulario';
class List1 extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader align="center">
                <h1>Retroalimentación EDM</h1> 
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="4">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >Uno</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Dos</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >Tres</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(4)} action active={this.state.activeTab === 4} >Cuatro</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(5)} action active={this.state.activeTab === 5} >Cinco</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="12" md="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={1}>
                        
                        <p>Para este tipo de dominio(EDM) en cuanto a los objetivos de gestión 
                          y teniendo en cuenta la calificación de esta área entregada por usted como usuario nos 
                          permitimos darle retroalimentación y del paso a seguir en este proceso:... 
                          (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                      </TabPane>
                      <TabPane tabId={2}>
                        <p>Para este tipo de dominio(EDM) en cuanto a los objetivos de gestión 
                          y teniendo en cuenta la calificación de esta área entregada por usted como usuario nos 
                          permitimos darle retroalimentación y del paso a seguir en este proceso:... 
                          (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                      </TabPane>
                      <TabPane tabId={3}>
                        <p>Para este tipo de dominio(EDM) en cuanto a los objetivos de gestión 
                          y teniendo en cuenta la calificación de esta área entregada por usted como usuario nos 
                          permitimos darle retroalimentación y del paso a seguir en este proceso:... 
                          (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                      </TabPane>
                      <TabPane tabId={4}>
                        <p>Para este tipo de dominio(EDM) en cuanto a los objetivos de gestión 
                          y teniendo en cuenta la calificación de esta área entregada por usted como usuario nos 
                          permitimos darle retroalimentación y del paso a seguir en este proceso:... 
                          (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                      </TabPane>
                      <TabPane tabId={5}>
                        <p>Para este tipo de dominio(EDM) en cuanto a los objetivos de gestión 
                          y teniendo en cuenta la calificación de esta área entregada por usted como usuario nos 
                          permitimos darle retroalimentación y del paso a seguir en este proceso:... 
                          (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
              <Row style={{justifyContent: 'center'}}> 
                <Pagination aria-label="Page navigation example">
                <PaginationItem disabled><PaginationLink style={{color:'#43425D'}} previous></PaginationLink></PaginationItem>
                  <PaginationItem active>
                  <PaginationItem><PaginationLink style={{color:'#F2F2F2', backgroundColor:'#43425D'}} tag="button">1</PaginationLink></PaginationItem>
                  </PaginationItem>
                  <PaginationItem>
                    <Link to="/base/list2">
                    <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">2</PaginationLink></PaginationItem>
                    </Link>
                  </PaginationItem>
                  <PaginationItem>
                    <Link to="/base/list3">
                    <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">3</PaginationLink></PaginationItem>
                    </Link>
                  </PaginationItem>
                  <PaginationItem>
                    <Link to="/base/list4">
                    <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">4</PaginationLink></PaginationItem>
                    </Link>
                  </PaginationItem>
                  <PaginationItem>
                    <Link to="/base/list5">
                    <PaginationItem><PaginationLink style={{color:'#43425D'}} tag="button">5</PaginationLink></PaginationItem>
                    </Link>
                  </PaginationItem>
                  <Link to="/base/list2">
                    <PaginationItem>
                    <PaginationLink next></PaginationLink>
                    </PaginationItem>
                  </Link> 
                </Pagination>
                </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default List1;
