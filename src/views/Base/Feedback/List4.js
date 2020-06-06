import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List4 = () => {

  const [activeTab, setActiveTab] = useState(1)

  const [answers, setAnswers] = useState([])
  /*FEEDBACK DSS */ 
  const [options0] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options1] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options2] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options3] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options4] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options5] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options6] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options7] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options8] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])

  const [answerslist4] = useState([options0, options1, options2, options3, options4, options5, options6, options7, options8])

  React.useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("p4")))
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación DSS</h1>
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
                    <ListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Seis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Siete</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(8)} action active={activeTab === 8} >Ocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(9)} action active={activeTab === 9} >Nueve</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist4[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist4[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist4[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist4[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist4[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist4[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist4[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist4[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist4[8][answers[8]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list3">
                  <PaginationItem><PaginationLink style={{ color: '#43425D' }} previous></PaginationLink></PaginationItem>
                </Link>
                <PaginationItem>
                  <Link to="/base/list1">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">1</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list2">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">2</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list3">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor: '#43425D' }} tag="button">4</PaginationLink></PaginationItem>
                </PaginationItem>
                <PaginationItem>
                  <Link to="/base/list5">
                    <PaginationItem><PaginationLink style={{ color: '#43425D' }} tag="button">5</PaginationLink></PaginationItem>
                  </Link>
                </PaginationItem>
                <Link to="/base/list5">
                  <PaginationItem><PaginationLink style={{ color: '#43425D' }} next></PaginationLink></PaginationItem>
                </Link>
              </Pagination>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );

}

export default List4;
