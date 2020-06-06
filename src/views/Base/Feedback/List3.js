import React, { Component, useState } from 'react';
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const List3 = () => {

  const [activeTab, setActiveTab] = useState(1)
  const [answers, setAnswers] = useState([])
  /*FEEDBACK BAI */ 
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
  const [options9] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options10] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options11] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options12] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options13] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options14] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options15] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options16] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options17] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options18] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options19] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options20] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options21] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options22] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])
  const [options23] = useState([
    "Para una calificación de 0 en esta área se recomienda:",
    "Para una calificación de 1 en esta área se recomienda:",
    "Para una calificación de 2 en esta área se recomienda:",
    "Para una calificación de 3 en esta área se recomienda:",
    "Para una calificación de 4 en esta área se recomienda:",
    "Para una calificación de 5 en esta área se recomienda:"
  ])


  const [answerslist3] = useState([options0, options1, options2, options3, options4, options5, options6, options7, options8, options9, options10, options11, options12, options13, options14, options15, options16, options17, options18, options19, options20, options21, options22, options23])

  React.useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("p3")))
  }, [])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader align="center">
              <h1>Retroalimentación BAI</h1>
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
                    <ListGroupItem onClick={() => setActiveTab(10)} action active={activeTab === 10} >Diez</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(11)} action active={activeTab === 11} >Once</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(12)} action active={activeTab === 12} >Doce</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                      {answerslist3[0][answers[0]]}
                    </TabPane>
                    <TabPane tabId={2}>
                      {answerslist3[1][answers[1]]}
                    </TabPane>
                    <TabPane tabId={3}>
                      {answerslist3[2][answers[2]]}
                    </TabPane>
                    <TabPane tabId={4}>
                      {answerslist3[3][answers[3]]}
                    </TabPane>
                    <TabPane tabId={5}>
                      {answerslist3[4][answers[4]]}
                    </TabPane>
                    <TabPane tabId={6}>
                      {answerslist3[5][answers[5]]}
                    </TabPane>
                    <TabPane tabId={7}>
                      {answerslist3[6][answers[6]]}
                    </TabPane>
                    <TabPane tabId={8}>
                      {answerslist3[7][answers[7]]}
                    </TabPane>
                    <TabPane tabId={9}>
                      {answerslist3[8][answers[8]]}
                    </TabPane>
                    <TabPane tabId={10}>
                      {answerslist3[9][answers[9]]}
                    </TabPane>
                    <TabPane tabId={11}>
                      {answerslist3[10][answers[10]]}
                    </TabPane>
                    <TabPane tabId={12}>
                      {answerslist3[11][answers[11]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="4">
                  <ListGroup id="list-tab" role="tablist">
                    <ListGroupItem onClick={() => setActiveTab(13)} action active={activeTab === 13} >Trece</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(14)} action active={activeTab === 14} >Catorce</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(15)} action active={activeTab === 15} >Quince</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(16)} action active={activeTab === 16} >Dieciseis</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(17)} action active={activeTab === 17} >Diecisiete</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(18)} action active={activeTab === 18} >Dieciocho</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(19)} action active={activeTab === 19} >Diecinueve</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(20)} action active={activeTab === 20} >Veinte</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(21)} action active={activeTab === 21} >Veintiuno</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(22)} action active={activeTab === 22} >Veintidos</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(23)} action active={activeTab === 23} >Veintitres</ListGroupItem>
                    <ListGroupItem onClick={() => setActiveTab(24)} action active={activeTab === 24} >Veinticuatro</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col xs="12" md="8">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId={13}>
                      {answerslist3[12][answers[12]]}
                    </TabPane>
                    <TabPane tabId={14}>
                      {answerslist3[13][answers[13]]}
                    </TabPane>
                    <TabPane tabId={15}>
                      {answerslist3[14][answers[14]]}
                    </TabPane>
                    <TabPane tabId={16}>
                      {answerslist3[15][answers[15]]}
                    </TabPane>
                    <TabPane tabId={17}>
                      {answerslist3[16][answers[16]]}
                    </TabPane>
                    <TabPane tabId={18}>
                      {answerslist3[17][answers[17]]}
                    </TabPane>
                    <TabPane tabId={19}>
                      {answerslist3[18][answers[18]]}
                    </TabPane>
                    <TabPane tabId={20}>
                      {answerslist3[19][answers[19]]}
                    </TabPane>
                    <TabPane tabId={21}>
                      {answerslist3[20][answers[20]]}
                    </TabPane>
                    <TabPane tabId={22}>
                      {answerslist3[21][answers[21]]}
                    </TabPane>
                    <TabPane tabId={23}>
                      {answerslist3[22][answers[22]]}
                    </TabPane>
                    <TabPane tabId={24}>
                      {answerslist3[23][answers[23]]}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>

            </CardBody>
            <Row style={{ justifyContent: 'center' }}>
              <Pagination aria-label="Page navigation example">
                <Link to="/base/list2">
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
                <PaginationItem active>
                  <PaginationItem><PaginationLink style={{ color: '#F2F2F2', backgroundColor: '#43425D', borderColor: '#43425D' }} tag="button">3</PaginationLink></PaginationItem>
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
                <Link to="/base/list4">
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

export default List3;
