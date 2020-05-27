import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem,  Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Forms from '../Formulario/Formulario';



const List1 = () => {

  const [activeTab, setActiveTab] = useState(1)
  

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
                      <ListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Uno</ListGroupItem>
                      <ListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Dos</ListGroupItem>
                      <ListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Tres</ListGroupItem>
                      <ListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Cuatro</ListGroupItem>
                      <ListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Cinco</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="12" md="8">
                    <TabContent activeTab={activeTab}>
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

export default List1;
