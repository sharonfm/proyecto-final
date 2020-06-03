import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List2 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState([])

  const [options0] = useState([
    "respuesta 0 calif 0",
    "respuesta 0 calif 1",
    "respuesta 0 calif 2",
    "respuesta 0 calif 3",
    "respuesta 0 calif 4",
    "respuesta 0 calif 5"
  ])
  const [options1] = useState([
    "respuesta 1 calif 0",
    "respuesta 1 calif 1",
    "respuesta 1 calif 2",
    "respuesta 1 calif 3",
    "respuesta 1 calif 4",
    "respuesta 1 calif 5"
  ])
  const [options2] = useState([
    "respuesta 2 calif 0",
    "respuesta 2 calif 1",
    "respuesta 2 calif 2",
    "respuesta 2 calif 3",
    "respuesta 2 calif 4",
    "respuesta 2 calif 5"
  ])
  const [options3] = useState([
    "respuesta 3 calif 0",
    "respuesta 3 calif 1",
    "respuesta 3 calif 2",
    "respuesta 3 calif 3",
    "respuesta 3 calif 4",
    "respuesta 3 calif 5"
  ])
  const [options4] = useState([
    "respuesta 4 calif 0",
    "respuesta 4 calif 1",
    "respuesta 4 calif 2",
    "respuesta 4 calif 3",
    "respuesta 4 calif 4",
    "respuesta 4 calif 5"
  ])

  const [answerslist2] = useState([options0, options1, options2, options3, options4/* , options5, options6, options7, options8, options9, options10, options11 */])

  React.useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("p2")))
  }, [])


  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación APO</h1>
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
                    {/* <ListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Seis</ListGroupItem>
                      <ListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Siete</ListGroupItem> */}

                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist2[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist2[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist2[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist2[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist2[4][answers[4]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>

              {/* <Row>
                <Col xs="12" md="4">
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem onClick={() => setActiveTab(8)} action active={activeTab === 8} >Ocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(9)} action active={activeTab === 9} >Nueve</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(10)} action active={activeTab === 10} >Diez</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(11)} action active={activeTab === 11} >Once</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(12)} action active={activeTab === 12} >Doce</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(13)} action active={activeTab === 13} >Trece</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(14)} action active={activeTab === 14} >Catorce</ListGroupItem>

                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={8}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                    <TabPane tabId={9}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                    <TabPane tabId={10}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                    <TabPane tabId={11}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                    <TabPane tabId={12}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                    <TabPane tabId={13}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                    <TabPane tabId={14}>
                      <p>Para este tipo de dominio(APO) en cuanto a los objetivos de gestión y teniendo en cuenta la calificación
                      de esta área entregada por usted como usuario nos permitimos darle retroalimentación y del paso a seguir en este proceso:
                           ... (en este espacio se especificará la retroalimentación de las preguntas realizadas anteriormente).</p>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row> */}
            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list1">
                  <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                </Link>
                <PaginationItem>
                  <Link to="/base/list1">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D',  borderColor:'#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list4">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <Link to="/base/list3">
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

export default List2;
